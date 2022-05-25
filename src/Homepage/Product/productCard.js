import React from 'react';
import './product.css'
import {useCart} from "react-use-cart";
import { Link } from "react-router-dom";

function ProductCard (props) {
    const { addItem } = useCart();
    const {img,name,price,line,discription}=props.item;
    
    return (
        <div>
            <div id='product-main' className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <img id='product-img' src={img} alt=""/>

                    </div>
                    <div id='pr-row-2' className="col-9">
                        <div  className="row">
                            <div className="col-7 ">
                                <p id='product-p1'>
                                    {name}
                                </p>
                            </div>
                            <div className="col-5">
                                <p id='product-p2'>{price}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p id='product-p3'>{line}
                                </p>
                                <p id='product-p4'>
                                {discription}

                                </p>
                                <Link to="/cart"><button id='product-button'onClick={() => addItem(props.item)}>BUY NOW</button></Link>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default ProductCard;