import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import Installation from "../Pages/Installation";
import Error from "../Pages/Error";
import SkeletonLoader from "../Components/SkeletonLoader";



const router = createBrowserRouter ([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        hydrateFallbackElement:<SkeletonLoader></SkeletonLoader>,
        children: [
            {index: true,
            element: <Home></Home>,
            loader:() => fetch('/appData.json')
        },
            {path:'/apps',
            element: <Apps></Apps>,
            loader:() => fetch('/appData.json')
        },
            {path:'/apps/:id',
            element: <Install></Install>,
            loader:() => fetch('/appData.json')
        },
            {path:'/Installation',
            element: <Installation></Installation>,
            loader:() => fetch('/appData.json')
        },
        
        ]
    },
]);

export default router;