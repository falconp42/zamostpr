# Zamost Public Relations — zamostpr.com

Static site for [Zamost Public Relations](https://zamostpr.com/), deployed via GitHub Pages (`CNAME` → zamostpr.com).

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Contact form (Google Workspace)

Submissions use a **Google Form** on `barbara@zamostpr.com` (Google Workspace):

- Email notification on each response
- Responses archived in Google Sheets
- Embedded on the contact section of the site

**Setup:** See [docs/google-workspace-contact-form.md](docs/google-workspace-contact-form.md)

**After creating the form:** paste the form URL into `js/config.js`:

```javascript
window.ZAMOST_CONFIG = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform',
  calendlyUrl: ''  // optional: https://calendly.com/…
};
```

Until that URL is set, the contact section shows an email fallback.

## Editing content

- **Copy & structure:** `index.html`
- **Styles:** `css/styles.css`
- **Interactions:** `js/main.js`
- **Form URL:** `js/config.js`
- **Images:** `images/`

## Branch: `feature/proof-campaigns-contact`

Adds proof strip, campaigns section, enhanced About (IMDb + Silver Anvil), Google Form contact, and hero refresh.
