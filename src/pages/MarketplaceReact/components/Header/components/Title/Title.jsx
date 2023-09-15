import { Link } from "react-router-dom"
import { Routes } from "../../../../../../router/routes"

import "./style.scss"

export const Title = () => {
    return (
        <div>
            <Link to={Routes.Main}>
                Барахолка
            </Link>
        </div>
    )
}