import { Menus } from "./components/Menus"
import { Search } from "./components/Search"
import { Title } from "./components/Title"

import "./style.scss"

export const Header = () => {
    return(
        <div className="header">
            <Title />
            <Search/>
            <Menus />
        </div>
    )
}