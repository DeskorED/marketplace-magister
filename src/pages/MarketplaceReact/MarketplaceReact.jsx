import {createContext, useEffect, useState} from "react";
import {Outlet} from "react-router-dom"

import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {ShoppingCart} from "./components/ShoppingCart";

import {sendRequest} from "../../services/sendRequest";

import "./style.scss"

export let MarketplaceContext = createContext({});

export const MarketplaceReact = () => {
    const [response, setResponse] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);

    const getResponse = () => {
        sendRequest(setResponse)
    }

    let providedValue = {
        response: response,
        shoppingCart: {
            get() {
                return shoppingCart;
            },
            set(newShoppingCart) {
                setShoppingCart(newShoppingCart)
            }
        }
    }

    useEffect(() => getResponse(), [])

    return (
        <div className="marketplace-page">
            <MarketplaceContext.Provider value={providedValue}>
                <Header/>
                <Outlet/>
                <div className="shopping-card">
                    <ShoppingCart/>
                </div>
            </MarketplaceContext.Provider>
        </div>
    )
}