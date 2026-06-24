import { useRef } from "react"
import './nav.css';
import { NavLink, useLocation } from "react-router-dom";


export default function Nav() {
    const liste_nav = useRef(null)
     const location = useLocation()

    const toogle_menu = () => {
        const item_nav = liste_nav.current.children;
        for (let i = 0; i < item_nav.length; i++) {
            item_nav[i].classList.toggle('active')
        }
    } 

  return (
    <header>

        <nav className="fixed w-full h-[50px] shadow-sm bg-white" style={{zIndex: "3"}}>

            <div className="container-logo mx-4 text-xl inline" style={{lineHeight:'50px'}}>
                <span className="icone mx-1">
                    <i className="fas fa-code"></i>
                </span>
                <span className="">Développeur web</span>
            </div>

            {/* Navigation */}
            <div className="container-navigation h-full float-right  max-md:float-none">

                <ul className="text-right max-md:bg-gray-50" ref={liste_nav}>
                    
                    <li className="inline-block mx-4 py-3">
                        <NavLink to="/" className={` ${location.pathname == '/' ? 'bg-blue-200 border-b-5 border-blue-500' : ''} p-[13px] duration-150 ease-in-out hover:bg-blue-200 hover:border-b-5 border-blue-500`}>
                            Accueil
                        </NavLink>
                    </li>

                    <li className="inline-block mx-4 py-3">
                        <NavLink to="/competences" className={` ${location.pathname == '/competences' ? 'bg-blue-200 border-b-5 border-blue-500' : ''} p-[13px] duration-150 ease-in-out hover:bg-blue-200 hover:border-b-5 border-blue-500`}>
                            Compétences
                        </NavLink>
                    </li>

                    <li className="inline-block mx-4 py-3">
                        <NavLink to='/projets' className={` ${location.pathname == '/projets' ? 'bg-blue-200 border-b-5 border-blue-500' : ''} p-[13px] duration-150 ease-in-out hover:bg-blue-200 hover:border-b-5 border-blue-500`}>
                            Mes projets
                        </NavLink>
                    </li>

                </ul>

            </div>


            {/* Menu bar (pour les petits ecrans) */}
            <div className="container-bars-menu hidden max-md:block">
                <span className="icone mx-1 cursor-pointer text-xl duration-150 ease-in-out hover:shadow-lg" onClick={toogle_menu}>
                    <i className="fas fa-bars"></i>
                </span>
            </div>

        </nav>
    </header>
  )
}
