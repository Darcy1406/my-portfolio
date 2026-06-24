import React from 'react'

export default function RealisationItem({src_img, title, description, texte, technologies, link}) {
  return (
    <div className='min-w-[300px] w-[30%] bg-[#142131] pb-6 rounded-sm' style={{clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 100%)"}}>

        <div className="container-img w-full bg-gray-100 rounded-sm">
        <img src={src_img} alt="" className='rounded-sm grayscale'/>
        </div>

        <div className='container-description px-6 py-4'>

            <div className='flex flex-wrap items-center'>
            <div className='flex-1'>
                <p className='text-lg font-semibold'>{title}</p>
            </div>

            <div className=''>
                <a href={link} target='_blank' className='text-sm underline duration-150 ease-in-out hover:text-[#00D4FF]'>
                <span className="icon mx-1 text-lg">
                    <i className="far fa-eye"></i>
                </span>
                </a>
            </div>
            </div>

            <span className='block text-xs text-gray-100 italic'>{description}</span>
            <p className='text-sm my-2'>
                {texte}
            </p>

            <div className='flex gap-4 my-4'>
                {
                    technologies.length > 0 && technologies.map((tech, index) => (
                        <div key={index} className='bg-[#273647] text-[#00D4FF] p-2 rounded-sm text-sm'>
                            {tech}
                        </div>
                    )
                )}
            </div>
        </div>
    </div>
    
  )
}
