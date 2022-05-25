import React, { Component } from 'react'
import {ProductList} from './productList'
import ProductCard from './productCard'
import Navbars from '../../Header/navbar';
import Footer from '../../Footer/footer';

class SHOP extends Component {
    state = { 
        info: ProductList(),
     } 
    render() { 
        return (
            <div>
                <Navbars/>
                {
                this.state.info.map(data=> <ProductCard item={data}/>)
                }
                <Footer/>
            </div>
        );
    }
}
 
export default SHOP;