import React from "react";

export default function Cart() {
  const items = { ...localStorage };
  console.log("cartitems", items.toArray);
  const propertyNames = Object.keys(items);
  console.log(propertyNames);
  let cartItems = [];
  let cartItemsCount = [];
  propertyNames.map((item) => {
    cartItems.push(JSON.parse(localStorage.getItem(item)));
    cartItemsCount.push(JSON.parse(localStorage.getItem(item)).count);
  });
  cartItemsCount = cartItemsCount.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log(cartItems, cartItemsCount);

    return <div style={{display: 'flex', flexDirection: 'row'}}>{"Total items in cart :" + cartItemsCount}
    
        {cartItems.map(item =>
            <div className='mx-3' style={{}} >
                <br/>
        <div class="card" style={{width: '18rem',height:'300px'}}>
          <img class="card-img-top" src={item.imageURL} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">{item.brandName}</p>
            <p class="card-text">{item.price}</p>
  
            <a href="#" class="btn btn-primary" >
          {'Count :'+item.count}
            </a>
          </div>
        </div>
      </div>)}
    
    </div>;
}
