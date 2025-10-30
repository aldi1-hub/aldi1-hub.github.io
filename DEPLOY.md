# Panduan Deploy ke GitHub Pages

Proyek ini sudah dikonfigurasi untuk di-deploy ke GitHub Pages dengan GitHub Actions.

## Konfigurasi Vite

Vite config telah diatur dengan `base: "/"` untuk berjalan di root directory GitHub Pages.

## Cara Deploy

### 1. Push ke GitHub

Pastikan kode Anda sudah di-push ke repository GitHub:

```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin main
```

### 2. Aktifkan GitHub Pages

1. Buka repository Anda di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**

### 3. Deploy Otomatis

Setiap kali Anda push ke branch `main`, GitHub Actions akan otomatis:
- Build aplikasi Anda
- Deploy ke GitHub Pages

File workflow ada di `.github/workflows/deploy.yml`

## Mengakses Website

Setelah deploy berhasil, website Anda akan tersedia di:
- Untuk user/organization pages: `https://username.github.io/`
- Untuk project pages: `https://username.github.io/repository-name/`

## Catatan Penting

- File `.nojekyll` sudah ditambahkan di folder `public/` untuk memastikan GitHub Pages dapat melayani semua file dengan benar
- Base path diatur ke `/` untuk root directory
- Build output ada di folder `dist/`

## Troubleshooting

### Blank Page

Jika halaman tampil kosong setelah deploy:
1. Pastikan `base` di `vite.config.ts` sudah sesuai
2. Untuk project pages, ubah `base: "/"` menjadi `base: "/nama-repository/"`
3. Commit dan push ulang perubahan

### Periksa Status Deploy

Cek tab **Actions** di GitHub repository untuk melihat status build dan deploy.
