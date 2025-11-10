import { createBrowserRouter } from "react-router-dom";
import { Home } from "../paginas/Home";
import { PostDetails } from "../paginas/PostDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/post/:id",
        element: <PostDetails />,
    }
]);