import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NotasContext } from '../Context/NotasContext'


function DetalleMateria({materia, closeModal}) {

    const { user, getUser, setUser} = useContext(NotasContext)

      useEffect(() =>{
          getUser();
      }, [])

  return (
    <div className='bg-white'>
        <div className="flex justify-end items-center">
          <button className="cursor-pointer"
          onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      <div className="md:flex max-w-screen-xl gap-6 p-3">
      
      <div className="md:w-2/3">
        <img
          src={`${import.meta.env.VITE_API_URL}/storage/${materia.imagen}`}
          alt={`Imagen materia`}
          className="w-xl h-70 object-cover rounded border border-gray-300"
        />

        {/* <div className="flex flex-wrap gap-2 mt-3">
          {project.useTec.map(tec => (
            <p key={tec} className={`py-1 px-2 ${theme ? "border-indigo-500 text-indigo-500 " : "border-amber-600 text-amber-600"}  border rounded-lg lowercase`}>{tec}</p>
          ))}
        </div> */}

    <div>   
        <div className='flex gap-2 my-3'>
        <p className='w-15 h-15 bg-gray-300 flex items-center justify-center'>{materia.name?.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</p>
        <h1 className="text-3xl font-bold  mt-4">{materia.name}</h1>
        </div>
           

            <p className="font-semibold">Descripción de la materia</p>
            <p className="text-sm text-gray-600 mt-2">{materia.description}</p>
            <p className="font-semibold">Docente encargado</p>
            <p className="text-sm text-gray-500 mt-2">{materia.teacher.name}</p>
      </div>
      </div>

      
     

        
      <div className="md:w-1/2 space-y-2">
        
        <div className='flex items-center gap-4'>
            <h1 className="text-2xl font-bold  mt-4">Miembros</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>

        </div>
        

        <div className='flex gap-2 items-center mb-2 border-b-2 border-b-gray-300  justify-between'>
                <div className='flex gap-2 items-center uppercase mb-2  p-2'>
                <p className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>{materia.teacher.name?.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</p>
                <p>{materia.teacher.name}</p>
                </div>

                <p>Propietario</p>
                  
        </div>
        {materia.users.map((alumno) => (
              <div className='flex justify-between border-b-2 border-b-gray-300 items-center'>
                  <div className='flex gap-2 items-center uppercase mb-2  p-2'>
                    <p className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>{alumno.name?.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</p>
                    <p>{alumno.name}</p>
                  </div>
                  {alumno.id === user.id && (
                    <p>- Yo</p>
                  )}
                  <p>Miembro</p>
                  
              </div>
              
        ))}
       
        
        

        
      </div>
    </div>
    </div>
  )
}

export default DetalleMateria