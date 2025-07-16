  const PRODUCTS_PER_LOAD = 10;
  let allProducts = [];
  let currentIndex = 0;

  function loadMoreProducts() {
    const container = document.getElementById('product-container');
    const nextIndex = currentIndex + PRODUCTS_PER_LOAD;
    const productsToLoad = allProducts.slice(currentIndex, nextIndex);

    productsToLoad.forEach(product => {

      const phoneNumber = '916353241305';
      const productName = product["product-details"];
      const imageUrl = product["img-fluid src"];
      const message = `I'm interested in this product: ${productName}. Here's the image: ${imageUrl}`;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      const card = document.createElement('div');
      card.className = 'col-sm-6 col-md-4 col-lg-3 p-b-35';
      card.innerHTML = `
        <div class="block2">
          <div class="block2-pic hov-img0">
            
              <img src="${product["img-fluid src"]}" alt="IMG-PRODUCT">
           
          </div>
          <div class="block2-txt flex-w flex-t p-t-14">
            <div class="block2-txt-child1 flex-col-l ">
              <h3 class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                ${product["product-details"]}
              </h3>
              <span class="stext-105 cl3">
              
                <a href="${whatsappLink}" target="_blank">
                <button class="btn btn-success mt-2">Inquiry on WhatsApp</button>
                </a>              
              </span>
            </div>
            <div class="block2-txt-child2 flex-r p-t-3">
              <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"></a>
            </div>
          </div>
        </div>`;
      container.appendChild(card);
    });

    currentIndex = nextIndex;

    // Hide Load More button if all products are loaded
    if (currentIndex >= allProducts.length) {
      document.getElementById('load-more-btn').style.display = 'none';
    }
  }

  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      allProducts = data;
      loadMoreProducts(); // Initial load
    })
    .catch(error => console.error('Error loading product data:', error));


    //<h3><b>₹${Number(product["price"])+1500}</b></h3>