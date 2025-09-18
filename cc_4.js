let products = [
    { name: "Laptop", category: "Electronics", price: 850, inventory: 30 },
    { name: "Hoodie", category: "Apparel", price: 60, inventory: 100 },
    { name: "Potato", category: "Groceries", price: 600, inventory: 50 },
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

