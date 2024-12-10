import {createBrowserRouter} from "react-router-dom";
import {SpaceDetail, SpaceList} from "./components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SpaceList />
    },
    {
        path: "/space/:id",
        element: <SpaceDetail />
    }
])

export default router