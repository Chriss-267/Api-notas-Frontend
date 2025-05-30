import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';


function ModalNota({alumno, closeModal, getGradesStudentsbySubject, esEdicion}) {

  const [nota, setNota] = useState(alumno.nota ?? '');


  const asignarNota = async () => {

    const url = esEdicion ? `${import.meta.env.VITE_API_URL}/api/grades/${alumno.gradeId}`   : `${import.meta.env.VITE_API_URL}/api/grades`;


    if (nota === '' || isNaN(nota) || nota < 0 || nota > 10) {
      Swal.fire({
        icon: 'error',
        title: 'Nota inválida',
        text: 'Por favor ingresa una nota entre 0 y 10',
      });
      return;
    }

     const confirm = await Swal.fire({
            title: esEdicion ? "¿Quieres editar la calificación?" : "¿Quieres asignar la calificación?",
            text: `Al alumno: ${alumno.alumno}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: esEdicion ? "Sí, guardar!" : "Sí, asignar!"
     });

     if(confirm.isConfirmed){
      try {

        const metodo = esEdicion ? axios.patch : axios.post

        const body = esEdicion ? {
          grade : Number(nota)
        } : {
          user_id : alumno.userId,
          subject_id : alumno.materiaId,
          grade : Number(nota)
        }

        const {data} = await metodo(url, body
        )

        console.log(data)

        await Swal.fire({
            title: esEdicion ? "Edición exitosa" : "Inscripción exitosa",
            text: esEdicion ? "La calificacion fue editada exitosamente" :'La calificación fue registrada exitosamente',
            icon: "success",
            confirmButtonText: "Cerrar",
        }  );
        closeModal()
        getGradesStudentsbySubject()
        
      } catch (error) {
        console.log(error)
      }
     }
  }
  return (
        <div>
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

                <div className='max-w-screen-xl p-3'>
                      <div className='w-xl'>

                          <h2 className='text-center font-bold text-xl'>{esEdicion ? "Editar Calificacion" :"Asignar Calificación"}</h2>

                          <form className="bg-white p-6 w-full max-w-md mx-auto space-y-4">

                          <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">Nombre</label>
                            <input
                              type="text"
                              id="name"
                              value={alumno.alumno}
                              disabled
                              className=" border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 cursor-not-allowed "
                            />
                          </div>

                          <div className="flex flex-col">
                            <label htmlFor="grade" className="mb-1 text-sm font-medium text-gray-700">Nota</label>
                            <input
                              type="number"
                              id="grade"
                              name='grade'
                              value={nota}
                              className=" border border-gray-300 px-4 py-2 text-gray-700"
                              onChange={(e) => setNota(e.target.value)}
                            />
                          </div>

                          <div className="text-center">
                            <button
                              type="button"
                              className="mt-4 px-8 py-2 rounded-lg bg-amber-400 cursor-pointer font-semibold hover:bg-amber-500 transition duration-200"
                              onClick={() => asignarNota()}
                            >
                              {esEdicion ? "Actualizar" : "Asignar"}
                            </button>
                          </div>
                        </form>


                      </div>
                </div>
          
           


          
        

            
    
        </div>
    </div>
  )
}

export default ModalNota