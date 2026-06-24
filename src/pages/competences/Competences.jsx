import React from 'react'
import './competences.css';

export default function Competences() {
  return (
    <section id='comptences' className=''>

      <div className='container-title relative'>

        <div className='fond'></div>

        <div className='text-white container-description'>

          <p className='text-4xl italic my-2'>MILAMANA Darcy</p>
          <p className='text-4xl italic my-2'>Mes compétences</p>

        </div>

      </div>

      <div className='container-competences mx-auto w-[75%] my-6 rounded-lg flex justify-center'>

        {/* A propos */}
        <div className='w-1/3 bg-gray-100 py-4 px-2'>

          <div className='w-[150px] h-[150px] mr-4 float-left' style={{borderRadius: '9999px', shapeOutside: 'circle()', overflow: 'hidden'}}>
            <img src="./images/Darcy.png" alt="" className='w-full mt-[-35px]'/>
          </div>

          <p className=''>Je m'appelle MILAMANA Darcy, je suis un étudiant de l'ecole Nationale d'informatique de Fianarantsoa à Madagascar. Actuellement, je suis au niveau <span className='font-bold'>Master 1</span>. Au cours de ces années, j'ai acquis des expériences dans le domaine de developpement web, à travers quelques langage de programmation. Je souhaite m'épanouir pleinement dans se secteur et je veux m'ouvrir vers le <span className='font-bold'>"freelance"</span>. Je n'ai aucune expérience dans cette partie du développement web et du travail en ligne mais je n'ai pas peur d'essayer et de pércer dedans. </p>

        </div>

        {/* Competences */}
        <div className='flex-1'>

          <p className='text-center font-semibold text-2xl'>Mes compétences</p>

          <div className='flex-1 h-full flex justify-center gap-6 p-4'>
            
            <div className='container-langage-programmation flex-1'>

              {/* PHP */}
              <div className='my-2'>

                <span className='italic'>PHP</span>

                <div className='flex justify-center items-center gap-2'>
                  
                  <div className='w-full h-[15px] bg-gray-100 rounded-sm'>
                    <div className='w-[80%] h-full bg-blue-500 rounded-sm'></div>
                  </div>

                  <div>
                    80%
                  </div>
                </div>

              </div>

              {/* Python */}
              <div className='my-2'>
                <span className='italic'>Python</span>
                <div className='flex justify-center items-center gap-2'>

                  <div className='flex-1 w-full h-[15px] bg-gray-100 rounded-sm'>
                    <div className='w-[70%] h-full bg-blue-500 rounded-sm'></div>
                  </div>
                  <div>
                    70%
                  </div>

                </div>
              </div>

              {/* JavaScript */}
              <div className='my-2'>
                <span className='italic'>JavaScript</span>
                <div className='flex justify-center items-center gap-2'>

                  <div className=' flex-1 w-full h-[15px] bg-gray-100 rounded-sm'>
                    <div className='w-[50%] h-full bg-blue-500 rounded-sm'></div>
                  </div>

                  <div>
                    50%
                  </div>

                </div>
              </div>

            </div>

            {/* Framework */}
            <div className='flex-1 container-framework'>
              
              {/* PHP */}
              <div className='my-2'>

                <span className='italic'>SYMFONY</span>

                <div className='flex justify-center items-center gap-2'>
                  
                  <div className='w-full h-[15px] bg-gray-100 rounded-sm'>
                    <div className='w-[35%] h-full bg-green-500 rounded-sm'></div>
                  </div>

                  <div>
                    35%
                  </div>
                </div>

              </div>

              {/* Django */}
              <div className='my-2'>
                <span className='italic'>Django</span>
                <div className='flex justify-center items-center gap-2'>

                  <div className='flex-1 w-full h-[15px] bg-gray-100 rounded-sm'>
                    <div className='w-[60%] h-full bg-green-500 rounded-sm'></div>
                  </div>
                  <div>
                    60%
                  </div>

                </div>
              </div>

              {/* React.js */}
              <div className='my-2'>
                
                <span className='italic'>React.js</span>
                <div className='flex justify-center items-center gap-2'>

                  <div className=' flex-1 w-full h-[15px] bg-gray-100 rounded-sm'>
                    <div className='w-[70%] h-full bg-green-500 rounded-sm'></div>
                  </div>

                  <div>
                    70%
                  </div>

                </div>

              </div>

              {/* React Native */}
              <div className='my-2'>

                <span className='italic'>React Native</span>
                <div className='flex justify-center items-center gap-2'>

                  <div className=' flex-1 w-full h-[15px] bg-gray-100 rounded-sm'>
                    <div className='w-[40%] h-full bg-green-500 rounded-sm'></div>
                  </div>

                  <div>
                    40%
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>


    </section>
  )
}
