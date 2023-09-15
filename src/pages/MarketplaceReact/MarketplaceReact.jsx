import { Outlet } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"


import "./style.scss"

export const MarketplaceReact = () => {
    return (
        <div className="market-place-page">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}