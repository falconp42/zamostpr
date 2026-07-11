# Barbara review checklist

**Branch:** `feature/proof-campaigns-contact`  
**Pull request:** [github.com/falconp42/zamostpr/pull/1](https://github.com/falconp42/zamostpr/pull/1)  
**Status:** Ready for your review — **not live** on zamostpr.com until merged and deployed.

Alan paused further changes until you sign off. Use this list section by section; mark anything to keep, change, or cut.

---

## How to preview

**Option A — GitHub Pages preview (if enabled on the PR)**  
Open the PR and use the deployment preview link, if shown.

**Option B — Local preview (Alan can screen-share or send a link)**  
```bash
cd zamostpr
git checkout feature/proof-campaigns-contact
python3 -m http.server 8080
# open http://localhost:8080
```

**Option C — Compare to live site**  
Current production: [zamostpr.com](https://zamostpr.com) — this branch is a full redesign of structure, copy, and contact flow.

---

## Must complete before launch

These block going live.

| # | Item | Owner | Notes |
|---|------|-------|-------|
| 1 | **Google Form** | Barbara | Create form per [google-workspace-contact-form.md](./google-workspace-contact-form.md). Paste URL into `js/config.js`. Until then, contact shows email/phone only. |
| 2 | **Testimonials** | Barbara | Two placeholder quotes in **What Clients Say** — replace with **approved** quotes, names, and titles. Remove the yellow “placeholder” note. |
| 3 | **Campaign copy accuracy** | Barbara | Review every case study (especially GDB, 9/11 Day, Sandy Hook, Beyond Differences). Confirm role wording, results, and what you’re comfortable stating publicly. |
| 4 | **Client roster** | Barbara | Confirm all names in **Client Roster** are correct and OK to list. Add/remove/rename as needed. |
| 5 | **Final approval** | Barbara | Explicit “approved to merge” after reading the full page on desktop and phone. |

---

## Section-by-section review

### Hero (top of page)

- [ ] **Headline:** “Stories that move missions forward” — keep or suggest alternative?
- [ ] **Subcopy:** “Senior PR counsel… you work directly with Barbara, not a junior account team” — accurate tone?
- [ ] **Current clients line:** Guide Dogs for the Blind + 9/11 Day — correct and current?
- [ ] **Hero photo:** Interim crop of existing photo (`BZHeadshot2-hero.JPG`). Acceptable for launch, or wait for new headshot? See [hero-headshot-shot-list.md](./hero-headshot-shot-list.md).
- [ ] **Mission card:** “Current focus: Guide Dogs for the Blind” with puppy image — keep?
- [ ] **Media logos:** Label is “Placements have included” (not a promise of future placements). Outlet list accurate?
- [ ] **Email / phone** in hero: `barbara@zamostpr.com` · `(415) 987-2810` — still correct?

### Proof strip (stats row)

- [ ] **35+ years** — accurate?
- [ ] **Silver Anvil, 2008** — wording OK?
- [ ] **“And hundreds more…”** — comfortable with this claim?

### What Clients Say

- [ ] Supply **two real testimonials** (quote + name + title + organization).
- [ ] Permission obtained to use names on the website?
- [ ] Remove placeholder note once real quotes are in.

### Case Studies / Campaign Results (`#work`)

**Guide Dogs flagship block (Challenge / Strategy / Approach / Result)**

- [ ] Factual? Any client-sensitive detail to soften?
- [ ] Link to GDB [media archive](https://www.guidedogs.com/about-guide-dogs-for-the-blind/media) — OK to feature?

**9/11 Day (featured card)**

- [ ] Role described as “public relations” / “publicity support” — accurate?
- [ ] “Largest annual day of charitable engagement” — OK to cite?
- [ ] Result line (“national broadcast, print, and digital…”) — defensible?

**Supporting campaigns**

- [ ] Sandy Hook Promise — OK to include? Wording?
- [ ] Beyond Differences — OK to include? Wording?
- [ ] Bay Lights / *Impossible Light* — OK?
- [ ] Simpsons × 7-Eleven / Silver Anvil — OK?
- [ ] Entertainment / IMDb card — OK?
- [ ] **Best fit** card — does this describe who you want to attract?

**Order / emphasis**

- [ ] Right campaigns featured? Anything missing or should be removed?

### About

- [ ] Bio paragraphs — anything wrong, dated, or too long?
- [ ] GDB + 9/11 Day roles in About — match how you describe them to clients?
- [ ] **Drum photo** + caption — personality beat you’re happy with?
- [ ] **How we work** (3 steps) + quote — sound like you?
- [ ] Highlight bullets (nonprofit, consumer, film, crisis, etc.) — complete?
- [ ] LinkedIn URL correct?

### How We Work Together (services)

Three packages replaced the old long service menu:

- [ ] **Mission Launch** — matches how you sell launch work?
- [ ] **Ongoing Media Relations** — matches retained work?
- [ ] **Crisis & Reputation** — matches crisis/training work?
- [ ] Footnote (“Also available: consumer brand launches…”) — anything to add?
- [ ] Placement name-drop (Today Show, NYT, etc.) in services intro — accurate?

### Client Roster (`#clients`)

- [ ] All nonprofit names correct?
- [ ] Consumer list (Ghirardelli, Clorox, etc.) — still OK to display?
- [ ] Entertainment, professional services, real estate lists — complete?
- [ ] Section title **Client Roster** vs old **Clients** — preference?

### Get in Touch (`#contact`)

- [ ] Section headline “Let’s Make Some Noise” — on-brand or too casual?
- [ ] Google Form fields (see setup doc) — right questions for your intake?
- [ ] **Optional:** Calendly link for scheduling — want one? (paste URL in `js/config.js`)

### Navigation & footer

- [ ] Main nav: Work · Services · About · Get in Touch — enough? Missing anything?
- [ ] **Clients** removed from main nav (still in footer as “Roster”) — OK?
- [ ] Footer tagline: “Strategic PR for nonprofits & consumer brands” — OK?

---

## Design & imagery

| Asset | Location | Your call |
|-------|----------|-----------|
| Hero headshot | `images/BZHeadshot2-hero.JPG` | Launch with interim crop, or hold for professional shoot |
| GDB puppy thumb | Hero mission card | Keep? |
| Drum photo | About | Keep? |
| Puppy background | Client roster section | Keep subtle background? |
| Colors | Navy / gold / cream | Feel right for your brand? |

**New headshot:** [hero-headshot-shot-list.md](./hero-headshot-shot-list.md) — brief you can hand any Bay Area photographer.

---

## What changed vs live zamostpr.com (summary)

- Proof-first layout: stats, case studies, media logos above the fold
- GDB + 9/11 Day elevated as current focus
- Services simplified to three outcome packages
- FormSubmit removed → Google Workspace Form (you set up)
- Split hero with photo + editorial panel
- Testimonials section added (needs your quotes)
- Work vs Clients sections separated (depth vs roster)

---

## Optional — not required for launch

- [ ] Calendly (or other scheduler) on contact section
- [ ] Professional hero headshot session
- [ ] Additional campaign cards or GDB placement links
- [ ] Google Form theme colors matched to site
- [ ] Analytics (Google Analytics / Plausible) — Alan can add if wanted

---

## How to send feedback

Reply to Alan with any of:

1. **Approved as-is** (plus Form URL + testimonials when ready)
2. **Section notes** — e.g. “9/11 Day card: change X to Y”
3. **Track changes** — edit `index.html` comments or send Word/Google Doc redlines

**Do not merge to production** until items in **Must complete before launch** are checked.

---

*Last updated: July 2026 — branch `feature/proof-campaigns-contact`*
