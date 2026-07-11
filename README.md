# Zamost Public Relations — zamostpr.com

Static site for [Zamost Public Relations](https://zamostpr.com/), deployed via GitHub Pages (`CNAME` → zamostpr.com).

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Contact form (FormSubmit)

The contact form posts to [FormSubmit](https://formsubmit.co/) at `barbara@zamostpr.com`.

**First-time setup:** On the first form submission after deploy, FormSubmit sends a confirmation email to `barbara@zamostpr.com`. Barbara must click the activation link before messages are delivered.

## Editing content

- **Copy & structure:** `index.html`
- **Styles:** `css/styles.css`
- **Interactions:** `js/main.js`
- **Images:** `images/`

## Branch: `feature/proof-campaigns-contact`

Adds proof strip, campaigns section, enhanced About (IMDb + Silver Anvil), contact form, and hero refresh.
