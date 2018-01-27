import React, {Component} from 'react';

class Products extends Component{

    populateProduct(product){
    return <li key={product.toString()}>{product}</li>;
    }

    populateList(products){
        // return products.map((product) => <li key={product.toString()}>{product}</li>);
        return products.map((product) => this.populateProduct(product));
        
    }

    render(){

        const products = ["Learning React","Pro React","Beginning React","Angular"];

        const listProducts = this.populateList(products);
        return(
            <div>
                <h2>
                    Products
                </h2>
                <ul>
                    {listProducts}
                </ul>
            </div>
        );
    }
}

export default Products;