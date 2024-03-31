import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto px-[20px]">
            <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Root
