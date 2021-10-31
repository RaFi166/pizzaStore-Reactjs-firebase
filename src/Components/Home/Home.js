import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    return (
        <>
            {/* hero */}
            <div className=" container mx-auto flex items-center justify-between py-10">
                <div className="w-1/2 ml-10" >
                    <p className="italic">Are You Hungry?</p>
                    <h1 className="text-3xl  font-bold">Don't Wait !</h1>
                    <Link to="/home">
                        <button className="bg-yellow-500 my-3 hover:bg-yellow-800 text-white font-bold p-2 rounded-full">Order Now</button>
                    </Link>
                </div>

                <div className="w-1/2">
                    <img className="pl-10 w-3/4" src="/images/pizza.png" alt="" />
                </div>
            </div>

            {/* products */}
            <div className="container mx-auto pt-10 pb-20 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
                {
                    products.map(product => <Products 
                        key= {product.name}
                        productdata= {product}
                         ></Products>)
                }
            </div>

        </>
    )

}

export default Home
