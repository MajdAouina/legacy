<template>
    <div>
      <div id="header"></div>
      <div id="container">
        <div id="top">
          <div id="SHOPPING-BASKET">SHOPPING BASKET (0)</div>
          <div id="BUY-LATER">BUY LATER (0)</div>
        </div>
  
        <div id="content">
          <div id="items"></div>
  
          <div id="cart-details">
            <div id="total-items">12 ITEMS</div>
            <div id="total-price-including-tax-div">
              <div id="total-price-including-tax-title">Total items: including tax</div>
              <div id="total-price-including-tax-data">443.88 €</div>
            </div>
            <div id="total-price-div">
              <div id="total-price-title">TOTAL:</div>
              <div id="total-price-data">443.88 €</div>
            </div>
            <div id="promo-code">DO YOU HAVE A PROMOTIONAL CODE? Enter it when you reach the payment page</div>
            <div id="process-order">PROCESS ORDER</div>
          </div>
          <div id="empty_basket_btn">EMPTY BASKET</div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CartShop',
    // Add any Vue component logic or methods here
  };
  </script>
  
  <style scoped>
  /* Add any necessary CSS styles here */
  </style>
  