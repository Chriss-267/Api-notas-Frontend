import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { NotasContext } from "../Context/NotasContext";

export default function ModalMateria({materia, closeModal, actualizarMateriasEstudiante}) {


    const {user} = useContext(NotasContext)
  


      const inscribirse = async () => {
        const url = `${import.meta.env.VITE_API_URL}/api/inscriptions`

        const confirm = await Swal.fire({
          title: "¿Quieres inscribirte a esta materia?",
          text: materia.name,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Sí, inscribirme",
          cancelButtonText: "Cancelar",
        });

        if(confirm.isConfirmed){
          try {
            const {data} = await axios.post(url, {
              subject_id : materia.id,
              user_id : user.id
            })

            Swal.fire({
              title: "Inscripción exitosa",
              text: `Te has inscrito a ${materia.name}`,
              icon: "success",
              confirmButtonText: "Cerrar",
            });
            
            
            closeModal(); 
            actualizarMateriasEstudiante();
          } catch (error) {
            console.log(error.response.data);
            Swal.fire({
              title: "Error al inscribirse",
              text: error.response?.data?.errors || "Intenta más tarde",
              icon: "error",
            });
          }
        }
        
      }

  return (
    <div>
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
      <div className="md:flex max-w-screen-md gap-6 p-3">
      
      <div className="md:w-2/3">
        <img
           src={`${import.meta.env.VITE_API_URL}/storage/${materia.imagen}`}
           alt={`${import.meta.env.VITE_API_URL}${materia.imagen}`}
          className="rounded-lg w-xl h-[50vh]"
        />

        {/* <div className="flex flex-wrap gap-2 mt-3">
          {project.useTec.map(tec => (
            <p key={tec} className={`py-1 px-2 ${theme ? "border-indigo-500 text-indigo-500 " : "border-amber-600 text-amber-600"}  border rounded-lg lowercase`}>{tec}</p>
          ))}
        </div> */}
      </div>
      <div className="md:w-1/2 space-y-2">
        

        <h1 className="text-3xl font-bold text-center mt-4">{materia.name}</h1>

        <p className="font-semibold">Descripción de la materia</p>
        <p className="text-sm text-gray-600 mt-2">{materia.description}</p>
        <p className="font-semibold">Docente encargado</p>
        <p className="text-sm text-gray-500 mt-2">{materia.teacher.name}</p>

        
        <div className="flex justify-center mt-10">
          <button className={`py-2 w-1/2 bg-amber-400 hover:bg-amber-300 text-black rounded-lg  text-center cursor-pointer`}
            onClick={inscribirse}
            >Inscribirse</button>
        </div>
        
        

        
      </div>
    </div>
    </div>
    
  )
}