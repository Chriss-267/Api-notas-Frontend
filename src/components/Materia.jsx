import React from 'react'

function Materia({materia}) {
  return (
    <div>
        <section className='rounded-lg shadow-lg w-[20vw]'>
                    <img 
                    src={`${import.meta.env.VITE_API_URL}/storage/${materia.imagen}`}
                    alt={`${import.meta.env.VITE_API_URL}${materia.imagen}`}
                     className='w-full object-cover h-60'/>
                    <div className='p-4 text-left'>
                    
                
                        <p className='text-xl text-slate-800'>{materia.name}</p>
                        <p className='text-gray-700 text-sm'>{materia.description}</p>
                        <p className='text-gray-500 text-sm'>{materia.teacher.name}</p>
                        <p className='py-2 px-3 rounded-lg bg-orange-100 text-amber-900 text-sm mt-2'>Ingeniería en Sistemas <br /> y computación</p>
                    </div>
        </section>
    </div>
  )
}

export default Materia