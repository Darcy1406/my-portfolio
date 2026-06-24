import React from 'react'
import Projet from '../../components/projet/Projet'

export default function Projets() {
  return (
    <div id='projets' className='w-1/2 min-w-[320px] mx-auto p-2'>
        <p className='text-center my-2 font-semibold italic text-3xl'>Mes projets</p>

        <p className='text-gray-500'>
          Il sera presente dans cette section les projets dont j'ai ete l'auteur (realisateur/developpeur) : 
        </p>


        <div className='container-projet my-4 flex gap-4 items-center justify-center flex-wrap'>

          <Projet 
            titre_projet="Plateforme d'analyse des données comptables et ciblé des comptes" 
            description_projet="Application permettant de detecter les anomalies existants des pieces justificatives de divers postes comptables"
            etablissement="DBIFA, Antananarivo"
            type_projet="Professionnel"
            technologies={['React.js', 'Django', 'PostgreSQL']}
          />

        </div>

    </div>
  )
}
