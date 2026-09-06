# Quick GitHub Hosting - 3 Easy Ways

## 🚀 Method 1: Automated Script (EASIEST)

### Just run this command in PowerShell:

```powershell
cd "C:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises"
.\setup-github.ps1
```

The script will:
- ✓ Check Git installation
- ✓ Ask for your GitHub username
- ✓ Initialize the repository
- ✓ Prepare everything for upload
- ✓ Give you exact next steps

Then follow the on-screen instructions!

---

## 📝 Method 2: Manual Commands (5 MINUTES)

### Step-by-Step in PowerShell:

```powershell
# 1. Navigate to your folder
cd "C:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises"

# 2. Initialize Git
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: Mbelmar Enterprises website"

# 5. Create repository on GitHub website first!
# Go to: https://github.com/new
# Name it: mbelmar-enterprises
# Make it: Public
# Don't add README
# Click: Create repository

# 6. Connect to GitHub (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/mbelmar-enterprises.git

# 7. Rename branch to main
git branch -M main

# 8. Push to GitHub
git push -u origin main

# 9. Enable GitHub Pages
# Go to: Repository → Settings → Pages
# Select: Branch: main, Folder: / (root)
# Click: Save
```

**Your site will be live at:**
`https://YOUR_USERNAME.github.io/mbelmar-enterprises/`

---

## 🌐 Method 3: GitHub Desktop App (NO COMMANDS)

### Visual Interface - No Terminal Needed!

1. **Download GitHub Desktop**
   - Go to: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Add Your Project**
   - File → Add Local Repository
   - Choose: `C:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises`
   - Click: "Create a repository"

3. **Make First Commit**
   - You'll see all files listed
   - Summary: "Initial commit"
   - Click: "Commit to main"

4. **Publish to GitHub**
   - Click: "Publish repository"
   - Name: mbelmar-enterprises
   - Keep: "Keep this code public" CHECKED
   - Click: "Publish repository"

5. **Enable GitHub Pages**
   - Go to: https://github.com/YOUR_USERNAME/mbelmar-enterprises
   - Settings → Pages
   - Branch: main → / (root) → Save

**Done! Your site is live!**

---

## 🎯 What You'll Need

Before starting any method:

- [ ] GitHub account (create at https://github.com/signup)
- [ ] Git installed (already installed ✓)
- [ ] Your GitHub username
- [ ] Your GitHub password or Personal Access Token

---

## 🔑 Getting a Personal Access Token

If Git asks for password and it doesn't work:

1. Go to: https://github.com/settings/tokens
2. Click: "Generate new token (classic)"
3. Note: "Mbelmar website deployment"
4. Select scopes: ✓ repo (check all repo boxes)
5. Click: "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Repository exists on GitHub
- [ ] All files uploaded (index.html, styles.css, script.js, logo.jpg)
- [ ] GitHub Pages is enabled in Settings
- [ ] Website loads at `https://YOUR_USERNAME.github.io/mbelmar-enterprises/`
- [ ] Logo displays correctly
- [ ] Contact form appears
- [ ] Privacy Policy link works
- [ ] Mobile responsive (test on phone)

---

## 🔄 Updating Your Site Later

Whenever you make changes:

### Using PowerShell:
```powershell
cd "C:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises"
git add .
git commit -m "Updated contact form"
git push
```

### Using GitHub Desktop:
1. Open GitHub Desktop
2. Changes appear automatically
3. Write commit message
4. Click "Commit to main"
5. Click "Push origin"

**Site updates automatically in 1-2 minutes!**

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "git: command not found" | Install Git from https://git-scm.com/download/win |
| "Permission denied" | Use Personal Access Token instead of password |
| "Repository not found" | Create repository on GitHub website first |
| "Pages not working" | Wait 2-5 minutes, ensure repo is Public |
| "404 error" | Check repository name matches URL |

---

## 🎉 Success!

Once live, your professional website will be at:

**https://YOUR_USERNAME.github.io/mbelmar-enterprises/**

Share this URL with:
- Banks and financial institutions
- Government agencies
- Business partners
- Vendors and suppliers
- Anyone who needs to verify your company

---

## 📊 GitHub Pages Features (FREE)

✓ Free hosting forever  
✓ Automatic HTTPS/SSL  
✓ Fast global CDN  
✓ Automatic deployment  
✓ No server management  
✓ 100GB bandwidth/month  
✓ Custom domain support  

---

**Pick your method and get started! The automated script (Method 1) is recommended for beginners.**
