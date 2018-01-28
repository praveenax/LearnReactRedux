import React, {Component} from 'react';

import Product from './component/Product';

class Products extends Component{

    products;

    constructor(props){
        super(props);
        this.products = this.getProducts();
    }

    populateProduct(product){
    // return <li key={product.toString()}>{product}</li>;
    return <Product key={product.productName} data={product} />;
    
    }

    populateList(products){
        // return products.map((product) => <li key={product.toString()}>{product}</li>);
        return products.map((product) => this.populateProduct(product));
        
    }

    getProducts(){
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 5,
                numOfReviews: 2
            }, {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 4",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 5",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 6",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
                rating: 5,
                numOfReviews: 2
            }];
    }

    render(){

        // const products = ["Learning React","Pro React","Beginning React","Angular"];

        const listProducts = this.populateList(this.products);
        // const listProducts = [];
        
        return(
            <div>
                <h2>
                    Products
                </h2>

                { listProducts.length > 0 && 
                <ul style={divStyle} >
                    {listProducts}
                </ul>
                }

                {listProducts.length === 0 &&
                    <ul style={divStyle} >
                       <h3> No Products to display! </h3>
                    </ul>
                }

            </div>
        );
    }
}

export default Products;

var divStyle = {
    width:'100%',
    margin:'auto'
}