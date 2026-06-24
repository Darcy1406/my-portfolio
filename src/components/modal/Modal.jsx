import React, { useEffect, useRef } from 'react'
import './modal.css'

export default function Modal({isVisible, title, children}) {

    const ref_modal = useRef(null)

    const show_modal = () => {
        ref_modal.current.classList.add('show');
    }

    useEffect(() => {
        if(isVisible){
            show_modal();
        }
    }, [isVisible])

  return (
    <div className='bg-green-200 modal' ref={ref_modal}>
        <div className='w-4/5 mx-auto my-2 p-4 bg-white rounded-xs'>
            <p className='text-center text-lg'>
                { title }
            </p>
        </div>

        <div className='w-full bg-white flex items-center justify-center gap-4 flex-wrap'>
            {
                children
            }
        </div>

    </div>
  )
}
