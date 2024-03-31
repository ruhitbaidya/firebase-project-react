import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container mx-auto px-[20px]">
                <nav className="flex justify-between items-center py-[20px]">
                    <div>
                        <h2>Ruhit</h2>
                    </div>
                    <div className="space-x-[25px]">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/updateUser">UpdateUser</NavLink>
                    </div>
                    <div>
                        <button>Know More</button>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar
