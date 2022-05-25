import React, { Component } from 'react'
import {ProductList} from './productList'
import ProductCard from './productCard'


class ProductState extends Component {
    
    constructor() {
        super();
        this.state={ 
        info: ProductList(),
       
     } }
    
     
    render() { 
        return (
            <div>
                {
                this.state.info.map((data,index)=> <ProductCard item={data} key ={index} />)
                
                }
               

            </div>
        );
    }
}
 
export default ProductState;