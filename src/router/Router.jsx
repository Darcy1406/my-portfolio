import { createBrowserRouter } from "react-router-dom"
import Base from "../Base.jsx"
import Accueil from "../components/accueil/Accueil.jsx"
import Competences from "../pages/competences/Competences.jsx"
import Projets from "../pages/projets/Projets.jsx"



export const router = createBrowserRouter([

    {
        path: '/',
        element: <Base />,
        children: [
            {
                path: '',
                element: <Accueil />
            },
            {
                path: 'competences',
                element: <Competences />
            },
            {
                path: 'projets',
                element: <Projets />
            },
        ]
        
    }
])