import React from "react";

function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img className="mr-10" width={40} height={40} src="/img/logo.png" alt="PNG: Sneakers"/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex align-center">
                <li className="d-flex mr-30 align-center">
                    <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="SVG:Cart"/>
                    <span>1205 руб.</span>
                </li>
                <li className="d-flex align-center">
                    <img width={18} height={18} src="/img/user.svg" alt="SVG:User"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;