# Webflow Site Attributes

A tiny JavaScript utility for Webflow sites that lets you manage reusable text and links from one central config object.

Use it to control items like:

- Phone numbers
- Email addresses
- Social links
- Website names
- Any other reusable site-wide text or link values

---

## Features

- Centralize content in one config object.
- Use `data-text-*` to fill text content.
- Use `data-link-*` to make elements clickable.
- If `link-*` is missing or empty, it falls back to `text-*`.
- Supports any custom name, such as `phone`, `email`, `instagram`, `whatsapp`, or `website`.
- Can replace non-link elements like `p` or `div` with real `<a>` elements when needed.

---

## How It Works

Define your values in one place:

```html
<script>
window.siteAttributes = {
  "text-phone": "+98 XXX XXX XXXX",
  "link-phone": "",
  "text-email": "Send email to us",
  "link-email": "hello@site.com",
  "text-instagram": "https://instagram.com/profile"
};
</script>
```

Then add attributes to your Webflow elements:

```html
<p data-text-phone></p>
<p data-link-phone></p>
<a data-link-email></a>
<div data-text-email></div>
```

The script reads the matching key from `window.siteAttributes` and updates the element automatically.

---

## Usage

### 1. Add the config in Webflow

Paste this into your site or page custom code:

```html
<script>
window.siteAttributes = {
  "text-phone": "+98 XXX XXX XXXX",
  "link-phone": "",
  "text-email": "Send email to us",
  "link-email": "hello@site.com",
  "text-instagram": "https://instagram.com/profile"
};
</script>
```

### 2. Add the script file

Host the script on GitHub Pages, a CDN, or any static file host, then include it:

```html

<script src="https://sabernoori.github.io/site-attributes/script.js" defer></script>

```

### 3. Add attributes in Webflow

Use custom attributes on any element:

```html
<p data-text-phone></p>
<p data-link-phone></p>
<p data-text-email></p>
<a data-link-email></a>
```

---

## Attribute Rules

### Text attributes

Use:

```html
data-text-phone
data-text-email
data-text-instagram
```

These replace the element’s visible text.

### Link attributes

Use:

```html
data-link-phone
data-link-email
data-link-instagram
```

These make the element clickable.

If the matching `link-*` value is empty, the script will use the `text-*` value instead.

---

## Example

### Config

```html
<script>
window.siteAttributes = {
  "text-phone": "+98 XXX XXX XXXX",
  "link-phone": "",
  "text-email": "Send email to us",
  "link-email": "hello@site.com",
  "text-instagram": "https://instagram.com/profile"
};
</script>
```

### Webflow elements

```html
<p data-text-phone></p>
<p data-link-phone class="text-size-medium">Sample Text</p>
<a data-link-email></a>
<span data-text-email></span>
```

### Result

- `data-text-phone` becomes `+98 XXX XXX XXXX`
- `data-link-phone` becomes a clickable phone link
- `data-link-email` becomes a clickable email link
- `data-link-instagram` uses the text value if no link is provided

---

## Best Practices

- Put the config before the script file.
- Use `window.siteAttributes`, not a plain variable.
- Test on the published site.
- Use `data-*` attributes in Webflow, not plain attribute names.

---

## Supported Formats

The script can automatically handle:

- `tel:` links
- `mailto:` links
- Normal URLs
- Relative paths like `/contact`

If the value does not already include a protocol, the script can convert `phone` and `email` into the proper format.

---

## Simple Example

```html
<script>
window.siteAttributes = {
  "text-phone": "+98 XXX XXX XXXX",
  "link-phone": "",
  "text-email": "hello@site.com",
  "link-email": "hello@site.com"
};
</script>

<script src="https://sabernoori.github.io/site-attributes/script.js" defer></script>

<p data-link-phone></p>
<a data-link-email></a>
```

---

## Notes for Webflow Users

- Custom attributes in Webflow are useful for adding extra behavior to elements.
- For clickable links, the safest approach is to convert the target element into a real `<a>` element.
- Custom code should be tested on the published site for reliable results.

---

## License

MIT

---

## Contributing

Pull requests and improvements are welcome.

---

## Contact

Built for Webflow users who want a simpler way to manage reusable content across their site.
