// add-to-cart.js

// Cart Management
const cart = {
  items: [],
  totals: {
    aluminiumFraming: 0,
    rubber: 0,
    woolFile: 0,
    rollers: 0,
    lock: 0,
    guiders: 0,
    sideArms: 0,
    projectHandle: 0,
    glass: 0,
    installation: 0,
  },
  // Add computed property for grand total
  get grandTotal() {
    return this.items.reduce((total, item) => 
      total + Object.values(item.components).reduce((sum, val) => sum + val, 0), 0);
  },
};

  // Typelabels mapping
const typeLabels = {
  type1: 'Sliding window',
  type2: 'Sliding window',
  type3: 'Sliding window',
  type4: 'Sliding window',
  type5: 'Sliding window',
  type6: 'Sliding window',
  type7: 'Sliding window',
  type8: 'Sliding window',
  type9: 'Sliding window',
  type10: 'Sliding window',
  type11: 'Sliding window',
  type12: 'Sliding window',
  type13: 'Top Hung window',
  type14: 'Top Hung window',
  type15: 'Projecting - Custom Light Window',
  type16: 'Centre Hung window',
  type17: 'Sliding Awning Top',
  type18: 'Folding - 4 Panels',
  type19: 'Folding - 3 Panels'

  // type1: 'Sliding - 2 Panels (No Fixed)',
  // type2: 'Sliding - 2 Panels (Single Fixed)',
  // type3: 'Sliding - 2 Panels (Double Fixed)',
  // type4: 'Sliding - 3 Panels (No Fixed)',
  // type5: 'Sliding - 3 Panels (Single Fixed)',
  // type6: 'Sliding - 3 Panels (Double Fixed)',
  // type7: 'Sliding - 4 Panels (No Fixed)',
  // type8: 'Sliding - 4 Panels (Single Fixed)',
  // type9: 'Sliding - 4 Panels (Double Fixed)',
  // type10: 'Sliding - 2 Panels (Openable Top + Bottom Fixed)',
  // type11: 'Sliding - 3 Panels (Openable Top + Bottom Fixed)',
  // type12: 'Sliding - 4 Panels (Openable Top + Bottom Fixed)',
  // type13: 'Top Hung - Single Panel Bath Window',
  // type14: 'Top Hung - Double Panel Bath Window',
  // type15: 'Projecting - Custom Light Window',
  // type16: 'Centre Hung - Single Panel',
  // type17: 'Sliding - 3 Panels (Awning Top)',
  // type18: 'Folding - 4 Panels',
  // type19: 'Folding - 3 Panels'
};

// TypeId mapping
const typeId = {
  type1: '#sw001',
  type2: '#sw002',
  type3: '#sw003',
  type4: '#sw004',
  type5: '#sw005',
  type6: '#sw006',
  type7: '#sw007',
  type8: '#sw008',
  type9: '#sw009',
  type10: '#sw010',
  type11: '#sw011',
  type12: '#sw012',
  type13: '#th013',
  type14: '#th014',
  type15: '#cw015',
  type16: '#ch016',
  type17: '#sw017',
  type18: 'fd018',
  type19: '#fd019'

};
// Item removal functionality
function removeFromCart(itemId) {
  cart.items = cart.items.filter(item => item.id !== itemId);
  persistCart();
  renderCartPreview();
}

// Initialize cart from session storage
function loadCart() {
  const savedCart = sessionStorage.getItem("aluminiumCart");
  if (savedCart) {
    Object.assign(cart, JSON.parse(savedCart));
    renderCartPreview();
  }
}

// Save cart to session storage
function persistCart() {
  sessionStorage.setItem("aluminiumCart", JSON.stringify({
    items: cart.items,
    // No need to persist grandTotal - it's computed
  }));
}

function loadCart() {
  const savedCart = sessionStorage.getItem("aluminiumCart");
  if (savedCart) {
    const parsed = JSON.parse(savedCart);
    cart.items = parsed.items || [];
    renderCartPreview();
  }
}

// add-to-cart.js - Modified renderCartPreview function
function renderCartPreview() {
  const cartPreview = document.getElementById("cart-preview");
  if (!cartPreview) return;

  // Calculate totals correctly
  const grandTotal = cart.items.reduce((total, item) => {
    // Calculate unit price once per item
    const unitPrice = Object.values(item.components).reduce((sum, val) => sum + val, 0);
    // Multiply by quantity for item total
    return total + (unitPrice * (item.quantity || 1));
  }, 0);

  const totalItems = cart.items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  cartPreview.innerHTML = `
    <div class="cart-container">
      <div class="cart-header">
        <div class="preview-head">Preview</div>
        <div class="desc-head">Description</div>
        <div class="price-head">Unit Price</div>
        <div class="qty-head">Quantity</div>
        <div class="total-head">Total</div>
      </div>
      
      ${cart.items.map(item => {
        // Calculate once per item
        const unitPrice = Object.values(item.components).reduce((sum, val) => sum + val, 0);
        const itemTotal = unitPrice * (item.quantity || 1);

        return `
          <div class="cart-item" data-id="${item.id}">
            <div class="preview">
              <img src="img/labels/${item.type}.png" alt="${item.type}" width="100" height="100">
            </div>
            <div class="description">
              <h4>${item.measurements.height} × ${item.measurements.width} mm ${typeLabels[item.type]}</h4>
              <p>${item.usedProfileColour} Aluminium profiles</p>
              <p>${typeId[item.type]} [${item.usedGlassThickness} ${item.glassType} glass]</p>
              <button onclick="removeFromCart('${item.id}')" class="remove-btn">Remove</button>
            </div>
            <div class="price">
              Ksh ${unitPrice.toFixed(0)}
            </div>
            <div class="quantity">
              <button class="qty-btn minus" onclick="adjustQuantity('${item.id}', -1)">−</button>
              <span class="qty-value">${item.quantity || 1}</span>
              <button class="qty-btn plus" onclick="adjustQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="total">
              Ksh ${itemTotal.toFixed(0)}
            </div>
          </div>
        `;
      }).join("")}
      
      <div class="cart-footer">
        <div class="total-items">Total Items: ${totalItems}</div>
        <div class="grand-total">
          <strong>Grand Total:</strong> Ksh ${grandTotal.toFixed(0)}
        </div>
      </div>
    </div>
  `;
}

// Functions for quantity adjustment
function adjustQuantity(itemId, delta) {
  const item = cart.items.find(item => item.id === itemId);
  if (item) {
    item.quantity = (item.quantity || 1) + delta;
    if (item.quantity < 1) item.quantity = 1;
    persistCart();
    renderCartPreview();
  }
}

// Export to Google Sheets (placeholder implementation)
async function exportToSheets() {
  try {
    // TODO: Implement Google Sheets integration
    console.log("Exporting to sheets:", cart.items);
    alert("Export feature coming soon!");
  } catch (error) {
    console.error("Export failed:", error);
    alert("Failed to export quotation");
  }
}


function getSelectedWindowType() {
  // Safely get elements (returns null if not found)
  const numberOfPanelsElement = document.getElementById("noOfPanels");
  const topHungTypeElement = document.getElementById("topHungWindowType");
  const fixedPartitionElement = document.getElementById("fixedPartition");

  // Get values or defaults
  const numberOfPanels = numberOfPanelsElement?.value || null;
  const topHungType = topHungTypeElement?.value || null;
  const withWithoutPartition = fixedPartitionElement?.value || null;

  // Match the logic from start() function
  if (numberOfPanels === "2") {
    if (withWithoutPartition === "noPartition") return "type1";
    if (["fixedTop", "fixedBottom"].includes(withWithoutPartition)) return "type2";
    if (withWithoutPartition === "doubleFixed") return "type3";
    if (withWithoutPartition === "openAbleTopFxBtm") return "type10";
  }
  
  if (numberOfPanels === "3") {
    if (withWithoutPartition === "noPartition") return "type4";
    if (["fixedTop", "fixedBottom"].includes(withWithoutPartition)) return "type5";
    if (withWithoutPartition === "doubleFixed") return "type6";
    if (withWithoutPartition === "openAbleTopFxBtm") return "type11";
    if (withWithoutPartition === "openAbleTop") return "type17";
  }
  
  if (numberOfPanels === "4") {
    if (withWithoutPartition === "noPartition") return "type7";
    if (["fixedTop", "fixedBottom"].includes(withWithoutPartition)) return "type8";
    if (withWithoutPartition === "doubleFixed") return "type9";
    if (withWithoutPartition === "openAbleTopFxBtm") return "type12";
  }

  // Handle top-hung specific selections
  if (topHungType === "doublePanel") return "type14";
  if (topHungType === "singlePanel") return "type13";
  if (topHungType === "customLight") return "type15";
  if (topHungType === "centerHung") return "type16";

  return null;
}

function addToCart(windowTypeKey, measurements, glassType, usedGlassThickness, usedProfileColour) {
  const existingItem = cart.items.find(item => 
    item.type === windowTypeKey &&
    item.measurements.height === measurements.height &&
    item.measurements.width === measurements.width &&
    item.glassType === glassType &&
    item.usedGlassThickness === usedGlassThickness &&
    item.usedProfileColour === usedProfileColour
  );

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    const windowType = windowTypes[windowTypeKey];
    const item = {
      id: Date.now().toString(),
      type: windowTypeKey,
      measurements,
      usedGlassThickness,
      glassType,
      usedProfileColour,
      quantity: 1,
      components: {
        ...calculateComponents(windowType),
        glass: windowType.glass(),
        installation: windowType.installation()
      }
    };
    cart.items.push(item);
  }

  updateCartTotals();
  persistCart();
  renderCartPreview();
}

function calculateComponents(windowType) {
  return Object.entries(windowType).reduce((acc, [key, value]) => {
    if (typeof value === "function" && key !== "totals" && key !== "installation" && key !== "heightFx" && key !== "height1") {
      acc[key] = value();
    }
    return acc;
  }, {});
}

function updateCartTotals() {
  cart.totals = cart.items.reduce((acc, item) => ({
    aluminiumFraming: acc.aluminiumFraming + sumAluminiumComponents(item),
    rubber: acc.rubber + item.components.rubber,
    woolFile: acc.woolFile + item.components.woolFile,
    rollers: acc.rollers + (item.components.rollers || 0),
    lock: acc.lock + (item.components.lock || 0),
    guiders: acc.guiders + (item.components.guiders || 0),
    sideArms: acc.sideArms + (item.components.sideArms || 0),
    projectHandle: acc.projectHandle + (item.components.projectHandle || 0),
    glass: acc.glass + item.components.glass,
    installation: acc.installation + item.components.installation
  }), { ...cart.totals });
}

function sumAluminiumComponents(item) {
  return Object.entries(item.components).reduce((sum, [key, value]) => {
    const aluminiumComponents = [
      'jambP', 'interLock', 'lockSection', 'topBottom', 
      'headerP', 'sillP', 'tube', 'butterFly', 'jambCover',
      'pInner', 'pOutter', 'projectBidding', 'singleHeader'
    ];
    return aluminiumComponents.includes(key) ? sum + value : sum;
  }, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  const addToCartButton = document.getElementById("add-to-cart");
  const exportQuoteButton = document.getElementById("export-quote");
  
  if (!addToCartButton || !exportQuoteButton) return;

  addToCartButton.addEventListener("click", () => {
    const height = parseFloat(document.getElementById("heightId").value);
    const width = parseFloat(document.getElementById("widthId").value);
    const glassType = document.getElementById("glassType").value;
    const usedProfileColour = document.getElementById("profileColour").value;
    const usedGlassThickness = document.getElementById("glassThickness").value;
    
    if (isNaN(height) || isNaN(width)) {
      alert("Please enter valid height and width");
      return;
    }

    // Get selected window type based on UI selections
    const windowTypeKey = getSelectedWindowType();
    if (!windowTypeKey) {
      alert("Please configure window properties first");
      return;
    }

    addToCart(windowTypeKey, { height, width }, glassType, usedGlassThickness, usedProfileColour);
    renderCartPreview();
  });

  exportQuoteButton.addEventListener("click", exportToSheets);
});
// Persistence and UI functions remain similar to previous implementation
// ... (persistCart, loadCart, renderCartPreview, exportToSheets)