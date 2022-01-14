import React from "react";

const Product = ({
  name,
  productId,
  brandName,
  category,
  companyAssured,
  rating,
  price,
  discount,
  imageURL,
  sellerName,
  isNewProduct,
}) => {
    let count = 1;

    const addToCart = () => {
        console.log(name, productId)
        if (localStorage.getItem(name)) {
            // console.log(JSON.parse(localStorage.getItem(name)).count)
            count =JSON.parse(localStorage.getItem(name)).count
            count++
        }
    localStorage.setItem(name, JSON.stringify({
        name:name,
        productId:productId,
        brandName:brandName,
        category:category,
        companyAssured:companyAssured,
        rating:rating,
        price:price,
        discount:discount,
        imageURL:imageURL,
        sellerName:sellerName,
        isNewProduct: isNewProduct,
        count:count,
    }))
}
    
  return (
    <div className='mx-3' style={{}} >
      <div class="card" style={{width: '18rem',height:'300px'}}>
        <img class="card-img-top" src={imageURL} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{brandName}</p>
          <p class="card-text">{price}</p>

          <a href="#" class="btn btn-primary" onClick={() => {
              addToCart()
          }} >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;
