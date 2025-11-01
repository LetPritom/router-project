import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";



const router = createBrowserRouter ([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        hydrateFallbackElement:<p>Loading...</p>,
        children: [
            {index: true,
            element: <Home></Home>
        },
            {path:'/apps',
            element: <Apps></Apps>
        },
            {path:'/installation',
            element: <Install></Install>
        },
        ]
    },
]);

export default router;