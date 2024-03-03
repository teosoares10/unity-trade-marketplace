import { Link } from "react-router-dom";
import { Header, Icons, Logo, NavigationBar } from "./nav-bar.styles";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
    return (
        <Header>
            <Logo>Logo</Logo>

            <NavigationBar>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/contactUs">Contact Us</Link>
                </li>
            </NavigationBar>

            <Icons>
                <Link to="/login">
                    <User />
                </Link>
                <ShoppingCart />
                <Search />
            </Icons>
        </Header>
    )
}