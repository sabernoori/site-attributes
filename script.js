(() => {
  const attrs = window.siteAttributes || {};
  const all = [...document.querySelectorAll("*")];

  const getValue = (name, type) => attrs[`${type}-${name}`] ?? "";

  const normalizeLink = (name, value) => {
    const v = String(value || "").trim();
    if (!v) return "";
    if (/^(tel:|mailto:|https?:|\/)/i.test(v)) return v;
    if (name === "phone") return `tel:${v}`;
    if (name === "email") return `mailto:${v}`;
    return v;
  };

  const makeAnchor = (el, href) => {
    if (el.tagName === "A") {
      el.href = href;
      return;
    }

    const a = document.createElement("a");
    a.href = href;

    [...el.attributes].forEach(attr => {
      if (!/^data-(text|link)-/.test(attr.name)) a.setAttribute(attr.name, attr.value);
    });

    a.innerHTML = el.innerHTML;
    el.replaceWith(a);
  };

  const names = new Set();

  all.forEach(el => {
    [...el.attributes].forEach(attr => {
      const match = attr.name.match(/^data-(text|link)-(.+)$/);
      if (match) names.add(match[2]);
    });
  });

  names.forEach(name => {
    const textValue = getValue(name, "text");
    const linkValue = getValue(name, "link") || textValue;
    const href = normalizeLink(name, linkValue);

    all.forEach(el => {
      if (el.hasAttribute(`data-text-${name}`) && textValue) {
        el.textContent = textValue;
      }

      if (el.hasAttribute(`data-link-${name}`) && href) {
        makeAnchor(el, href);
      }
    });
  });
})();
