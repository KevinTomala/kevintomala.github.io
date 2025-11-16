ng build --configuration production --output-path docs --base-href "/"
Copy-Item "docs\index.html" -Destination "docs\404.html"
git add .
git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin main
Write-Host "✅ Deploy completado! Espera 2-5 minutos" -ForegroundColor Green