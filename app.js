/**
 * StockVault - Modern MVP Inventory Management System
 * Author: Antigravity AI
 */

(function () {
  'use strict';

  // --- DEMO SEED DATA ---
  const SEED_PRODUCTS = [
    {
      id: 'prod-101',
      name: 'Wireless Ergonomic Mechanical Keyboard',
      sku: 'SKU-KB-900',
      category: 'Electronics',
      quantity: 18,
      minStock: 8,
      costPrice: 65.00,
      sellingPrice: 129.99,
      location: 'Aisle A, Shelf 3',
      supplier: 'TechGear Global',
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 10).toISOString()
    },
    {
      id: 'prod-102',
      name: 'Noise-Canceling Bluetooth Headphones',
      sku: 'SKU-HP-402',
      category: 'Electronics',
      quantity: 4,
      minStock: 10,
      costPrice: 110.00,
      sellingPrice: 199.50,
      location: 'Aisle A, Shelf 1',
      supplier: 'AudioTech Ltd',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 8).toISOString()
    },
    {
      id: 'prod-103',
      name: 'Ultra-Wide Curved Gaming Monitor 34"',
      sku: 'SKU-MN-771',
      category: 'Electronics',
      quantity: 2,
      minStock: 5,
      costPrice: 320.00,
      sellingPrice: 549.99,
      location: 'Aisle B, Shelf 4',
      supplier: 'Vision Display Inc',
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 15).toISOString()
    },
    {
      id: 'prod-104',
      name: 'Organic Espresso Coffee Beans 1kg',
      sku: 'SKU-CF-109',
      category: 'Food & Beverage',
      quantity: 45,
      minStock: 15,
      costPrice: 8.50,
      sellingPrice: 18.00,
      location: 'Pantry Zone 2',
      supplier: 'RoastMasters Co.',
      imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
    },
    {
      id: 'prod-105',
      name: 'Stainless Steel Insulated Water Bottle 1L',
      sku: 'SKU-WB-330',
      category: 'Home & Kitchen',
      quantity: 0,
      minStock: 12,
      costPrice: 6.00,
      sellingPrice: 19.99,
      location: 'Aisle C, Shelf 2',
      supplier: 'HydroGear Supplies',
      imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 20).toISOString()
    },
    {
      id: 'prod-106',
      name: 'Heavy Duty Cordless Power Drill Set',
      sku: 'SKU-TL-882',
      category: 'Hardware',
      quantity: 12,
      minStock: 6,
      costPrice: 75.00,
      sellingPrice: 149.00,
      location: 'Tool Room B',
      supplier: 'BuildPro Hardware',
      imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
      id: 'prod-107',
      name: 'Minimalist Leather Desk Pad',
      sku: 'SKU-DP-211',
      category: 'Office Supplies',
      quantity: 30,
      minStock: 10,
      costPrice: 12.00,
      sellingPrice: 29.99,
      location: 'Aisle A, Shelf 5',
      supplier: 'CraftWork Co',
      imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 12).toISOString()
    },
    {
      id: 'prod-108',
      name: 'Smart Fitness Tracking Watch v2',
      sku: 'SKU-SW-501',
      category: 'Electronics',
      quantity: 5,
      minStock: 8,
      costPrice: 85.00,
      sellingPrice: 169.99,
      location: 'Aisle A, Shelf 2',
      supplier: 'TechGear Global',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      createdAt: new Date(Date.now() - 86400000 * 6).toISOString()
    }
  ];

  const SEED_MOVEMENTS = [
    {
      id: 'mov-1',
      timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
      productId: 'prod-101',
      productName: 'Wireless Ergonomic Mechanical Keyboard',
      sku: 'SKU-KB-900',
      type: 'STOCK_IN',
      delta: 20,
      prevStock: 0,
      newStock: 20,
      reason: 'Purchase Order #PO-9912'
    },
    {
      id: 'mov-2',
      timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
      productId: 'prod-101',
      productName: 'Wireless Ergonomic Mechanical Keyboard',
      sku: 'SKU-KB-900',
      type: 'STOCK_OUT',
      delta: -2,
      prevStock: 20,
      newStock: 18,
      reason: 'Customer Order #SO-8410'
    },
    {
      id: 'mov-3',
      timestamp: new Date(Date.now() - 86400000 * 1).toISOString(),
      productId: 'prod-102',
      productName: 'Noise-Canceling Bluetooth Headphones',
      sku: 'SKU-HP-402',
      type: 'STOCK_OUT',
      delta: -6,
      prevStock: 10,
      newStock: 4,
      reason: 'Flash Sale Dispatch'
    },
    {
      id: 'mov-4',
      timestamp: new Date(Date.now() - 86400000 * 1).toISOString(),
      productId: 'prod-105',
      productName: 'Stainless Steel Insulated Water Bottle 1L',
      sku: 'SKU-WB-330',
      type: 'ADJUSTMENT',
      delta: -5,
      prevStock: 5,
      newStock: 0,
      reason: 'Damaged in Warehouse Leak'
    }
  ];

  const SEED_SETTINGS = {
    storeName: 'Main Hub Warehouse',
    currency: '$'
  };

  // --- STATE MANAGEMENT ---
  let products = [];
  let movements = [];
  let settings = { ...SEED_SETTINGS };

  let currentView = 'dashboardView';
  let productViewMode = 'table'; // 'table' or 'grid'

  let productFilters = {
    search: '',
    category: 'ALL',
    location: 'ALL',
    status: 'ALL',
    page: 1,
    pageSize: 8,
    sortField: 'name',
    sortDir: 'asc'
  };

  let movementFilters = {
    search: '',
    type: 'ALL'
  };

  let actionToDeleteId = null;
  let aiInsightsExpanded = false;

  // Chart instances
  let categoryChartInstance = null;
  let valueChartInstance = null;
  let reorderChartInstance = null;
  let marginChartInstance = null;

  // --- LOCALSTORAGE LOGIC ---
  function loadState() {
    try {
      const storedProds = localStorage.getItem('stockvault_products_v1');
      const storedMovs = localStorage.getItem('stockvault_movements_v1');
      const storedSet = localStorage.getItem('stockvault_settings_v1');

      if (storedProds) {
        products = JSON.parse(storedProds);
      } else {
        products = [...SEED_PRODUCTS];
        saveProducts();
      }

      if (storedMovs) {
        movements = JSON.parse(storedMovs);
      } else {
        movements = [...SEED_MOVEMENTS];
        saveMovements();
      }

      if (storedSet) {
        settings = JSON.parse(storedSet);
      } else {
        settings = { ...SEED_SETTINGS };
        saveSettings();
      }
    } catch (e) {
      console.error('Error reading localStorage:', e);
      products = [...SEED_PRODUCTS];
      movements = [...SEED_MOVEMENTS];
      settings = { ...SEED_SETTINGS };
    }
  }

  function saveProducts() {
    localStorage.setItem('stockvault_products_v1', JSON.stringify(products));
  }

  function saveMovements() {
    localStorage.setItem('stockvault_movements_v1', JSON.stringify(movements));
  }

  function saveSettings() {
    localStorage.setItem('stockvault_settings_v1', JSON.stringify(settings));
  }

  // --- UTILITIES ---
  function formatCurrency(val) {
    const num = Number(val) || 0;
    return `${settings.currency || '$'}${num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function formatDate(isoStr) {
    if (!isoStr) return '-';
    const d = new Date(isoStr);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function getStockStatus(prod) {
    if (prod.quantity <= 0) return 'OUT_OF_STOCK';
    if (prod.quantity <= prod.minStock) return 'LOW_STOCK';
    return 'IN_STOCK';
  }

  function getStatusBadgeHtml(status) {
    if (status === 'OUT_OF_STOCK') {
      return `<span class="status-badge badge-out-of-stock"><i class="fa-solid fa-circle-xmark"></i> Out of Stock</span>`;
    }
    if (status === 'LOW_STOCK') {
      return `<span class="status-badge badge-low-stock"><i class="fa-solid fa-triangle-exclamation"></i> Low Stock</span>`;
    }
    return `<span class="status-badge badge-in-stock"><i class="fa-solid fa-circle-check"></i> In Stock</span>`;
  }

  function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-xmark';
    if (type === 'warning') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- MODAL CONTROLLERS ---
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  // --- VIEW ROUTING & RENDERING ---
  function switchView(viewId) {
    currentView = viewId;

    // Update active tab in sidebar
    document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
      if (item.dataset.view === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    // Show active view
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add('active');
    }

    // Refresh view specific data & charts
    renderActiveView();
  }

  function renderActiveView() {
    // Update global store name display
    const storeDisplay = document.getElementById('displayStoreName');
    if (storeDisplay) storeDisplay.innerText = settings.storeName;

    // Update low stock badge in sidebar
    const lowStockCount = products.filter(p => getStockStatus(p) !== 'IN_STOCK').length;
    const sidebarBadge = document.getElementById('sidebarLowStockCount');
    if (sidebarBadge) sidebarBadge.innerText = lowStockCount;

    if (currentView === 'dashboardView') renderDashboard();
    else if (currentView === 'inventoryView') renderProductsView();
    else if (currentView === 'movementsView') renderMovementsView();
    else if (currentView === 'analyticsView') renderAnalyticsView();
    else if (currentView === 'barcodeView') renderBarcodeHub();
    else if (currentView === 'suppliersView') renderSuppliersView();
    else if (currentView === 'settingsView') renderSettingsView();
  }

  // --- AI INVENTORY ANALYSIS ENGINE ---
  function getAIInventoryAnalysis(prods) {
    const hour = new Date().getHours();
    let greeting = 'Good morning 👋';
    if (hour >= 12 && hour < 17) {
      greeting = 'Good afternoon 👋';
    } else if (hour >= 17) {
      greeting = 'Good evening 👋';
    }

    const total = prods.length;
    if (total === 0) {
      return {
        greeting,
        headline: 'Your inventory is currently empty.',
        detail: 'No products are currently tracked in StockVault. Add your first SKU to activate inventory health analysis.',
        healthStatusText: 'No Data Tracked',
        healthStatusColor: 'var(--text-dim)',
        insights: [],
        totalAttention: 0
      };
    }

    const outOfStockItems = [];
    const lowStockItems = [];
    const approachingReorderItems = [];
    const excessStockItems = [];

    prods.forEach(p => {
      const qty = Number(p.quantity) || 0;
      const min = Number(p.minStock) || 0;

      if (qty <= 0) {
        outOfStockItems.push({
          product: p,
          type: 'OUT_OF_STOCK',
          badgeHtml: `<span class="status-badge badge-out-of-stock"><i class="fa-solid fa-circle-xmark"></i> Out of Stock</span>`,
          explanation: `Completely depleted (0 units on hand vs minimum safety threshold: ${min} units). Immediate purchase order required.`
        });
      } else if (qty <= min) {
        const shortage = min - qty;
        lowStockItems.push({
          product: p,
          type: 'LOW_STOCK',
          badgeHtml: `<span class="status-badge badge-low-stock"><i class="fa-solid fa-triangle-exclamation"></i> Low Stock</span>`,
          explanation: `Stock is below safety reorder threshold (${qty} units remaining vs min ${min} units, deficit of ${shortage} units). Restock advised.`
        });
      } else if (qty <= Math.ceil(min * 1.5)) {
        const buffer = qty - min;
        approachingReorderItems.push({
          product: p,
          type: 'APPROACHING_REORDER',
          badgeHtml: `<span class="status-badge" style="background:rgba(99,102,241,0.15); color:#a5b4fc; border:1px solid rgba(99,102,241,0.3);"><i class="fa-solid fa-arrow-trend-down"></i> Approaching Reorder</span>`,
          explanation: `Stock is approaching reorder threshold (${qty} units remaining vs min ${min} units, buffer of only ${buffer} units). Monitor stock velocity.`
        });
      } else if (qty >= min * 3 && (qty * (Number(p.costPrice) || 0)) >= 300) {
        excessStockItems.push({
          product: p,
          type: 'EXCESS_STOCK',
          badgeHtml: `<span class="status-badge" style="background:rgba(6,182,212,0.15); color:var(--accent-info); border:1px solid rgba(6,182,212,0.3);"><i class="fa-solid fa-boxes-stacked"></i> Surplus Stock</span>`,
          explanation: `High inventory volume (${qty} units vs min ${min} units) tying up ${formatCurrency(qty * p.costPrice)} in working capital.`
        });
      }
    });

    const outCount = outOfStockItems.length;
    const lowCount = lowStockItems.length;
    const appCount = approachingReorderItems.length;
    const urgentCount = outCount + lowCount;
    const totalAttention = outCount + lowCount + appCount;

    // Actionable items prioritizing shortages and reorder alerts, followed by excess capital alerts
    const insights = [
      ...outOfStockItems,
      ...lowStockItems,
      ...approachingReorderItems,
      ...excessStockItems
    ];

    let headline = '';
    let detail = '';
    let healthStatusText = 'Analysis Active';
    let healthStatusColor = 'var(--accent-success)';

    if (urgentCount === 0 && appCount === 0) {
      headline = 'Your inventory is healthy overall.';
      detail = `All ${total} products are above minimum safety thresholds with zero reorder alerts.`;
      healthStatusText = 'Stock 100% Healthy';
      healthStatusColor = 'var(--accent-success)';
    } else if (urgentCount === 0 && appCount > 0) {
      headline = 'Your inventory is healthy overall.';
      detail = `${appCount} product${appCount > 1 ? 's are' : ' is'} approaching reorder levels, with no critical shortages.`;
      healthStatusText = `${appCount} Approaching Reorder`;
      healthStatusColor = 'var(--accent-info)';
    } else if (urgentCount <= 2 && outCount === 0) {
      headline = 'Your inventory is relatively healthy overall.';
      if (appCount > 0) {
        detail = `${totalAttention} items need attention, with ${appCount} product${appCount > 1 ? 's' : ''} approaching their reorder levels and ${lowCount} below minimum.`;
      } else {
        detail = `${totalAttention} item${totalAttention > 1 ? 's need' : ' needs'} attention, with ${lowCount} product${lowCount > 1 ? 's' : ''} below reorder levels.`;
      }
      healthStatusText = `${urgentCount} Items Need Attention`;
      healthStatusColor = 'var(--accent-warning)';
    } else {
      headline = outCount > 0 ? 'Action required on key stock lines.' : 'Your inventory needs attention.';
      if (appCount > 0) {
        detail = `${totalAttention} items need attention, with ${appCount} product${appCount > 1 ? 's' : ''} approaching their reorder levels and ${urgentCount} requiring replenishment.`;
      } else if (outCount > 0 && lowCount > 0) {
        detail = `${totalAttention} items need attention, with ${outCount} product${outCount > 1 ? 's' : ''} out of stock and ${lowCount} below minimum reorder levels.`;
      } else if (outCount > 0) {
        detail = `${outCount} product${outCount > 1 ? 's are' : ' is'} out of stock and require immediate purchase.`;
      } else {
        detail = `${lowCount} product${lowCount > 1 ? 's are' : ' is'} below minimum reorder levels and need restocking.`;
      }
      healthStatusText = `${urgentCount} Critical Items`;
      healthStatusColor = 'var(--accent-danger)';
    }

    return {
      greeting,
      headline,
      detail,
      healthStatusText,
      healthStatusColor,
      insights,
      totalAttention
    };
  }

  function renderAISummary() {
    const analysis = getAIInventoryAnalysis(products);

    const greetingEl = document.getElementById('aiGreeting');
    const headlineEl = document.getElementById('aiHeadline');
    const detailEl = document.getElementById('aiDetail');
    const statusTextEl = document.getElementById('aiHealthStatusText');
    const statusDotEl = document.querySelector('#aiHealthIndicator .status-dot');
    const insightsCountEl = document.getElementById('aiInsightsCount');
    const listEl = document.getElementById('aiInsightsList');
    const panelEl = document.getElementById('aiInsightsPanel');
    const toggleTextEl = document.getElementById('aiToggleInsightsText');
    const toggleIconEl = document.getElementById('aiToggleInsightsIcon');
    const toggleBtnEl = document.getElementById('aiToggleInsightsBtn');

    if (greetingEl) greetingEl.innerText = analysis.greeting;
    if (headlineEl) headlineEl.innerText = analysis.headline;
    if (detailEl) detailEl.innerText = analysis.detail;
    if (statusTextEl) statusTextEl.innerText = analysis.healthStatusText;
    if (statusDotEl) statusDotEl.style.background = analysis.healthStatusColor;
    if (insightsCountEl) insightsCountEl.innerText = analysis.insights.length;

    if (panelEl) panelEl.style.display = aiInsightsExpanded ? 'block' : 'none';
    if (toggleTextEl) toggleTextEl.innerText = aiInsightsExpanded ? 'Hide insights' : 'View insights';
    if (toggleIconEl) toggleIconEl.className = aiInsightsExpanded ? 'fa-solid fa-chevron-up toggle-icon' : 'fa-solid fa-chevron-down toggle-icon';
    if (toggleBtnEl) toggleBtnEl.setAttribute('aria-expanded', aiInsightsExpanded ? 'true' : 'false');

    if (listEl) {
      if (analysis.insights.length === 0) {
        listEl.innerHTML = `
          <div class="ai-insight-empty">
            <i class="fa-solid fa-circle-check"></i>
            <span>All stock levels are optimal! No items currently require attention or reordering.</span>
          </div>
        `;
      } else {
        listEl.innerHTML = analysis.insights.map(item => `
          <div class="ai-insight-item">
            <div class="ai-insight-info">
              <div class="ai-insight-head">
                <span class="ai-insight-name">${item.product.name}</span>
                <span class="ai-insight-sku">${item.product.sku}</span>
                ${item.badgeHtml}
              </div>
              <div class="ai-insight-explanation">${item.explanation}</div>
              <div class="ai-insight-stats">
                <span>Stock: <strong>${item.product.quantity} units</strong></span>
                <span>Safety Threshold: <strong>${item.product.minStock} units</strong></span>
                <span>Unit Cost: <strong>${formatCurrency(item.product.costPrice)}</strong></span>
                <span>Location: <strong>${item.product.location || 'Main Storage'}</strong></span>
              </div>
            </div>
            <div class="ai-insight-actions">
              <button class="btn btn-primary btn-sm adjust-stock-btn" data-id="${item.product.id}" title="Quick Stock Adjustment">
                <i class="fa-solid fa-plus-minus"></i> Restock / Adjust
              </button>
            </div>
          </div>
        `).join('');
      }
    }
  }

  // --- 1. DASHBOARD VIEW ---
  function renderDashboard() {
    // Render AI Inventory Summary
    renderAISummary();

    // Calculate metrics
    const totalProducts = products.length;
    const totalValuation = products.reduce((acc, p) => acc + (p.quantity * p.costPrice), 0);
    const lowStockItems = products.filter(p => getStockStatus(p) === 'LOW_STOCK').length;
    const outOfStockItems = products.filter(p => getStockStatus(p) === 'OUT_OF_STOCK').length;
    const categories = new Set(products.map(p => p.category)).size;

    // Update Card Elements
    document.getElementById('metricTotalProducts').innerText = totalProducts;
    document.getElementById('metricCategoriesCount').innerText = categories;
    document.getElementById('metricTotalValue').innerText = formatCurrency(totalValuation);
    document.getElementById('metricLowStock').innerText = lowStockItems;
    document.getElementById('metricOutOfStock').innerText = outOfStockItems;

    // Alert Banner Logic
    const alertBanner = document.getElementById('dashAlertBanner');
    const alertTitle = document.getElementById('dashAlertTitle');
    const alertMessage = document.getElementById('dashAlertMessage');

    const totalUrgent = lowStockItems + outOfStockItems;
    if (totalUrgent > 0) {
      alertBanner.style.display = 'flex';
      alertTitle.innerText = `Stock Warning: ${totalUrgent} Items Need Attention`;
      alertMessage.innerText = `${outOfStockItems} items are out of stock and ${lowStockItems} are critically low.`;
    } else {
      alertBanner.style.display = 'none';
    }

    // Recent Audit Movements (Top 5)
    const tbody = document.getElementById('dashMovementsTbody');
    if (tbody) {
      const recent = [...movements].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 5);
      if (recent.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-dim);">No stock activity logged yet.</td></tr>`;
      } else {
        tbody.innerHTML = recent.map(m => {
          const isPositive = m.delta > 0;
          const deltaStr = isPositive ? `+${m.delta}` : `${m.delta}`;
          const colorClass = isPositive ? 'var(--accent-success)' : 'var(--accent-danger)';
          return `
            <tr>
              <td>${formatDate(m.timestamp)}</td>
              <td><strong>${m.productName}</strong> <div style="font-size:11px; color:var(--text-dim);">${m.sku}</div></td>
              <td style="color:${colorClass}; font-weight:700;">${deltaStr}</td>
              <td>${m.newStock} units</td>
              <td><span style="font-size:12px; background:var(--bg-secondary); padding:2px 8px; border-radius:4px;">${m.reason}</span></td>
            </tr>
          `;
        }).join('');
      }
    }

    // Render Dashboard Charts
    renderDashboardCharts();
  }

  function renderDashboardCharts() {
    // 1. Category Distribution Chart (Donut)
    const categoryCounts = {};
    products.forEach(p => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });

    const catLabels = Object.keys(categoryCounts);
    const catData = Object.values(categoryCounts);

    const ctxCat = document.getElementById('categoryChart')?.getContext('2d');
    if (ctxCat) {
      if (categoryChartInstance) categoryChartInstance.destroy();
      categoryChartInstance = new Chart(ctxCat, {
        type: 'doughnut',
        data: {
          labels: catLabels,
          datasets: [{
            data: catData,
            backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#06b6d4', '#ec4899', '#8b5cf6'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'right', labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' } } }
          }
        }
      });
    }

    // 2. Top Valued Stock SKUs (Bar Chart)
    const sortedByValue = [...products]
      .map(p => ({ name: p.name.length > 18 ? p.name.substring(0, 18) + '...' : p.name, val: p.quantity * p.costPrice }))
      .sort((a, b) => b.val - a.val)
      .slice(0, 5);

    const ctxVal = document.getElementById('valueChart')?.getContext('2d');
    if (ctxVal) {
      if (valueChartInstance) valueChartInstance.destroy();
      valueChartInstance = new Chart(ctxVal, {
        type: 'bar',
        data: {
          labels: sortedByValue.map(i => i.name),
          datasets: [{
            label: 'Valuation ($)',
            data: sortedByValue.map(i => i.val),
            backgroundColor: 'rgba(99, 102, 241, 0.7)',
            borderColor: '#6366f1',
            borderWidth: 1,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
          }
        }
      });
    }
  }


  // --- 2. PRODUCTS / INVENTORY VIEW ---
  function renderProductsView() {
    populateCategoryDropdown();
    populateLocationDropdown();

    // Filter Logic
    let filtered = products.filter(p => {
      // Text search
      const q = productFilters.search.toLowerCase();
      const matchesSearch = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);

      // Category filter
      const matchesCat = productFilters.category === 'ALL' || p.category === productFilters.category;

      // Location filter
      const matchesLoc = productFilters.location === 'ALL' || p.location === productFilters.location;

      // Status filter
      const status = getStockStatus(p);
      const matchesStatus = productFilters.status === 'ALL' || status === productFilters.status;

      return matchesSearch && matchesCat && matchesLoc && matchesStatus;
    });

    // Sorting
    filtered.sort((a, b) => {
      let valA = a[productFilters.sortField];
      let valB = b[productFilters.sortField];

      if (productFilters.sortField === 'status') {
        valA = getStockStatus(a);
        valB = getStockStatus(b);
      }

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return productFilters.sortDir === 'asc' ? -1 : 1;
      if (valA > valB) return productFilters.sortDir === 'asc' ? 1 : -1;
      return 0;
    });

    // Pagination
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / productFilters.pageSize) || 1;
    if (productFilters.page > totalPages) productFilters.page = totalPages;

    const startIndex = (productFilters.page - 1) * productFilters.pageSize;
    const paginated = filtered.slice(startIndex, startIndex + productFilters.pageSize);

    // Update Pagination Info
    document.getElementById('paginationInfo').innerText = `Showing ${filtered.length ? startIndex + 1 : 0} - ${Math.min(startIndex + productFilters.pageSize, totalItems)} of ${totalItems} SKUs`;

    renderPaginationControls(totalPages);

    if (productViewMode === 'table') {
      document.getElementById('productTableViewContainer').style.display = 'block';
      document.getElementById('productGridViewContainer').style.display = 'none';
      renderProductTable(paginated);
    } else {
      document.getElementById('productTableViewContainer').style.display = 'none';
      document.getElementById('productGridViewContainer').style.display = 'block';
      renderProductGrid(paginated);
    }
  }

  function renderProductTable(items) {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 40px; color: var(--text-dim);">No matching products found.</td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      const status = getStockStatus(item);
      const fallbackImg = `https://via.placeholder.com/40/1e293b/6366f1?text=${encodeURIComponent(item.sku.slice(0, 3))}`;
      return `
        <tr>
          <td>
            <div class="product-cell">
              <img src="${item.imageUrl || fallbackImg}" class="product-img" onerror="this.src='${fallbackImg}'" alt="Product thumbnail">
              <div>
                <div class="product-name">${item.name}</div>
                <div class="product-sku">${item.sku}</div>
              </div>
            </div>
          </td>
          <td><span class="category-tag">${item.category}</span></td>
          <td>
            <strong>${item.quantity}</strong> units
            <div style="font-size:11px; color:var(--text-dim);">Min: ${item.minStock}</div>
          </td>
          <td>${getStatusBadgeHtml(status)}</td>
          <td>${formatCurrency(item.costPrice)}</td>
          <td>${formatCurrency(item.sellingPrice)}</td>
          <td>${item.location || '-'}</td>
          <td>
            <div style="display:flex; gap:6px;">
              <button class="btn btn-secondary btn-icon-only edit-prod-btn" data-id="${item.id}" title="Edit SKU">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-secondary btn-icon-only adjust-stock-btn" data-id="${item.id}" title="Quick Stock Adjustment">
                <i class="fa-solid fa-plus-minus"></i>
              </button>
              <button class="btn btn-secondary btn-icon-only delete-prod-btn" data-id="${item.id}" title="Delete Product" style="color:var(--accent-danger);">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderProductGrid(items) {
    const grid = document.getElementById('inventoryGridBody');
    if (!grid) return;

    if (items.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-dim);">No matching products found.</div>`;
      return;
    }

    grid.innerHTML = items.map(item => {
      const status = getStockStatus(item);
      const fallbackImg = `https://via.placeholder.com/300x160/1e293b/6366f1?text=${encodeURIComponent(item.name)}`;
      return `
        <div class="product-card">
          <div class="card-image-wrap">
            <img src="${item.imageUrl || fallbackImg}" onerror="this.src='${fallbackImg}'" alt="Product image">
            <div class="badge-pos">${getStatusBadgeHtml(status)}</div>
          </div>
          <div class="card-body">
            <span class="category-tag" style="align-self:flex-start; margin-bottom: 8px;">${item.category}</span>
            <h4 class="card-title">${item.name}</h4>
            <div class="card-sku">${item.sku}</div>
            
            <div class="card-stats">
              <div class="stat-item">
                <span>In Stock</span>
                <strong>${item.quantity} units</strong>
              </div>
              <div class="stat-item">
                <span>Selling Price</span>
                <strong>${formatCurrency(item.sellingPrice)}</strong>
              </div>
            </div>

            <div class="card-actions">
              <button class="btn btn-secondary btn-sm edit-prod-btn" data-id="${item.id}" style="flex:1;">
                <i class="fa-solid fa-pen-to-square"></i> Edit
              </button>
              <button class="btn btn-primary btn-sm adjust-stock-btn" data-id="${item.id}" style="flex:1;">
                <i class="fa-solid fa-plus-minus"></i> Stock
              </button>
              <button class="btn btn-secondary btn-sm delete-prod-btn" data-id="${item.id}" style="color:var(--accent-danger);">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderPaginationControls(totalPages) {
    const controls = document.getElementById('paginationControls');
    if (!controls) return;

    let html = '';
    html += `<button class="btn btn-secondary btn-sm" id="prevPageBtn" ${productFilters.page <= 1 ? 'disabled' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
      if (i === productFilters.page) {
        html += `<button class="btn btn-primary btn-sm page-num-btn active">${i}</button>`;
      } else if (i <= 3 || i >= totalPages - 1 || Math.abs(i - productFilters.page) <= 1) {
        html += `<button class="btn btn-secondary btn-sm page-num-btn" data-page="${i}">${i}</button>`;
      }
    }

    html += `<button class="btn btn-secondary btn-sm" id="nextPageBtn" ${productFilters.page >= totalPages ? 'disabled' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;
    controls.innerHTML = html;
  }

  function populateCategoryDropdown() {
    const select = document.getElementById('categoryFilter');
    const datalist = document.getElementById('categoryOptions');
    
    const categories = Array.from(new Set(products.map(p => p.category))).sort();

    if (select) {
      const current = productFilters.category;
      select.innerHTML = `<option value="ALL">All Categories</option>` + categories.map(c => `<option value="${c}" ${c === current ? 'selected' : ''}>${c}</option>`).join('');
    }

    if (datalist) {
      datalist.innerHTML = categories.map(c => `<option value="${c}"></option>`).join('');
    }
  }

  function populateLocationDropdown() {
    const select = document.getElementById('locationFilter');
    if (!select) return;

    const locations = Array.from(new Set(products.map(p => p.location).filter(Boolean))).sort();
    const current = productFilters.location;

    select.innerHTML = `<option value="ALL">All Locations</option>` + locations.map(l => `<option value="${l}" ${l === current ? 'selected' : ''}>${l}</option>`).join('');
  }


  // --- 3. MOVEMENTS / AUDIT LOG VIEW ---
  function renderMovementsView() {
    const tbody = document.getElementById('movementsTableBody');
    if (!tbody) return;

    let filtered = movements.filter(m => {
      const q = movementFilters.search.toLowerCase();
      const matchesSearch = !q || m.productName.toLowerCase().includes(q) || m.sku.toLowerCase().includes(q) || (m.reason && m.reason.toLowerCase().includes(q));
      const matchesType = movementFilters.type === 'ALL' || m.type === movementFilters.type;
      return matchesSearch && matchesType;
    });

    filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-dim);">No stock movement logs found.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(m => {
      const isPositive = m.delta > 0;
      const badgeClass = m.type === 'STOCK_IN' ? 'badge-in-stock' : (m.type === 'STOCK_OUT' ? 'badge-out-of-stock' : 'badge-low-stock');
      const typeText = m.type === 'STOCK_IN' ? 'Stock In (+)' : (m.type === 'STOCK_OUT' ? 'Stock Out (-)' : 'Audit Adjust');

      return `
        <tr>
          <td>${formatDate(m.timestamp)}</td>
          <td><strong>${m.productName}</strong> <div style="font-size:11px; color:var(--text-dim);">${m.sku}</div></td>
          <td><span class="status-badge ${badgeClass}">${typeText}</span></td>
          <td style="font-weight:700; color:${isPositive ? 'var(--accent-success)' : 'var(--accent-danger)'}">${isPositive ? '+' : ''}${m.delta}</td>
          <td>${m.prevStock} &rarr; <strong>${m.newStock}</strong></td>
          <td>${m.reason || 'Manual update'}</td>
        </tr>
      `;
    }).join('');
  }


  // --- 4. ANALYTICS VIEW ---
  function renderAnalyticsView() {
    // Restock Report Table
    const tbody = document.getElementById('restockReportTbody');
    if (tbody) {
      const lowStock = products.filter(p => getStockStatus(p) !== 'IN_STOCK');
      if (lowStock.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:20px; color:var(--accent-success); font-weight:600;"><i class="fa-solid fa-circle-check"></i> All stock levels healthy! No reorders needed.</td></tr>`;
      } else {
        tbody.innerHTML = lowStock.map(p => {
          const shortage = Math.max(0, p.minStock - p.quantity + 5);
          const estCost = shortage * p.costPrice;
          return `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td><code>${p.sku}</code></td>
              <td><span class="category-tag">${p.category}</span></td>
              <td style="color:var(--accent-danger); font-weight:700;">${p.quantity}</td>
              <td>${p.minStock}</td>
              <td><strong>+${shortage} units</strong></td>
              <td>${formatCurrency(estCost)}</td>
              <td>
                <button class="btn btn-primary btn-sm adjust-stock-btn" data-id="${p.id}">
                  <i class="fa-solid fa-cart-plus"></i> Restock
                </button>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    // Chart 1: Stock vs Min Reorder Level
    const sampleItems = products.slice(0, 7);
    const ctxReorder = document.getElementById('reorderLevelChart')?.getContext('2d');
    if (ctxReorder) {
      if (reorderChartInstance) reorderChartInstance.destroy();
      reorderChartInstance = new Chart(ctxReorder, {
        type: 'bar',
        data: {
          labels: sampleItems.map(p => p.name.length > 15 ? p.name.substring(0, 15) + '...' : p.name),
          datasets: [
            {
              label: 'Current Stock',
              data: sampleItems.map(p => p.quantity),
              backgroundColor: '#6366f1',
              borderRadius: 6
            },
            {
              label: 'Min Reorder Threshold',
              data: sampleItems.map(p => p.minStock),
              backgroundColor: '#f43f5e',
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: '#94a3b8' } } },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
          }
        }
      });
    }

    // Chart 2: Projected Margin Analysis
    const totalCostVal = products.reduce((acc, p) => acc + (p.quantity * p.costPrice), 0);
    const totalRetailVal = products.reduce((acc, p) => acc + (p.quantity * p.sellingPrice), 0);
    const estProfit = Math.max(0, totalRetailVal - totalCostVal);

    const ctxMargin = document.getElementById('marginChart')?.getContext('2d');
    if (ctxMargin) {
      if (marginChartInstance) marginChartInstance.destroy();
      marginChartInstance = new Chart(ctxMargin, {
        type: 'bar',
        data: {
          labels: ['Total Cost Inventory', 'Total Retail Potential', 'Est. Profit Margin'],
          datasets: [{
            data: [totalCostVal, totalRetailVal, estProfit],
            backgroundColor: ['#f59e0b', '#10b981', '#6366f1'],
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
          }
        }
      });
    }
  }


  // --- 5. BARCODE HUB VIEW ---
  function renderBarcodeHub() {
    const select = document.getElementById('barcodeProductSelect');
    if (!select) return;

    const currentVal = select.value;
    select.innerHTML = `<option value="">-- Choose Item --</option>` + products.map(p => `<option value="${p.id}">${p.name} (${p.sku})</option>`).join('');

    if (currentVal && products.some(p => p.id === currentVal)) {
      select.value = currentVal;
      generateBarcode(currentVal);
    } else if (products.length > 0) {
      select.value = products[0].id;
      generateBarcode(products[0].id);
    }
  }

  function generateBarcode(productId) {
    const prod = products.find(p => p.id === productId);
    const svg = document.getElementById('barcodeCanvas');
    if (!prod || !svg || typeof JsBarcode === 'undefined') return;

    try {
      JsBarcode(svg, prod.sku, {
        format: 'CODE128',
        lineColor: '#0f172a',
        width: 2,
        height: 80,
        displayValue: true,
        font: 'monospace',
        fontSize: 14
      });
    } catch (e) {
      console.error('Barcode rendering error:', e);
    }
  }

  function performBarcodeLookup(code) {
    if (!code) return;
    const cleanCode = code.trim().toLowerCase();
    const found = products.find(p => p.sku.toLowerCase() === cleanCode || p.name.toLowerCase().includes(cleanCode));

    const container = document.getElementById('scanResultContainer');
    if (!container) return;

    container.style.display = 'block';

    if (found) {
      const status = getStockStatus(found);
      container.innerHTML = `
        <div class="product-card" style="border: 1px solid var(--accent-primary);">
          <div class="card-body">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="category-tag">${found.category}</span>
              ${getStatusBadgeHtml(status)}
            </div>
            <h4 class="card-title">${found.name}</h4>
            <div class="card-sku">${found.sku}</div>
            
            <div class="card-stats">
              <div class="stat-item"><span>Current Stock</span><strong>${found.quantity} units</strong></div>
              <div class="stat-item"><span>Location</span><strong>${found.location || '-'}</strong></div>
            </div>

            <div class="card-actions">
              <button class="btn btn-primary btn-sm adjust-stock-btn" data-id="${found.id}">Adjust Stock</button>
              <button class="btn btn-secondary btn-sm edit-prod-btn" data-id="${found.id}">Edit SKU</button>
            </div>
          </div>
        </div>
      `;
      showToast(`Found SKU: ${found.name}`, 'success');
    } else {
      container.innerHTML = `
        <div style="background:var(--accent-danger-bg); border:1px solid rgba(244,63,94,0.3); padding:16px; border-radius:var(--radius-md); text-align:center;">
          <i class="fa-solid fa-circle-xmark" style="font-size:24px; color:var(--accent-danger); margin-bottom:8px;"></i>
          <p style="font-size:14px; font-weight:600;">No product found matching "${code}"</p>
        </div>
      `;
      showToast('No matching SKU found', 'error');
    }
  }


  // --- 6. SUPPLIERS & WAREHOUSES VIEW ---
  function renderSuppliersView() {
    // Unique Locations
    const locMap = {};
    products.forEach(p => {
      const loc = p.location || 'Unassigned Area';
      locMap[loc] = (locMap[loc] || 0) + p.quantity;
    });

    const locList = document.getElementById('locationsList');
    if (locList) {
      locList.innerHTML = Object.entries(locMap).map(([loc, count]) => `
        <li style="background:var(--bg-secondary); border:1px solid var(--border-color); padding:14px 18px; border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong><i class="fa-solid fa-location-dot" style="color:var(--accent-primary); margin-right:8px;"></i> ${loc}</strong>
          </div>
          <span class="category-tag">${count} items total</span>
        </li>
      `).join('');
    }

    // Unique Suppliers
    const supMap = {};
    products.forEach(p => {
      const sup = p.supplier || 'Direct Retail';
      if (!supMap[sup]) supMap[sup] = [];
      supMap[sup].push(p.name);
    });

    const supList = document.getElementById('suppliersList');
    if (supList) {
      supList.innerHTML = Object.entries(supMap).map(([sup, items]) => `
        <li style="background:var(--bg-secondary); border:1px solid var(--border-color); padding:14px 18px; border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong><i class="fa-solid fa-truck" style="color:var(--accent-success); margin-right:8px;"></i> ${sup}</strong>
            <div style="font-size:12px; color:var(--text-dim); margin-top:2px;">Supplies: ${items.slice(0, 3).join(', ')}${items.length > 3 ? '...' : ''}</div>
          </div>
          <span class="category-tag">${items.length} SKUs</span>
        </li>
      `).join('');
    }
  }


  // --- 7. SETTINGS VIEW ---
  function renderSettingsView() {
    const storeInput = document.getElementById('settingStoreName');
    const currInput = document.getElementById('settingCurrency');

    if (storeInput) storeInput.value = settings.storeName;
    if (currInput) currInput.value = settings.currency;
  }


  // --- PRODUCT CRUD OPERATIONS ---
  function openAddProductModal() {
    document.getElementById('productForm').reset();
    document.getElementById('prodId').value = '';
    document.getElementById('productModalTitle').innerText = 'Add New Product';
    
    // Auto-generate a SKU
    document.getElementById('prodSku').value = 'SKU-' + Math.floor(1000 + Math.random() * 9000);
    
    openModal('productModal');
  }

  function openEditProductModal(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    document.getElementById('prodId').value = prod.id;
    document.getElementById('prodName').value = prod.name;
    document.getElementById('prodSku').value = prod.sku;
    document.getElementById('prodCategory').value = prod.category;
    document.getElementById('prodQuantity').value = prod.quantity;
    document.getElementById('prodMinStock').value = prod.minStock;
    document.getElementById('prodCostPrice').value = prod.costPrice;
    document.getElementById('prodSellingPrice').value = prod.sellingPrice;
    document.getElementById('prodLocation').value = prod.location || '';
    document.getElementById('prodSupplier').value = prod.supplier || '';
    document.getElementById('prodImageUrl').value = prod.imageUrl || '';

    document.getElementById('productModalTitle').innerText = 'Edit Product SKU';
    openModal('productModal');
  }

  function handleProductFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('prodId').value;
    const name = document.getElementById('prodName').value.trim();
    const sku = document.getElementById('prodSku').value.trim();
    const category = document.getElementById('prodCategory').value.trim();
    const quantity = parseInt(document.getElementById('prodQuantity').value, 10) || 0;
    const minStock = parseInt(document.getElementById('prodMinStock').value, 10) || 0;
    const costPrice = parseFloat(document.getElementById('prodCostPrice').value) || 0;
    const sellingPrice = parseFloat(document.getElementById('prodSellingPrice').value) || 0;
    const location = document.getElementById('prodLocation').value.trim();
    const supplier = document.getElementById('prodSupplier').value.trim();
    const imageUrl = document.getElementById('prodImageUrl').value.trim();

    if (id) {
      // Edit existing product
      const idx = products.findIndex(p => p.id === id);
      if (idx !== -1) {
        const prevQty = products[idx].quantity;
        products[idx] = {
          ...products[idx],
          name, sku, category, quantity, minStock, costPrice, sellingPrice, location, supplier, imageUrl
        };

        // Log movement if quantity manually updated
        if (prevQty !== quantity) {
          const delta = quantity - prevQty;
          logStockMovement(id, name, sku, delta > 0 ? 'STOCK_IN' : 'STOCK_OUT', delta, prevQty, quantity, 'Manual Product Edit');
        }

        showToast(`Updated SKU: ${name}`, 'success');
      }
    } else {
      // Add new product
      const newId = 'prod-' + Date.now();
      const newProduct = {
        id: newId,
        name, sku, category, quantity, minStock, costPrice, sellingPrice, location, supplier, imageUrl,
        createdAt: new Date().toISOString()
      };
      products.unshift(newProduct);

      // Log initial stock creation movement
      if (quantity > 0) {
        logStockMovement(newId, name, sku, 'STOCK_IN', quantity, 0, quantity, 'Initial Product Setup');
      }

      showToast(`Created product: ${name}`, 'success');
    }

    saveProducts();
    closeModal('productModal');
    renderActiveView();
  }

  function openStockAdjustModal(productId = '') {
    const select = document.getElementById('adjustProductId');
    if (!select) return;

    select.innerHTML = products.map(p => `<option value="${p.id}" ${p.id === productId ? 'selected' : ''}>${p.name} (Current: ${p.quantity} units)</option>`).join('');

    document.getElementById('adjustQuantity').value = 1;
    document.getElementById('adjustReason').value = '';
    openModal('adjustModal');
  }

  function handleStockAdjustSubmit(e) {
    e.preventDefault();
    const prodId = document.getElementById('adjustProductId').value;
    const type = document.getElementById('adjustType').value; // STOCK_IN, STOCK_OUT, ADJUSTMENT
    let qtyInput = parseInt(document.getElementById('adjustQuantity').value, 10) || 0;
    const reason = document.getElementById('adjustReason').value.trim() || 'Manual adjustment';

    const prod = products.find(p => p.id === prodId);
    if (!prod) return;

    const prevQty = prod.quantity;
    let delta = qtyInput;

    if (type === 'STOCK_OUT') {
      delta = -qtyInput;
    } else if (type === 'ADJUSTMENT') {
      // set absolute quantity if specified, or delta
      delta = qtyInput - prevQty;
    }

    const newQty = Math.max(0, prevQty + delta);
    prod.quantity = newQty;

    logStockMovement(prod.id, prod.name, prod.sku, type, delta, prevQty, newQty, reason);

    saveProducts();
    closeModal('adjustModal');
    showToast(`Stock updated for ${prod.name}: ${prevQty} &rarr; ${newQty}`, 'success');
    renderActiveView();
  }

  function logStockMovement(productId, productName, sku, type, delta, prevStock, newStock, reason) {
    const movement = {
      id: 'mov-' + Date.now(),
      timestamp: new Date().toISOString(),
      productId,
      productName,
      sku,
      type,
      delta,
      prevStock,
      newStock,
      reason
    };
    movements.unshift(movement);
    saveMovements();
  }

  function confirmDeleteProduct(productId) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;

    actionToDeleteId = productId;
    document.getElementById('confirmMessage').innerText = `Are you sure you want to delete "${prod.name}" (${prod.sku})? This operation cannot be undone.`;
    openModal('confirmModal');
  }

  function handleDeleteProductConfirmed() {
    if (!actionToDeleteId) return;

    const prod = products.find(p => p.id === actionToDeleteId);
    products = products.filter(p => p.id !== actionToDeleteId);
    
    saveProducts();
    closeModal('confirmModal');
    showToast(`Deleted product: ${prod ? prod.name : 'SKU'}`, 'warning');
    actionToDeleteId = null;
    renderActiveView();
  }

  // --- CSV & JSON DATA EXPORT / IMPORT ---
  function exportInventoryCsv() {
    if (products.length === 0) {
      showToast('No products available to export', 'warning');
      return;
    }

    const headers = ['ID', 'Name', 'SKU', 'Category', 'Quantity', 'MinStock', 'CostPrice', 'SellingPrice', 'Location', 'Supplier'];
    const rows = products.map(p => [
      `"${p.id}"`,
      `"${p.name.replace(/"/g, '""')}"`,
      `"${p.sku}"`,
      `"${p.category}"`,
      p.quantity,
      p.minStock,
      p.costPrice,
      p.sellingPrice,
      `"${(p.location || '').replace(/"/g, '""')}"`,
      `"${(p.supplier || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `StockVault_Inventory_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    showToast('Exported Inventory CSV successfully!', 'success');
  }

  function exportBackupJson() {
    const data = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      products,
      movements,
      settings
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', `StockVault_Backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    showToast('Backup JSON downloaded successfully!', 'success');
  }

  function resetToDemoData() {
    if (confirm('Are you sure you want to reset all inventory data to default demo items? Custom products will be deleted.')) {
      products = [...SEED_PRODUCTS];
      movements = [...SEED_MOVEMENTS];
      settings = { ...SEED_SETTINGS };

      saveProducts();
      saveMovements();
      saveSettings();

      showToast('Restored default demo inventory!', 'success');
      renderActiveView();
    }
  }


  // --- SETUP EVENT LISTENERS ---
  function initEventListeners() {
    // Navigation / View Switchers
    document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = item.dataset.view;
        if (viewId) switchView(viewId);
      });
    });

    // Mobile Sidebar Toggle
    document.getElementById('toggleSidebar')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.toggle('mobile-open');
    });

    // Global Search Focus Shortcut (Ctrl+K or '/')
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        const searchInput = document.getElementById('globalSearchInput');
        if (searchInput) searchInput.focus();
      }
    });

    document.getElementById('globalSearchInput')?.addEventListener('input', (e) => {
      const q = e.target.value;
      productFilters.search = q;
      switchView('inventoryView');
    });

    // Quick Action Header Buttons
    document.getElementById('headerAddProductBtn')?.addEventListener('click', openAddProductModal);
    document.getElementById('dashAddProductBtn')?.addEventListener('click', openAddProductModal);
    document.getElementById('inventoryAddProductBtn')?.addEventListener('click', openAddProductModal);

    document.getElementById('navQuickAdjustBtn')?.addEventListener('click', () => openStockAdjustModal());
    document.getElementById('logMovementBtn')?.addEventListener('click', () => openStockAdjustModal());
    document.getElementById('navScanBtn')?.addEventListener('click', () => switchView('barcodeView'));

    document.getElementById('viewLowStockBtn')?.addEventListener('click', () => {
      productFilters.status = 'LOW_STOCK';
      switchView('inventoryView');
    });

    document.getElementById('dashViewAllMovementsBtn')?.addEventListener('click', () => switchView('movementsView'));

    // AI Inventory Summary Toggle
    document.getElementById('aiToggleInsightsBtn')?.addEventListener('click', () => {
      aiInsightsExpanded = !aiInsightsExpanded;
      const panel = document.getElementById('aiInsightsPanel');
      const text = document.getElementById('aiToggleInsightsText');
      const icon = document.getElementById('aiToggleInsightsIcon');
      const btn = document.getElementById('aiToggleInsightsBtn');

      if (panel) panel.style.display = aiInsightsExpanded ? 'block' : 'none';
      if (text) text.innerText = aiInsightsExpanded ? 'Hide insights' : 'View insights';
      if (icon) icon.className = aiInsightsExpanded ? 'fa-solid fa-chevron-up toggle-icon' : 'fa-solid fa-chevron-down toggle-icon';
      if (btn) btn.setAttribute('aria-expanded', aiInsightsExpanded ? 'true' : 'false');
    });

    // Inventory Filters & Switches
    document.getElementById('inventorySearchInput')?.addEventListener('input', (e) => {
      productFilters.search = e.target.value;
      productFilters.page = 1;
      renderProductsView();
    });

    document.getElementById('categoryFilter')?.addEventListener('change', (e) => {
      productFilters.category = e.target.value;
      productFilters.page = 1;
      renderProductsView();
    });

    document.getElementById('locationFilter')?.addEventListener('change', (e) => {
      productFilters.location = e.target.value;
      productFilters.page = 1;
      renderProductsView();
    });

    document.querySelectorAll('.status-tabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.status-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        productFilters.status = btn.dataset.status;
        productFilters.page = 1;
        renderProductsView();
      });
    });

    // View Mode Toggle (Table / Grid)
    document.getElementById('viewModeTable')?.addEventListener('click', () => {
      productViewMode = 'table';
      document.getElementById('viewModeTable')?.classList.add('active');
      document.getElementById('viewModeGrid')?.classList.remove('active');
      renderProductsView();
    });

    document.getElementById('viewModeGrid')?.addEventListener('click', () => {
      productViewMode = 'grid';
      document.getElementById('viewModeGrid')?.classList.add('active');
      document.getElementById('viewModeTable')?.classList.remove('active');
      renderProductsView();
    });

    // Table Headers Sorting
    document.querySelectorAll('.data-table th.sortable').forEach(th => {
      th.addEventListener('click', () => {
        const field = th.dataset.sort;
        if (productFilters.sortField === field) {
          productFilters.sortDir = productFilters.sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          productFilters.sortField = field;
          productFilters.sortDir = 'asc';
        }
        renderProductsView();
      });
    });

    // Delegated Clicks for Edit / Stock Adjust / Delete in Tables & Grids
    document.addEventListener('click', (e) => {
      const editBtn = e.target.closest('.edit-prod-btn');
      if (editBtn) {
        openEditProductModal(editBtn.dataset.id);
        return;
      }

      const adjustBtn = e.target.closest('.adjust-stock-btn');
      if (adjustBtn) {
        openStockAdjustModal(adjustBtn.dataset.id);
        return;
      }

      const deleteBtn = e.target.closest('.delete-prod-btn');
      if (deleteBtn) {
        confirmDeleteProduct(deleteBtn.dataset.id);
        return;
      }

      // Pagination Page Numbers
      const pageBtn = e.target.closest('.page-num-btn');
      if (pageBtn && pageBtn.dataset.page) {
        productFilters.page = parseInt(pageBtn.dataset.page, 10);
        renderProductsView();
        return;
      }
    });

    document.getElementById('prevPageBtn')?.addEventListener('click', () => {
      if (productFilters.page > 1) {
        productFilters.page--;
        renderProductsView();
      }
    });

    document.getElementById('nextPageBtn')?.addEventListener('click', () => {
      productFilters.page++;
      renderProductsView();
    });

    // Form Submissions
    document.getElementById('productForm')?.addEventListener('submit', handleProductFormSubmit);
    document.getElementById('adjustForm')?.addEventListener('submit', handleStockAdjustSubmit);

    document.getElementById('genSkuBtn')?.addEventListener('click', () => {
      document.getElementById('prodSku').value = 'SKU-' + Math.floor(1000 + Math.random() * 9000);
    });

    // Close Modal Listeners
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.closeModal;
        closeModal(modalId);
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    });

    // Confirmation Action
    document.getElementById('confirmActionBtn')?.addEventListener('click', handleDeleteProductConfirmed);

    // Movement Log Filters
    document.getElementById('movementSearchInput')?.addEventListener('input', (e) => {
      movementFilters.search = e.target.value;
      renderMovementsView();
    });

    document.getElementById('movementTypeFilter')?.addEventListener('change', (e) => {
      movementFilters.type = e.target.value;
      renderMovementsView();
    });

    // Barcode Hub Actions
    document.getElementById('barcodeProductSelect')?.addEventListener('change', (e) => {
      generateBarcode(e.target.value);
    });

    document.getElementById('printBarcodeBtn')?.addEventListener('click', () => {
      window.print();
    });

    document.getElementById('simulatedScanSubmitBtn')?.addEventListener('click', () => {
      const code = document.getElementById('simulatedBarcodeInput')?.value;
      performBarcodeLookup(code);
    });

    document.getElementById('simulatedBarcodeInput')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performBarcodeLookup(e.target.value);
      }
    });

    // Settings Page Actions
    document.getElementById('saveSettingsBtn')?.addEventListener('click', () => {
      settings.storeName = document.getElementById('settingStoreName').value.trim() || 'Main Hub Warehouse';
      settings.currency = document.getElementById('settingCurrency').value.trim() || '$';
      saveSettings();
      showToast('Settings saved successfully!', 'success');
      renderActiveView();
    });

    document.getElementById('exportCsvBtn')?.addEventListener('click', exportInventoryCsv);
    document.getElementById('exportBackupJsonBtn')?.addEventListener('click', exportBackupJson);
    document.getElementById('resetDemoDataBtn')?.addEventListener('click', resetToDemoData);

    document.getElementById('dashboardRefreshBtn')?.addEventListener('click', () => {
      renderActiveView();
      showToast('Dashboard updated!', 'success');
    });
  }

  // --- INITIALIZATION ---
  function init() {
    loadState();
    initEventListeners();
    renderActiveView();
  }

  // Boot on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
