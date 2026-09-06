# Prepare Website Files for GoDaddy Upload
# This script packages your website for easy upload to GoDaddy hosting

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Mbelmar Enterprises - GoDaddy Prep" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$sourceFolder = "C:\Users\USER\OneDrive\Desktop\Mbelmer Enterprises"
$desktopPath = [Environment]::GetFolderPath("Desktop")
$outputZip = Join-Path $desktopPath "mbelmar-website.zip"

# Files to include in the website package
$filesToInclude = @(
    "index.html",
    "privacy.html",
    "success.html",
    "styles.css",
    "script.js",
    "logo.jpg",
    "robots.txt",
    "sitemap.xml"
)

Write-Host "Preparing your website files..." -ForegroundColor Yellow
Write-Host ""

# Check if files exist
$missingFiles = @()
foreach ($file in $filesToInclude) {
    $filePath = Join-Path $sourceFolder $file
    if (Test-Path $filePath) {
        Write-Host "[OK] $file" -ForegroundColor Green
    } else {
        Write-Host "[MISSING] $file" -ForegroundColor Red
        $missingFiles += $file
    }
}

Write-Host ""

if ($missingFiles.Count -gt 0) {
    Write-Host "[ERROR] Some files are missing!" -ForegroundColor Red
    Write-Host "Cannot create package." -ForegroundColor Red
    exit 1
}

# Remove old zip if exists
if (Test-Path $outputZip) {
    Remove-Item $outputZip -Force
    Write-Host "Removed old package" -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "Creating ZIP package..." -ForegroundColor Yellow

# Create temporary folder
$tempFolder = Join-Path $env:TEMP "mbelmar-temp"
if (Test-Path $tempFolder) {
    Remove-Item $tempFolder -Recurse -Force
}
New-Item -ItemType Directory -Path $tempFolder | Out-Null

# Copy files to temp folder
foreach ($file in $filesToInclude) {
    $sourcePath = Join-Path $sourceFolder $file
    $destPath = Join-Path $tempFolder $file
    Copy-Item $sourcePath $destPath
}

# Create ZIP
Add-Type -Assembly System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($tempFolder, $outputZip)

# Cleanup temp folder
Remove-Item $tempFolder -Recurse -Force

Write-Host ""
Write-Host "[SUCCESS] Package created!" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Your website package is ready!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Location: $outputZip" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  NEXT STEPS - Upload to GoDaddy" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Buy GoDaddy Web Hosting if you haven't:" -ForegroundColor White
Write-Host "   https://www.godaddy.com/hosting/web-hosting" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Go to GoDaddy My Products:" -ForegroundColor White
Write-Host "   https://account.godaddy.com/products" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Find 'Web Hosting' section" -ForegroundColor White
Write-Host "   Click 'Manage' button" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. In cPanel, click 'File Manager'" -ForegroundColor White
Write-Host ""
Write-Host "5. Open 'public_html' folder" -ForegroundColor White
Write-Host ""
Write-Host "6. Delete any existing files in public_html" -ForegroundColor White
Write-Host ""
Write-Host "7. Click 'Upload' button" -ForegroundColor White
Write-Host ""
Write-Host "8. Upload the ZIP file from your Desktop:" -ForegroundColor White
Write-Host "   mbelmar-website.zip" -ForegroundColor Green
Write-Host ""
Write-Host "9. After upload, right-click the ZIP file" -ForegroundColor White
Write-Host "   Select 'Extract' -> 'Extract Here'" -ForegroundColor Cyan
Write-Host ""
Write-Host "10. Delete the ZIP file after extraction" -ForegroundColor White
Write-Host ""
Write-Host "11. Visit your website:" -ForegroundColor White
Write-Host "    https://mbelmarenterprises.com" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "The ZIP file is on your Desktop ready to upload!" -ForegroundColor Yellow
Write-Host ""

# Open Desktop folder
Write-Host "Opening Desktop folder..." -ForegroundColor Yellow
Start-Process "explorer.exe" -ArgumentList $desktopPath

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
