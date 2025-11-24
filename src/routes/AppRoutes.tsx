import { useRoutes } from "react-router-dom";
import Login from "@/pages/auth/Login";
import ClientDashboard from "@/pages/client/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export function AppRoutes() {
    const routes = useRoutes([

        // NO LOGIN ROUTES HERE
        { path: "/", element: <><h1>goto the <a href="/login">localhost:5173/login </a></h1></> },
        { path: "/login", element: <Login /> },



        // NEED LOGIN ROUTES HERE
        {
            path: "/dashboard",
            element: (
                <ProtectedRoute>
                    <ClientDashboard />
                </ProtectedRoute>
            )
        }
    ]);

    return routes;
}

export default AppRoutes;