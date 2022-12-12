import { App } from "./App";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/wage',
        element: <App/>,
        errorElement: <div>Error</div>
    },
])