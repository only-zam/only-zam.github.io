// add-to-cart.js - Modified renderCartPreview function
function renderCartPreview() {
  const cartPreview = document.getElementById("cart-preview");
  if (!cartPreview) return;

  // Calculate totals
  const grandTotal = cart.items.reduce((total, item) => 
    total + (item.components.glass + item.components.installation + 
    Object.values(item.components).reduce((sum, val) => sum + val, 0)) * (item.quantity || 1), 0);
  
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
        const itemTotal = (Object.values(item.components).reduce((sum, val) => sum + val, 0)) * (item.quantity || 1);
        return `
          <div class="cart-item" data-id="${item.id}">
            <div class="preview">
              <img src="img/labels/${item.type}.png" alt="${item.type}" width="100" height="100">
            </div>
            <div class="description">
              <h4>${item.measurements.height} × ${item.measurements.width} mm ${typeLabels[item.type]}</h4>
              <p>${item.usedGlassThickness} ${item.glassType} glass</p>
              <button onclick="removeFromCart('${item.id}')" class="remove-btn">Remove</button>
            </div>
            <div class="price">
              Ksh ${Object.values(item.components).reduce((sum, val) => sum + val, 0).toFixed(0)}
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

// Add these new functions for quantity adjustment
function adjustQuantity(itemId, delta) {
  const item = cart.items.find(item => item.id === itemId);
  if (item) {
    item.quantity = (item.quantity || 1) + delta;
    if (item.quantity < 1) item.quantity = 1;
    persistCart();
    renderCartPreview();
  }
}

// Update addToCart function to handle quantity
function addToCart(windowTypeKey, measurements, glassType, usedGlassThickness) {
  const existingItem = cart.items.find(item => 
    item.type === windowTypeKey &&
    item.measurements.height === measurements.height &&
    item.measurements.width === measurements.width &&
    item.glassType === glassType &&
    item.usedGlassThickness === usedGlassThickness
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


In add-to-cart.js can you help me style the rendered #cart-preview ?
Each cart item row should have 4 columns in the following order;
-Item preview image that corresponds with item.type
-Item description (Measurements + item type label, item.usedGlassThickness & glassType, .remove-btn)
-Price
-Quantity (With an add + and minus - function that increments the quantity for similar items. By default, quantity will be 1). Minus - (placed inside a circle) should be on the left of quantity and plus + (Also placed inside a circle) should be on the right of quantity
-Item's total price (multiplied by quantity of course)

I already have the Images to be used. They are 100px × 100px and they have this naming convention; "img/labels/type1.png, type2.png etcetra..
 
Grand total should be displayed at the cart's end as well as the total number of items
The cart's top row for the headings should have a 1px border bottom for a table-look effect. 
Since the img is 100px, each item can take up 110px of height. 
Description column in each item can then span three lines in the folowing order;
-Measurements + item type label (Example output - 1200 × 1200 mm Sliding)
-Glass thickness & type (Example output - Glass type: 6mm one-way)
-Remove button function .remove-btn


