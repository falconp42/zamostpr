# Staging Environment Setup for zamostpr.com

## Overview

This repository now has a **staging branch** configured for preview deployments separate from the live production site at zamostpr.com.

## Current Setup

- **Production**: `main` branch → GitHub Pages → zamostpr.com (with custom domain & SSL)
- **Staging**: `staging` branch → Ready for Netlify/Vercel deployment

## Branch Structure

- `main` - Production branch (deploys to zamostpr.com via GitHub Pages)
- `staging` - Staging branch (for preview deployments)

## How to Enable Staging Preview URL

Since GitHub Pages can only serve one site per repository, and production is already using the main branch with a custom domain, we recommend using **Netlify** for staging previews (free, no credit card required).

### Option 1: Netlify (Recommended - Free & Easy)

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select this repository: `falconp42/zamostpr`
4. Configure:
   - **Branch to deploy**: `staging`
   - **Build command**: (leave empty - static HTML)
   - **Publish directory**: `.` (root)
5. Click "Deploy site"

Netlify will automatically:
- Deploy the staging branch at a URL like `zamostpr-staging.netlify.app`
- Rebuild on every push to the `staging` branch
- Provide deploy previews for pull requests

The `netlify.toml` file in this repo is already configured for this workflow.

### Option 2: Vercel (Alternative)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import `falconp42/zamostpr`
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (leave empty)
   - **Output Directory**: `./`
5. After initial deploy, go to Settings → Git
6. Set **Production Branch** to `staging`

### Option 3: GitHub Pages Preview (Manual)

If you prefer to stick with GitHub Pages only:

1. Go to repo Settings → Pages
2. Temporarily change source from `main` to `staging`
3. Visit `https://falconp42.github.io/zamostpr`
4. **Important**: Change back to `main` before deploying to production

⚠️ **Warning**: This approach requires manual switching and will take down the production custom domain temporarily.

## Workflow for Barbara's Change Requests

Once staging is set up with Netlify/Vercel:

1. **Make changes** on the `staging` branch
2. **Push to GitHub**: `git push origin staging`
3. **Preview automatically deploys** to staging URL
4. **Barbara reviews** at the staging URL
5. **When approved**: Merge `staging` → `main` to deploy to production

## Commands

```bash
# Switch to staging branch
git checkout staging

# Make your changes, then commit
git add .
git commit -m "Update: description of changes"

# Push to staging (auto-deploys to preview URL)
git push origin staging

# When ready for production, merge to main
git checkout main
git merge staging
git push origin main
```

## Current Status

- ✅ `staging` branch created and pushed to GitHub
- ⏳ Netlify/Vercel deployment (needs Alan to connect - 5 minutes)
- 📄 Configuration files added (`netlify.toml`)

## Questions?

Contact Alan Ryman for technical setup or Barbara Zamost for content review.
