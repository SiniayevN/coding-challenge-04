let products = [
    { name: "Laptop", category: "Electronics", price: 850, inventory: 30 },
    { name: "Hoodie", category: "Apparel", price: 60, inventory: 100 },
    { name: "Potato", category: "Groceries", price: 6, inventory: 50 },
    { name: "Vacuum", category: "Household", price: 200, inventory: 20 },
    { name: "ChapStick", category: "Default", price: 5, inventory: 200 },
]
//Step 2 done

for (let product of products) {
    
    let discount = 0;
    switch (product.category) {
        case "Electronics":
            discount = .2;
            break;

        case "Apparel":
            discount = .15;
            break;

            case "Household":
                case "Groceries":
                    discount = .1;
                    break;
                    
        case "Default":
            discount = 0;
            break;
    }

    let promoPrice = product.price * (1 - discount);
    product.promoPrice = promoPrice;
    console.log(`The promo price for ${product.name} is $${promoPrice.toFixed(2)}`);
    }


let customerTypes = ["regular", "senior", "student"]; 

for (let i = 0; i < customerTypes.length; i++) {
  let customerType = customerTypes[i];
  let subtotal = 0;                
  let extraDiscount = 0;           

  
  if (customerType === "student") {
    extraDiscount = 0.05;
  } else if (customerType === "senior") {
    extraDiscount = 0.07;
  } else {
    extraDiscount = 0;
  }


  for (let product of products) {
    if (product.inventory > 0) {   
      subtotal += product.promoPrice;
      product.inventory -= 1;     
    }
  }

 
  let total = subtotal * (1 - extraDiscount);

  
  console.log(`Customer ${i + 1} (${customerType}) total: $${total.toFixed(2)}`);
}





