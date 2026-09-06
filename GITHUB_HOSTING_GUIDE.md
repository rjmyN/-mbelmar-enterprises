# GitHub Pages Hosting Guide

## Complete Step-by-Step Instructions

### Prerequisites
- A GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer
- Your website files ready (already done! ✓)

---

## Step 1: Check if Git is Installed

Open PowerShell and run:
```powershell
git --version
```

**If Git is installed:** You'll see something like `git version 2.x.x`  
**If NOT installed:** Download from https://git-scm.com/download/win

---

## Step 2: Configure Git (First Time Only)

If this is your first time using Git, set your identity:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Replace with your actual name and the email associated with your GitHub account.

---

## Step 3: Create a GitHub Repository

### Option A: Via GitHub Website (Easier)
1. Go to https://github.com
2. Log in to your account
3. Click the **+** icon in the top right corner
4. Select **"New repository"**
5. Fill in the details:
   - **Repository name:** `mbelmar-enterprises` (or your preferred name)
   - **Description:** "Official website for Mbelmar Enterprises"
   - **Visibility:** Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Add a README file" (we already have one)
   - **DO NOT** add .gitignore or license
6. Click **"Create repository"**

### Option B: Via Command Line
```powershell
# We'll do this in Step 4 if you prefer
```

---

## Step 4: Initialize Git in Your Project

Open PowerShell and navigate to your project folder:

```powershell
cd "C:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises"
```

Initialize Git repository:

```powershell
git init
```

You should see: `Initialized empty Git repository`

---

## Step 5: Add All Files to Git

```powershell
git add .
```

This stages all your files (index.html, styles.css, script.js, logo.jpg, etc.)

---

## Step 6: Create Your First Commit

```powershell
git commit -m "Initial commit: Mbelmar Enterprises website"
```

You should see a summary of files added.

---

## Step 7: Connect to GitHub Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/mbelmar-enterprises.git
```

**Example:** If your username is `johnsmith`:
```powershell
git remote add origin https://github.com/johnsmith/mbelmar-enterprises.git
```

---

## Step 8: Rename Branch to 'main' (GitHub Standard)

```powershell
git branch -M main
```

---

## Step 9: Push Your Code to GitHub

```powershell
git push -u origin main
```

**You'll be prompted to log in:**
- A browser window may open for authentication
- Or enter your GitHub username and Personal Access Token (not password)

**If you need a Personal Access Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Select `repo` scope → Generate
3. Copy the token and use it as your password

---

## Step 10: Enable GitHub Pages

### Via GitHub Website:
1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll down and click **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

**Your site will be live at:**
```
https://YOUR_USERNAME.github.io/mbelmar-enterprises/
```

---

## Step 11: Verify Your Website

After a few minutes, visit:
```
https://YOUR_USERNAME.github.io/mbelmar-enterprises/
```

You should see your beautiful Mbelmar Enterprises website live!

---

## Common Issues & Solutions

### Issue 1: "Permission denied (publickey)"
**Solution:** Use HTTPS instead of SSH (we already did this above)

### Issue 2: "Repository not found"
**Solution:** Double-check the repository name and your username in the URL

### Issue 3: "Authentication failed"
**Solution:** Use a Personal Access Token instead of your password

### Issue 4: "Pages not working"
**Solution:** 
- Ensure repository is Public (not Private)
- Wait 2-5 minutes for initial deployment
- Check that `index.html` is in the root directory (it is!)

### Issue 5: Logo or CSS not loading
**Solution:** Already handled! All paths are relative and will work correctly.

---

## Using a Custom Domain (Optional)

If you want to use your own domain like `www.mbelmarenterprises.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. In your GitHub repository settings → Pages
3. Enter your custom domain
4. In your domain registrar's DNS settings, add these records:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
5. Wait for DNS propagation (can take up to 48 hours)

---

## Updating Your Website Later

Whenever you make changes to your website:

```powershell
# Navigate to your project folder
cd "C:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises"

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update contact form styling"

# Push to GitHub
git push
```

Your website will automatically update within 1-2 minutes!

---

## Repository Structure on GitHub

After pushing, your repository will contain:
```
mbelmar-enterprises/
├── index.html
├── privacy.html
├── styles.css
├── script.js
├── logo.jpg
├── README.md
├── QUICK_START.md
└── GITHUB_HOSTING_GUIDE.md
```

---

## Security Notes for GitHub Pages

✓ Your site will be served over HTTPS automatically  
✓ GitHub Pages is free for public repositories  
✓ No server configuration needed  
✓ Automatic deployment on every push  

⚠️ Remember: 
- Contact form still needs backend integration
- Don't commit sensitive credentials or API keys
- Keep your Personal Access Token secure

---

## Next Steps After Hosting

1. **Test the live site** on multiple devices
2. **Set up form backend** (see README.md for options)
3. **Add custom domain** (optional)
4. **Share the link** with banks, partners, regulators, etc.

---

## Quick Reference Commands

```powershell
# Check status
git status

# See what changed
git diff

# View commit history
git log --oneline

# Pull latest changes (if editing from multiple places)
git pull

# Create a new branch for testing
git checkout -b test-changes
```

---

## Need Help?

- GitHub Pages Documentation: https://pages.github.com/
- GitHub Support: https://support.github.com/
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics

---

**Ready to get started?** Open PowerShell and begin with Step 1!
