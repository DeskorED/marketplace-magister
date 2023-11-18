import { Link } from "react-router-dom"
import { routes } from "../../../../../../router/routes"

import "./style.scss"

export const Title = () => {
    return (
        <div className="title">
            <Link to={routes.Main}>
                Барахолка
            </Link>
        </div>
    )
}