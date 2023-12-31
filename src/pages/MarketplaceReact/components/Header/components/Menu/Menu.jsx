import {useContext, useState} from "react";
import { Link } from "react-router-dom"

import { routes } from "../../../../../../router/routes"
import {MarketplaceContext} from "../../../../MarketplaceReact";

import MenuIcon from '@mui/icons-material/Menu';

import "./style.scss"

export const Menu = () => {
    let categories = useContext(MarketplaceContext)["response"]["categories"];

    const [menuWrapped, setMenuWrapped] = useState(true);

    let tabListElement = document.querySelector(".tab-list");

    if (tabListElement) {
        if (menuWrapped) {
            tabListElement.style.transform = "scale(0.001, 0.001)";
        }
        else {
            tabListElement.style.transform = "scale(1, 1)";
        }
    }

    return (
        <div className='menu'>
            <div className="menu__wrapper"
                onClick={
                    () => setMenuWrapped(!menuWrapped)
                }
            >
                <MenuIcon fontSize='large' />
            </div>
            <div className="tab-list">
                <div className="main-button">
                    <Link to={routes.Main}>
                        Головна
                    </Link>
                </div>
                <hr />
                <div className="tab-list__additional-text">
                    Категорії:
                </div>
                {
                    categories?.map(
                        category => {
                            return (
                                <div key={category?.name} className="tab">
                                    <Link to={routes.CurrentCategory(category?.name)}>
                                        {
                                            category?.name
                                        }
                                    </Link>
                                </div>
                            )
                        }
                    )
                }

            </div>
        </div>
    )
}