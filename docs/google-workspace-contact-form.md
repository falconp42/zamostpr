# Contact form — Google Workspace setup

**Account:** `barbara@zamostpr.com` (Google Workspace)  
**Site:** static GitHub Pages — no server-side code

Use a Google Form for submissions. Google emails Barbara on each response and stores answers in a Sheet.

---

## 1. Create the form

1. Sign in at [forms.google.com](https://forms.google.com) as `barbara@zamostpr.com`.
2. **Blank form** → title: `Zamost PR — Website inquiry`
3. Add fields (match the old site form):

| Field | Type | Required |
|-------|------|----------|
| First name | Short answer | Yes |
| Last name | Short answer | Yes |
| Email | Short answer | Yes (turn on response validation → Email) |
| What do you need? | Dropdown | No — Campaign launch, Ongoing PR / media relations, Crisis communications, Media training, Other |
| Message | Paragraph | Yes |

4. **Settings** (gear icon):
   - Collect email addresses: optional (you already ask in the form)
   - Limit to 1 response: off
   - See summary charts and responses: on

---

## 2. Notifications and archive

1. Open the **Responses** tab.
2. Click the green Sheets icon → **Create a new spreadsheet** (e.g. `zamostpr.com inquiries`).
3. In **Responses**, open the ⋮ menu → **Get email notifications for new responses** → turn **on**.

Barbara gets an email for every submission. The Sheet is the archive.

---

## 3. Connect the website

1. In the form, click **Send** → **Link** → copy the URL.  
   It looks like: `https://docs.google.com/forms/d/e/1FAIpQLS…/viewform`
2. Paste it into `js/config.js`:

```javascript
window.ZAMOST_CONFIG = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform'
};
```

3. Commit, push, and verify on zamostpr.com — the embedded form should appear in the contact section.

**Open in new tab:** Visitors can also use the link under the embed.

---

## 4. Optional polish

- **Form description:** “Messages go directly to Barbara Zamost at Zamost Public Relations.”
- **Confirmation message:** “Thank you — Barbara will be in touch soon.”
- **Theme:** Adjust colors in Form → Customize to navy `#1a2d4a` and gold `#c8882a` if desired.

---

## Why this instead of FormSubmit

- Lives in Barbara’s Workspace — no third-party activation email
- Built-in notifications and Sheets backup
- No fragile AJAX or CORS on a static site
- Free with Google Workspace
