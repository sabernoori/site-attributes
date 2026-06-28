(() => {
  const attrs = siteAttributes || {};
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

  const makeClickable = (el, href) => {
    if (el.tagName === "A") {
      el.href = href;
      return;
    }

    el.setAttribute("role", "link");
    el.setAttribute("tabindex", "0");
    el.style.cursor = "pointer";

    const go = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      window.location.href = href;
    };

    el.addEventListener("click", go);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") go(e);
    });
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
        makeClickable(el, href);
      }
    });
  });
})();