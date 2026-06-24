import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import Modal from './components/modal/Modal'
import Nav from './components/nav/Nav'
import Accueil from './components/accueil/Accueil'
import Projet from './components/projet/Projet'
import Fic from './components/testTailwind/Fic'
import CompetenceItem from './components/competence_item/CompetenceItem'
import ParcoursItem from './components/parcours_item/ParcoursItem'
import RealisationItem from './components/realisation_item/RealisationItem'
import './assets/css/output.css'
import './assets/fontawesome/css/all.min.css'

function App() {




  return (
    <>
      <section id='portfolio' className='App min-h-screen text-[#DBE9FB]' style={{backgroundColor: '#051525'}}>

        {/* Partie 1 */}
        <div className='bloc-accueil flex items-center justify-center gap-4 flex-wrap h-screen'>

            {/* Description */}
            <div className='bloc-description px-4 w-[50%]'>

                <div>
                    <h1 className='text-5xl max-xl:text-4xl'>Concevoir l'avenir des <strong style={{color: "#00D4FF"}}>architectures évolutives.</strong></h1>

                    <p className='my-2 max-sm:text-lg w-[]'>
                      Je m'appelle MILAMANA Darcy. Je me spécialise dans la construction de systèmes distribués haute performance et d'interfaces frontend immersives alliant précision technique et créativité.
                    </p>

                    <div className='container-btn inline-block my-4'>
                      <button className='mr-4 uppercase py-2 px-4 rounded-sm cursor-pointer' style={{background: "#00D4FF"}}>
                        Explorer mes projets
                        <span className="icon mx-2">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </button>
                      <button className='ml-4 uppercase py-2 px-4 rounded-sm cursor-pointer' style={{color: '#00D4FF', border: '1px solid #00D4FF'}}>
                        Voir mes compétences
                      </button>
                    </div>

                    {/* <p className='text-xl my-2 max-sm:text-lg'>Je suis un développeur web <span className='underline text-blue-500 font-semibold'>fullstack.</span></p>

                    <p className='text-xl w-[90%] min-w-[310px] max-sm:text-lg'>Grâce à <span className='font-bold'>React.js</span>, je peux créer des interfaces utilisateurs propres et intuitives. Puis les donner vie à l'aide de <span className='font-bold'>Django</span>, en arrière plan.</p> */}
                </div>

              
            </div>

            {/* Image */}
            <div className='container-img w-1/3 ml-2 min-w-[400px] flex items-center justify-center relative'>

                <div className='box-img w-[400px] h-[400px] bg-green-200' style={{border: "4px solid #00D4FF", overflow: 'hidden', borderRadius: '9999px'}}>

                    <img src="./images/Photo.png" alt="Photo d'identité" style={{width: '100%', marginTop: '-50px'}}/>


                </div>

                <span className='icon text-5xl bg-blue-500 p-4 text-white' style={{background: "#00D4FF", zIndex:2, position: 'absolute', bottom: '0', right: '20%', borderRadius: '9999px'}}>
                    <i className="fas fa-briefcase"></i>
                </span>
            </div>

        </div>

        {/* Partie 2 */}
        <div className='w-[80%] min-w-[310px] mx-auto pb-6'>
          {/* Compétences */}
          <div id="competences">
            <h3 className='text-2xl my-4'>
              <span className='icon mx-2' style={{color: '#00D4FF'}}>
                <i className="fas fa-terminal"></i>
              </span>
              Arsenal Technique
            </h3>

            <div className='flex gap-6 flex-wrap justify-center'>

                <div className='p-4 w-[300px] rounded-sm' style={{background: '#142333'}}>
                  {/* Titre */}
                  <div className='flex items-center'>
                    <p className='uppercase text-sm flex-1'>Architecture fronted</p>
                    <span className='icon'>
                      <i className="fas fa-sitemap"></i>
                    </span>
                  </div>
                  
                  <CompetenceItem name={'React'} score={90} width={'w-[90%]'}/>
                  <CompetenceItem name={'Tailwind CSS'} score={45} width={'w-[45%]'}/>
                  <CompetenceItem name={'TypeScript'} score={25} width={'w-[25%]'}/>
                  <CompetenceItem name={'JavaScript'} score={55} width={'w-[55%]'}/>
                    
                </div>
                {/* Backend */}
                <div className='p-4 w-[300px]' style={{background: '#142333'}}>
                  {/* Titre */}
                  <div className='flex items-center'>
                    <p className='uppercase text-sm flex-1'>BACKEND</p>
                    <span className='icon'>
                      <i className="fas fa-sitemap"></i>
                    </span>
                  </div>
                  
                  <CompetenceItem name={'Python'} score={75} width={'w-[75%]'}/>
                  <CompetenceItem name={'Django'} score={85} width={'w-[85%]'}/>
                  <CompetenceItem name={'PHP'} score={80} width={'w-[80%]'}/>
                  <CompetenceItem name={'Symfony'} score={30} width={'w-[30%]'}/>
                    

                </div>
                  {/* Base de données */}
                <div className='p-4 w-[300px]' style={{background: '#142333'}}>
                  {/* Titre */}
                  <div className='flex items-center'>
                    <p className='uppercase text-sm flex-1'>Base de données</p>
                    <span className='icon'>
                      <i className="fas fa-sitemap"></i>
                    </span>
                  </div>
                  
                  <CompetenceItem name={'MySQL'} score={85} width={'w-[85%]'}/>
                  <CompetenceItem name={'PostgreSQL'} score={80} width={'w-[80%]'}/>
                  <CompetenceItem name={'Mongo DB'} score={40} width={'w-[40%]'}/>
                  
                </div>

            </div>
          </div>

          {/* Parcours professionnel */}
          <div id='parcours' className='my-[40px]'>
              <h3 className='text-2xl my-4'>
                <span className="icon mx-2" style={{color: '#00D4FF'}}>
                  <i className="fas fa-briefcase"></i>
                </span>
                Parcours professionnel
              </h3>
              
              <ParcoursItem role={"Développeur Full Stack"} titre={"Plateforme d'analyse automatisée des données comptables et ciblé des comptes"} etablissement={"Direction de la Brigade d'Investigation Financière et de l'Audit"} duree={'15 Septembre 2025 - 15 Décembre 2025'} fonctionnalites={['Enregistrement des pièces justificatives rendus périodiquement', 'Détection des anomalies existant dans les pièces justificatives']}/>

              <ParcoursItem role={"Développeur Symfony"} duree={'22 Août 2024 - 19 Novembre 2024'} titre={"Plateforme d'inscription en ligne"} etablissement={"Centre d’Orientation du Système et Technologie Moderne"} fonctionnalites={["Présente l'historique du centre et ses formations", "Equiper d'une formulaire d'inscription pour les étudiants", "Fournit une espance administrateur pour gérer les inscriptions"]}/>
          </div>

          {/* Réalisations */}
          <div className='my-[40px]'>
            <h3 className='text-2xl my-4'>
              <span className="icon mx-2 text-[#00D4FF]">
                <i className="fab fa-creative-commons-sampling-plus"></i>
              </span>
              Réalisations
            </h3>
            
            <div className="flex flex-wrap gap-4">

              <RealisationItem 
                src_img={"./images/gestion-affectation.png"} 
                title={"Affectations des employés"} 
                description={"Traitement de données des employés"}
                texte={"Un moteur de traitement d'affectation à faible latence capable de gérer des milliers de données sans aucun problème."} 
                link={"https://github.com/Darcy1406/gestion-affectation-employe.git"} 
                technologies={["PHP", "MySQL"]}
              />

              <RealisationItem 
                src_img={"./images/assignment.png"} 
                title={"Problème d'affectation"} 
                description={"Algorithme Hongroise"}
                texte={"Capable de résoudre les problèmes d'affectations en une fraction de seconde en minimisant ou maximisant les coûts."} 
                link={"https://github.com/Darcy1406/affectation.git"} 
                technologies={["React"]}
              />
            
            </div>

          </div>

          <section id='contact' className='my-[80px] flex flex-wrap gap-4 py-10 px-[50px] bg-[#142131] rounded-sm shadow-lg border border-[#2E3A49]'>

            <div className='flex-1'>
              <h3 className='text-2xl font-semibold'>Collaborons ensemble.</h3>
              <p className='w-[300px] my-4'>
                  Prêt à concevoir la prochaine génération d'infrastructure numérique ? Envoyez-moi un message ou retrouvez-moi sur les réseaux sociaux.
              </p>
            </div>

            <div className='w-[55%]'>
                <p className='uppercase text-xl text-[#A2E0F7]'>Réseaux & connexions</p>
                <div className='flex flex-wrap gap-4 my-6'>

                  <div className='w-[290px] p-4 flex gap-4 items-center border border-[#2E3A49] rounded-md'>
                      <span className='icon border border-[#2E3A49] p-3 rounded-sm'>
                        <i className="fas fa-at"></i>
                      </span>
                      <div>
                        <label className='font-semibold'>Email</label>
                        <p>darcyfranklin14@gmail.com</p>
                      </div>
                  </div>

                  <div className='w-[290px] p-4 flex gap-4 items-center border border-[#2E3A49] rounded-md'>
                      <span className='icon border border-[#2E3A49] p-3 rounded-sm'>
                        <i className="fab fa-whatsapp"></i>
                      </span>
                      <div>
                        <label className='font-semibold'>WhatsApp</label>
                        <p>+261 34 51 141 93</p>
                      </div>
                  </div>

                  <div className='w-[290px] p-4 flex gap-4 items-center border border-[#2E3A49] rounded-md'>
                      <span className='icon border border-[#2E3A49] p-3 rounded-sm'>
                        <i className="fab fa-github"></i>
                      </span>
                      <div>
                        <label className='font-semibold'>GitHub</label>
                        <p>github.com/Darcy1406</p>
                      </div>
                  </div>

                  <div className='w-[290px] p-4 flex gap-4 items-center border border-[#2E3A49] rounded-md'>
                      <span className='icon border border-[#2E3A49] p-3 rounded-sm'>
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <div>
                        <label className='font-semibold'>LinkedIn</label>
                        <p>linkedin.com/in/darcy-milamana-98586335a</p>
                      </div>
                  </div>

                  <div className='w-[290px] p-4 flex gap-4 items-center border border-[#2E3A49] rounded-md'>
                      <span className='icon border border-[#2E3A49] p-3 rounded-sm'>
                        <i className="fab fa-facebook"></i>
                      </span>
                      <div>
                        <label className='font-semibold'>Facebook</label>
                        <p>Darcy Milamana</p>
                      </div>
                  </div>

                </div>
            </div>

          </section>

        </div>


      </section>
    </>
  )

}

export default App
