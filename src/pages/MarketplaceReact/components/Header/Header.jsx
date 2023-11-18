import { Menu } from "./components/Menu"
import { Search } from "./components/Search"
import { Title } from "./components/Title"

import "./style.scss"

export const Header = () => {
    return(
        <div className="header">
            <Title />
            <Search/>
            <Menu />
        </div>
    )
}