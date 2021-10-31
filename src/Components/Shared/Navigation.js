import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav className="container mx-auto flex items-center justify-between">
                <img className="my-2" src="/images/logo.png" alt="logo" />

                <ul className="flex items-center">
                    <li className="hover:text-yellow-700"> <Link to="/home">Home</Link> </li>
                    <li className="ml-6 hover:text-yellow-700"> <Link to="/products">Products</Link> </li>

                    <div style={{ borderRadius: "25px", backgroundColor: '#F59E0D', padding: "5px" }} className="ml-6 flex items-center">
                        <Link to="/cart">
                            <span>10</span>
                        </Link>
                        <img className="ml-2" src="/images/cart.png" alt="" />
                    </div>

                </ul>
            </nav>
        </div>
    )
}

export default Navigation
