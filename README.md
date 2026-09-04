# StockVault - MVP Inventory Management Web Application

StockVault is a modern, high-performance single-page Inventory Management Application designed for warehouses, retail stores, and small businesses. Built with HTML5, Vanilla CSS, and modular ES6 JavaScript, it provides end-to-end stock tracking, low-stock warnings, barcode generation, interactive financial analytics, and complete audit trail logging.

![StockVault Banner](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80)

---

## 🌟 Key Features

- **📊 Operational Dashboard**: Real-time summary metrics (Total SKUs, Asset Valuation, Low Stock Alerts, Out of Stock, Category Counts) with visual chart overviews.
- **📦 Product Directory**: Dual-view layout (Interactive Data Table & Visual Card Grid) with multi-field search, category filtering, location filtering, and column sorting.
- **🔄 Stock Audit Trail**: Full log of every inventory addition, deduction, sale, return, or audit adjustment with reasons and timestamp tracking.
- **🏷️ Barcode & Scan Hub**: Live Code128 barcode generator powered by `JsBarcode`, printable label layouts, and rapid SKU lookup simulation.
- **📈 Financial Analytics**: Interactive Chart.js visual charts for stock vs min reorder levels, projected revenue vs cost, and automated restock cost estimations.
- **💾 Data Portability**: Export full inventory to `.csv`, export/import `.json` database backups, and persistent storage via `localStorage`.

---

## 🛠️ Technology Stack

- **Markup & Structure**: HTML5 Semantic Architecture (SPA single-page navigation).
- **Styling & Aesthetics**: Vanilla CSS3 (Slate dark design system, CSS Custom Properties, Glassmorphism, Responsive Grid/Flexbox).
- **Application Logic**: Vanilla JavaScript (ES6 Modules pattern, custom event handling, `localStorage` engine).
- **Libraries**:
  - [Chart.js 4.x](https://www.chartjs.org/) - Visual inventory distribution and financial charts.
  - [JsBarcode](https://lindell.me/JsBarcode/) - Vector barcode rendering.
  - [Font Awesome 6.4](https://fontawesome.com/) - Modern UI iconography.
  - [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - Clean typography.

---

## 📁 Repository Structure

```
INVENTORY MGMT WEB APP/
├── index.html         # SPA markup shell, view containers, topbar & modals
├── styles.css         # Complete design system, dark theme tokens & component styles
├── app.js             # Core state manager, CRUD operations, charts & data storage
├── README.md          # Project documentation and architectural overview
├── journal.md         # Detailed development journal & implementation log
└── .gitignore         # OS and temporary file exclusions
```

---

## 🚀 Quick Start Guide

1. Clone or download this repository.
2. Open `index.html` directly in any web browser (Google Chrome, Edge, Firefox, Safari).
3. Explore pre-loaded demo items across Electronics, Office Supplies, and Food & Beverage.
4. Try adding new products, performing quick stock adjustments, generating barcodes, and exporting CSV reports!

---

## 🔒 Data Persistence & Reset

All changes (new products, updated stock levels, audit logs) are automatically saved to your browser's `localStorage`. You can reset back to default demo data at any time via **Settings & Data -> Reset to Demo Inventory**.
