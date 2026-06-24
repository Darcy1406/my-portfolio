import { NavLink } from 'react-router-dom'
import './accueil.css'

export default function Accueil() {
  return (

    <section id='accueil'>

        <div className='bloc-accueil flex items-center justify-center gap-4 flex-wrap'>

            {/* Image */}
            <div className='container-img w-1/3 ml-2 min-w-[400px] flex items-center justify-center relative'>

                <div className='box-img w-[400px] h-[400px] bg-green-200 border-4 border-blue-500' style={{overflow: 'hidden', borderRadius: '9999px'}}>

                    <img src="./images/Photo.jpg" alt="Photo d'identité" style={{width: '100%', marginTop: '-50px'}}/>


                </div>

                <span className='icon text-5xl bg-blue-500 p-4 text-white' style={{zIndex:2, position: 'absolute', bottom: '0', right: '20%', borderRadius: '9999px'}}>
                    <i className="fas fa-briefcase"></i>
                </span>
            </div>

            {/* Description */}
            <div className='bloc-description px-4 flex-1 min-w-[650px] max-sm:min-w-[300px]'>

                <div>
                    <strong className='block italic text-5xl max-xl:text-4xl'>Bienvenue !</strong>

                    <p className='text-xl my-2 max-sm:text-lg'>Je m'appelle MILAMANA Darcy,</p>

                    <p className='text-xl my-2 max-sm:text-lg'>Je suis un développeur web <span className='underline text-blue-500 font-semibold'>fullstack.</span></p>

                    <p className='text-xl w-[90%] min-w-[310px] max-sm:text-lg'>Grâce à <span className='font-bold'>React.js</span>, je peux créer des interfaces utilisateurs propres et intuitives. Puis les donner vie à l'aide de <span className='font-bold'>Django</span>, en arrière plan.</p>
                </div>

                <div className='mt-4 flex gap-6 justify-center p-2'>

                    <NavLink to='/competences' className='text-center py-2 px-4 rounded-sm border-2 border-green-500 text-green-500 cursor-pointer duration-150 ease-in-out hover:bg-green-500 hover:text-white'>
                        Voir mes compétences
                    </NavLink>

                    <NavLink to='/projets' className='text-center py-2 px-4 rounded-sm border-2 border-black cursor-pointer duration-150 ease-in-out hover:bg-black hover:text-white'>
                        Voir mes réalisations
                    </NavLink>

                </div>
            </div>

        </div>

        {/* Infos contact */}
        <div className='bloc-contact my-2 mr-6 float-right'>
            <ul>

                <li className='my-2 text-lg'>
                    <span className='icone mx-2 text-xl'>
                        <i className="fab fa-facebook"></i>
                    </span>
                    Darcy Milamana
                </li>

                <li className='my-2 text-lg'>
                    <span className='icone mx-2 text-xl'>
                        <i className="fas fa-envelope"></i>
                    </span>
                    darcyfranklin14@gmail.com
                </li>

                <li className='my-2 text-lg'>
                    <span className='icone mx-2 text-xl'>
                        <i className="fab fa-whatsapp-square"></i>
                    </span>
                    +261345114193
                </li>

            </ul>
        </div>

    </section>

  )
}
