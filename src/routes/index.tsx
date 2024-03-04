import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-page";
import HomePage from "./home-page";
import AboutPage from "./about-page";
import ShopPage from "./shop-page";
import BlogPage from "./blog-page";
import ContactPage from "./contact-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/shop",
                element: <ShopPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/blog",
                element: <BlogPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    }
])