import { Link } from "react-router-dom";
import { Wrapper, Icons, Logo, NavigationBar } from "./nav-bar.styles";
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
    return (
        <Wrapper>
            <Logo>Unity Trade</Logo>

            <NavigationBar>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </NavigationBar>

            <Icons>
                <Link to="/login">
                    <User />
                </Link>
                <ShoppingCart />
                <Search />
            </Icons>
        </Wrapper>
    )
}