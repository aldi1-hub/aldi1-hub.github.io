# 🍕 Pisgoba - Food Delivery Website

Website pemesanan makanan modern dengan pengiriman cepat dalam 30 menit.

## 🌐 Live Demo

**Website**: https://aldi1-hub.github.io/

## ✨ Fitur

- 🏠 **Home** - Landing page menarik dengan hero section
- 🍔 **Menu** - Katalog makanan dari berbagai kategori
- 🛒 **Cart** - Keranjang belanja interaktif
- 💳 **Checkout** - Proses checkout yang mudah
- 📦 **Orders** - Tracking pesanan
- 👤 **Profile** - Profil pengguna
- ℹ️ **About** - Tentang layanan
- 📞 **Contact** - Hubungi kami

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **UI Components**: Shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query v5
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (GitHub Actions)

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/aldi1-hub/aldi1-hub.github.io.git

# Masuk ke folder project
cd aldi1-hub.github.io

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Server akan berjalan di: http://localhost:5000

## 🚀 Development Commands

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview build
npm run preview

# Lint code
npm run lint
```

## 📤 Deployment

Website otomatis di-deploy ke GitHub Pages setiap push ke branch `main`.

**Setup:**
1. Push ke repository `aldi1-hub.github.io`
2. Buka **Settings** → **Pages** di GitHub
3. Pilih source: **GitHub Actions**
4. Workflow otomatis berjalan saat push

📖 **Panduan lengkap**: Lihat [DEPLOY.md](./DEPLOY.md)

## 📁 Struktur Project

```
.
├── .github/workflows/     # GitHub Actions
├── public/               # Static files
├── src/
│   ├── assets/          # Images
│   ├── components/      # React components
│   │   └── ui/         # Shadcn components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom hooks
│   └── lib/            # Utilities
├── index.html          # HTML template
├── vite.config.ts      # Vite config
└── package.json        # Dependencies
```

## 🎨 Customization

Edit warna di `src/index.css`:

```css
:root {
  --primary: your-color;
  --secondary: your-color;
}
```

## 📝 License

MIT License

---

⭐ Jika bermanfaat, berikan star!
