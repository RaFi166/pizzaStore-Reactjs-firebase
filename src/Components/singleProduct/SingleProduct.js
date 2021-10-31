import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    let { _id } = useParams();
    const history = useHistory();
    const URL = `/api/products/${_id}`;

    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, []);


    return (
        <div>
            <div className=" sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ml-10 mt-10">
            <button className="font-medium text-2xl mb-3 cursor-pointer hover:text-yellow-500	" onClick={()=> history.goBack()}>Go Back </button>
                <div>
                    <img src={singleProduct.image} alt="" />
                    <p className="ml-12">{singleProduct.name}</p>
                    <span className="ml-20">{singleProduct.size}</span>
                </div>

                <div className="flex ">
                    <p className="mr-20">{singleProduct.price}Taka</p>
                    <Link to="/">
                        <button style={{ borderRadius: "10px" }} className="bg-yellow-500 px-2 ml-16 text-white font-medium">
                            Add
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SingleProduct
