import { Children } from "react"
import StylesNavBar from "./StylesNavBar.module.css"

// I want to create a generic function that allows me to fit in more headers in the future if i want to

function NavBar({ children }) {
    return (
        <nav className={StylesNavBar.navigation}>
            <a href="/" className={StylesNavBar.article}>{children}</a>
        </nav >
    )
}

export default NavBar