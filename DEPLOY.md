# 🚀 Panduan Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk di-deploy ke GitHub Pages `https://aldi1-hub.github.io/`

## ✅ Konfigurasi yang Sudah Dilakukan

### 1. Vite Config (`vite.config.ts`)
- ✅ `base: "/"` - untuk root directory
- ✅ Build output ke folder `dist/`
- ✅ Assets di folder `dist/assets/`

### 2. Routing untuk GitHub Pages
- ✅ `public/404.html` - redirect untuk SPA routing
- ✅ `index.html` - script untuk handle route navigation
- ✅ `public/.nojekyll` - mencegah Jekyll processing

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- ✅ Auto deploy saat push ke branch `main`
- ✅ Build dengan npm
- ✅ Upload ke GitHub Pages

## 📋 Cara Deploy

### 1. Push ke GitHub Repository

```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin main
```

### 2. Aktifkan GitHub Pages

1. Buka repository **aldi1-hub.github.io** di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**
4. Simpan pengaturan

### 3. Deploy Otomatis

GitHub Actions akan otomatis:
- ✅ Mendeteksi push ke branch `main`
- ✅ Install dependencies
- ✅ Build aplikasi
- ✅ Deploy ke GitHub Pages

**File workflow**: `.github/workflows/deploy.yml`

## 🌐 Akses Website

Website akan tersedia di: **https://aldi1-hub.github.io/**

Routing akan bekerja untuk semua halaman:
- https://aldi1-hub.github.io/ (Home)
- https://aldi1-hub.github.io/menu (Menu)
- https://aldi1-hub.github.io/cart (Cart)
- https://aldi1-hub.github.io/checkout (Checkout)
- https://aldi1-hub.github.io/orders (Orders)
- https://aldi1-hub.github.io/profile (Profile)
- https://aldi1-hub.github.io/about (About)
- https://aldi1-hub.github.io/contact (Contact)

## 🔍 Troubleshooting

### Deploy Gagal
1. Cek tab **Actions** di GitHub repository
2. Klik workflow yang gagal untuk melihat error
3. Pastikan semua dependencies terinstall di `package.json`

### Halaman Blank
Jika halaman tampil kosong:
1. Buka Developer Console (F12) di browser
2. Cek error di Console tab
3. Pastikan file `404.html` dan `.nojekyll` ada di folder `public/`

### Routing Tidak Bekerja
Jika link tidak berfungsi setelah refresh:
1. Pastikan script redirect di `index.html` ada
2. Pastikan `404.html` ter-copy ke folder `dist/` saat build
3. Clear cache browser (Ctrl + Shift + R)

## 🧪 Test Build Lokal

Sebelum push, test build di lokal:

```bash
# Build aplikasi
npm run build

# Preview hasil build
npm run preview
```

## 📁 Struktur File Penting

```
.
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── public/
│   ├── .nojekyll                 # Disable Jekyll
│   └── 404.html                  # SPA redirect handler
├── index.html                    # Main HTML dengan redirect script
├── vite.config.ts                # Vite config dengan base: "/"
└── dist/                         # Build output (generated)
```

## 🎯 Checklist Sebelum Deploy

- [ ] Semua perubahan sudah di-commit
- [ ] Push ke branch `main`
- [ ] GitHub Pages aktif di repository settings
- [ ] Workflow GitHub Actions berjalan sukses
- [ ] Website dapat diakses di https://aldi1-hub.github.io/

## 📝 Catatan

- Repository ini untuk **User Pages** (bukan Project Pages)
- URL: `https://aldi1-hub.github.io/` (root directory)
- Base path: `/` (sudah dikonfigurasi di vite.config.ts)
- Setiap push ke `main` akan trigger auto-deploy
