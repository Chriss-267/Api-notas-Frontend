import axios from 'axios'
import React, { useContext } from 'react'
import Swal from 'sweetalert2'
import { NotasContext } from '../Context/NotasContext'
import ModalAddMateria from './ModalAddMateria'
import Modal from "react-modal";


function MateriaGeneral({materia, setEdicion, setMateriaModal, handleClickModal }) {

    const {getSubjects} = useContext(NotasContext)

    const deleteSubject = async (id) => {

        const url = `${import.meta.env.VITE_API_URL}/api/subjects/${id}`

        const confirm = await Swal.fire({
            title:`¿Deseas eliminar la materia ${materia.name}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText:"Sí eliminarla"
            });
        if(confirm.isConfirmed){
            try {
                const {data} = await axios.delete(url)
                getSubjects()
                 Swal.fire({
                    title: "Éxito",
                    text: `${data.message}`,
                    icon: "success",
                    confirmButtonText: "Cerrar",
                }  );
                console.log(data);
                
            } catch (error) {
                console.log(error);
                
            }
            console.log("eliminando la materia", id);
            
            }
        }
        
  return (
    <div>
        <section className='rounded-lg shadow-lg w-[20vw]'>
                    <img
                    src={`${import.meta.env.VITE_API_URL}/storage/${materia.imagen}`}
                    alt={`${import.meta.env.VITE_API_URL}${materia.imagen}`}
                    className='w-full object-cover h-60'
                    />

                    <div className='p-4 text-left'>
                    
                        <div className='flex justify-between'>
                             <p className='text-xl text-slate-800'>{materia.name}</p>
                             <div className='flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 cursor-pointer"
                                onClick={() => {
                                    setEdicion(true);
                                    setMateriaModal(materia);
                                    handleClickModal();
                                  }}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 cursor-pointer"
                                onClick={() => deleteSubject(materia.id)}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                             </div>
                            
                        </div>
                        <p className='text-gray-700 text-sm'>{materia.description}</p>
                        <p className='text-gray-500 text-sm'>{materia.teacher.name}</p>
                        <p className='py-2 px-3 rounded-lg bg-orange-100 text-amber-900 text-sm mt-2'>Ingeniería en Sistemas <br /> y computación</p>
                    </div>
        </section>

    {/* <Modal isOpen={modal} style={customStyles} onRequestClose={() => setModal(false)}>
     
     <ModalAddMateria closeModal={() => setModal(false)}
        // edicion = {true}
        // materia = {materia}
      />
    
    </Modal> */}
    </div>
  )
}

export default MateriaGeneral