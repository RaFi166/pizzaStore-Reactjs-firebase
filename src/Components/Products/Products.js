import React from 'react'
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { _id, name, price, size, image } = props.productdata;
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
                <Link to="">
                    <button style={{ borderRadius: "10px" }} className="bg-yellow-500 px-2 text-white font-medium">
                        Add
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Products
