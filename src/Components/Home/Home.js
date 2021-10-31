import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
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
    )
}

export default Home
