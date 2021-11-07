import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Products = (props) => {

    const { _id, name, price, size, image } = props.productdata;
    const { cart,setCart } = useContext(CartContext);

    const addtoCart = (e, productdata) => {
        e.preventDefault();
        console.log(productdata);
        let _cartData = {...cart}

        if (!_cartData.items){
            _cartData.items = {}
        }
        if(_cartData.items[_id]){
            _cartData.items[_id] += 1;
        }
        else{
            _cartData.items[_id] = 1
        } 

        if(!_cartData.totalItems){
            _cartData.totalItems= 0
        }
        _cartData.totalItems += 1;

        setCart(_cartData);
        }


    return (
        <div className="ml-10 mt-10">
            <div>
                <Link to={`/products/${_id}`}>
                    <img src={image} alt="" />
                </Link>
                <p className="ml-12">{name}</p>
                <span className="ml-20">{size}</span>
            </div>

            <div className="flex justify-between">
                <p>{price}Taka</p>
                <Link to={`/products/${_id}`}>
                    <button onClick={(e) => { addtoCart(e, props.productdata) }} style={{ borderRadius: "10px" }} className="bg-yellow-500 px-2 text-white font-medium">
                        Add
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Products
