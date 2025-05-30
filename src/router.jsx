import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Inicio from "./Views/Inicio";
import Materias from "./Views/Materias";
import Personal from "./Views/Personal";
import Inscripcion from "./Views/Inscripcion";
import MateriaDocente from "./components/MateriaDocente";
import Login from "./Views/Login";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./Views/Register";
import Integrantes from "./Views/Integrantes";



const router = createBrowserRouter([
    {
        path : "/", 
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Inicio/>
            },
            {
                path: '/materias',
                element: <Materias/>
            },
            {
                path : '/area-personal',
                element : <Personal/>
            },
            {
                path : '/inscripcion-en-linea',
                element : <Inscripcion/>
            },
            {
                path : '/materia/:id',
                element : <MateriaDocente/>
            },
            {
                path :'/integrantes',
                element : <Integrantes/>
            }

        ]
    },
    {
        path : '/auth',
        element : <AuthLayout/>,
        children : [
            {
                index : true,
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            }
        ]
    }
])

export default router;