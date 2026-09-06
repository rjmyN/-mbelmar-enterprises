# Mbelmar Enterprises - GitHub Setup Script
# This script automates the GitHub hosting setup process

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Mbelmar Enterprises - GitHub Setup Helper" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
Write-Host "Checking Git installation..." -ForegroundColor Yellow
$gitVersion = git --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Git is installed: $gitVersion" -ForegroundColor Green
} else {
    Write-Host "[ERROR] Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Get GitHub username
Write-Host "Step 1: GitHub Account Setup" -ForegroundColor Cyan
Write-Host "----------------------------" -ForegroundColor Cyan
$username = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "[ERROR] Username is required!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Get repository name
Write-Host "Step 2: Repository Name" -ForegroundColor Cyan
Write-Host "----------------------" -ForegroundColor Cyan
$defaultRepo = "mbelmar-enterprises"
$repo = Read-Host "Enter repository name (press Enter for 'mbelmar-enterprises')"

if ([string]::IsNullOrWhiteSpace($repo)) {
    $repo = $defaultRepo
}

Write-Host ""

# Check Git configuration
Write-Host "Step 3: Git Configuration" -ForegroundColor Cyan
Write-Host "-------------------------" -ForegroundColor Cyan

$gitUser = git config --global user.name 2>$null
$gitEmail = git config --global user.email 2>$null

if ([string]::IsNullOrWhiteSpace($gitUser) -or [string]::IsNullOrWhiteSpace($gitEmail)) {
    Write-Host "Git user configuration not found. Let's set it up:" -ForegroundColor Yellow
    Write-Host ""
    
    $name = Read-Host "Enter your full name"
    $email = Read-Host "Enter your email address"
    
    git config --global user.name "$name"
    git config --global user.email "$email"
    
    Write-Host "[OK] Git configuration saved" -ForegroundColor Green
} else {
    Write-Host "[OK] Git user: $gitUser" -ForegroundColor Green
    Write-Host "[OK] Git email: $gitEmail" -ForegroundColor Green
}

Write-Host ""

# Confirm before proceeding
Write-Host "Review Your Settings:" -ForegroundColor Cyan
Write-Host "--------------------" -ForegroundColor Cyan
Write-Host "GitHub Username: $username" -ForegroundColor White
Write-Host "Repository Name: $repo" -ForegroundColor White
Write-Host "Your Website URL will be: https://$username.github.io/$repo/" -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "Continue with these settings? (Y/N)"

if ($confirm -ne "Y" -and $confirm -ne "y") {
    Write-Host "Setup cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Step 4: Initializing Git Repository" -ForegroundColor Cyan
Write-Host "-----------------------------------" -ForegroundColor Cyan

# Initialize Git if not already initialized
if (!(Test-Path ".git")) {
    git init
    Write-Host "[OK] Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "[OK] Git repository already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 5: Adding Files to Git" -ForegroundColor Cyan
Write-Host "---------------------------" -ForegroundColor Cyan

git add .
Write-Host "[OK] All files staged" -ForegroundColor Green

Write-Host ""
Write-Host "Step 6: Creating First Commit" -ForegroundColor Cyan
Write-Host "-----------------------------" -ForegroundColor Cyan

$commitExists = git rev-parse HEAD 2>$null
if ($LASTEXITCODE -ne 0) {
    git commit -m "Initial commit: Mbelmar Enterprises website"
    Write-Host "[OK] Initial commit created" -ForegroundColor Green
} else {
    Write-Host "[INFO] Commits already exist. Checking for changes..." -ForegroundColor Yellow
    $changes = git status --porcelain
    if ($changes) {
        git commit -m "Update: Mbelmar Enterprises website"
        Write-Host "[OK] Changes committed" -ForegroundColor Green
    } else {
        Write-Host "[OK] No new changes to commit" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Step 7: Setting Up Remote Repository" -ForegroundColor Cyan
Write-Host "------------------------------------" -ForegroundColor Cyan

$remoteUrl = "https://github.com/$username/$repo.git"

# Check if remote already exists
$existingRemote = git remote get-url origin 2>$null

if ($LASTEXITCODE -eq 0) {
    Write-Host "[INFO] Remote 'origin' already exists: $existingRemote" -ForegroundColor Yellow
    $updateRemote = Read-Host "Update remote URL? (Y/N)"
    
    if ($updateRemote -eq "Y" -or $updateRemote -eq "y") {
        git remote set-url origin $remoteUrl
        Write-Host "[OK] Remote URL updated" -ForegroundColor Green
    }
} else {
    git remote add origin $remoteUrl
    Write-Host "[OK] Remote repository added" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 8: Renaming Branch to 'main'" -ForegroundColor Cyan
Write-Host "--------------------------------" -ForegroundColor Cyan

$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    git branch -M main
    Write-Host "[OK] Branch renamed to 'main'" -ForegroundColor Green
} else {
    Write-Host "[OK] Already on 'main' branch" -ForegroundColor Green
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  IMPORTANT: Manual Steps Required" -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Before pushing to GitHub, you need to:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Create the repository on GitHub:" -ForegroundColor White
Write-Host "   - Go to: https://github.com/new" -ForegroundColor Cyan
Write-Host "   - Repository name: $repo" -ForegroundColor Cyan
Write-Host "   - Visibility: Public (required for free GitHub Pages)" -ForegroundColor Cyan
Write-Host "   - DO NOT add README, .gitignore, or license" -ForegroundColor Cyan
Write-Host "   - Click 'Create repository'" -ForegroundColor Cyan
Write-Host ""

Write-Host "2. After creating the repository on GitHub, run this command:" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""

Write-Host "3. Enable GitHub Pages:" -ForegroundColor White
Write-Host "   - Go to your repository -> Settings -> Pages" -ForegroundColor Cyan
Write-Host "   - Source: Deploy from a branch" -ForegroundColor Cyan
Write-Host "   - Branch: main -> / (root) -> Save" -ForegroundColor Cyan
Write-Host ""

Write-Host "4. Your site will be live at:" -ForegroundColor White
Write-Host "   https://$username.github.io/$repo/" -ForegroundColor Green
Write-Host ""

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "Setup preparation complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Next: Create the repository on GitHub, then run:" -ForegroundColor Yellow
Write-Host "git push -u origin main" -ForegroundColor Green
Write-Host ""
