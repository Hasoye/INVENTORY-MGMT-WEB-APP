# StockVault Development Journal

This journal chronicles the engineering process, architectural decisions, UI design milestones, and implementation history of the StockVault MVP Inventory Management Web Application.

---

## 📝 Journal Log Entries

### Entry 1: Architecture Planning & System Design
- **Objective**: Establish project requirements for a responsive, high-aesthetic single-page inventory management system using standard web web standards (HTML/CSS/JS).
- **Decisions**:
  - Selected a slate dark design system (`#090d16` base, `#1e293b` panels) with emerald (success/stock in), amber (low stock), and crimson (out of stock) accent color tokens.
  - Opted for client-side SPA architecture using `localStorage` for zero-dependency portability.

### Entry 2: Design System & Styling Engine (`styles.css`)
- **Objective**: Build a scalable CSS foundation with theme variables, typography, and reusable UI components.
- **Key Deliverables**:
  - Configured Google Font *Plus Jakarta Sans*.
  - Developed responsive CSS Grid layouts for dashboard metric cards, product cards, and side-by-side charts.
  - Implemented glassmorphism navbar, custom scrollbars, toast notification animations, and media query breakpoints.

### Entry 3: SPA Markup & Navigation Shell (`index.html`)
- **Objective**: Construct semantic HTML structure with tabbed navigation views and modal dialogs.
- **Key Deliverables**:
  - Collapsible sidebar with active section tracking.
  - Views for Dashboard, Product Directory, Stock Audit Log, Analytics, Barcode Hub, Warehouse Directory, and Settings.
  - Built accessible form modals for Product CRUD operations, Stock Adjustments, and deletion confirmations.

### Entry 4: State Management & CRUD Operations (`app.js`)
- **Objective**: Program application logic, data persistence, and interactive user controls.
- **Key Deliverables**:
  - Engineered `localStorage` sync routines with fallback demo dataset seed.
  - Built multi-field search engine, category selector, location filter, and stock status filter tabs.
  - Implemented Product Add/Edit/Delete logic with auto-generated SKUs.

### Entry 5: Audit Trail & Stock Movement Logger
- **Objective**: Provide operational accountability by tracking stock deltas.
- **Key Deliverables**:
  - Implemented `logStockMovement()` to capture timestamps, product IDs, deltas (+/-), previous balance, new balance, and reason codes.
  - Added filterable audit table in Stock Movements view.

### Entry 6: Barcode Generator & Scanner Simulator Integration
- **Objective**: Facilitate rapid item lookup and printable barcode generation.
- **Key Deliverables**:
  - Integrated `JsBarcode` library to render Code128 vector barcodes dynamically for any SKU.
  - Added barcode lookup simulator tool to fetch item cards instantly.

### Entry 7: Financial & Restock Analytics
- **Objective**: Provide actionable financial insights and automated reorder calculations.
- **Key Deliverables**:
  - Integrated Chart.js to render inventory category distribution donut charts and top valued SKU bar charts.
  - Created automated High Priority Restock table calculating shortage quantities and projected reorder costs.

### Entry 8: Documentation & Git Versioning
- **Objective**: Document complete system architecture, usage instructions, and maintain git history.
- **Key Deliverables**:
  - Created `README.md` and `journal.md`.
  - Staged and committed documentation with clear, descriptive commit messages.
