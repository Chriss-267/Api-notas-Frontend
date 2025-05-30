import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import ModalNota from '../components/ModalNota'
import Modal from "react-modal";
import { NotasContext } from '../Context/NotasContext';


function MateriaDocente() {

    const { customStyles } = useContext(NotasContext)
    

    const { id } = useParams();

     const [modal, setModal] = useState(false)
     const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);



    const [student, setStudent] = useState([])

    const getGradesStudentsbySubject = async () => {
        const url = `${import.meta.env.VITE_API_URL}/api/grades/materia/${id}`; 
        try {
            const {data} = await axios.get(url)
            setStudent(data.data)
            console.log("Hola", Array.isArray(data.data))
        } catch (error) {
            console.log(error);
        }
        }

        useEffect(() =>{
            console.log("useEffect se ejecuta con ID:", id);
            getGradesStudentsbySubject();
        }, [])

        const eliminarNota = async (id) =>{
            const url = `${import.meta.env.VITE_API_URL}/api/grades/${id}`;

            const confirm = await Swal.fire({
                      title: "¿Quieres eliminar la calificación?",
                      text: "No podrá revertir esta acción",
                      icon: "question",
                      showCancelButton: true,
                      confirmButtonText: "Sí, Eliminar",
                      cancelButtonText: "Cancelar",
            });

            if(confirm.isConfirmed){
                try {
                    const {data} = await axios.delete(url)

                     Swal.fire({
                        title: "Inscripción exitosa",
                        text: 'La calificación fue eliminada',
                        icon: "success",
                        confirmButtonText: "Cerrar",
                    }  );
                    getGradesStudentsbySubject()
                    console.log(data)

                } catch (error) {
                    console.log(error)
                }
            }


        }


        const addNota = async (alumno) => {
        
            setAlumnoSeleccionado(alumno);
            setModal(true);
        }


        
  return (
    <div className='bg-white w-full mt-0.5 p-4 font-bold '>
            <div className='flex'>
                    <div className='w-[35vw] border-r-2 border-gray-400 p-4'>
                    <p className='w-25 h-25 bg-gray-300 flex items-center justify-center mb-10 rounded-sm text-3xl'>{student[0]?.materia?.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</p>
                        <div className='font-normal space-y-2'>
                            <h1 className='text-2xl'>{student.length > 0 ? student[0].materia : "Cargando..."}</h1>
                            <p>Página principal</p>
                            <p>Trabajo de clase</p>
                            <p>Grabaciones de clase</p>
                            <p className=' mb-20 border-b-2 border-gray-400 pb-2'>Notas</p>
                        </div>
                        

                        <p>General</p>
                        <p>Clases Sincrónicas</p>

                    </div>
                    <table className='w-[65vw] p-4'>
                        <thead >
                            <tr className='flex justify-between p-2'>
                                <th>Miembros</th>
                                <th>Calificación</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Array.isArray(student) ?  (
                                student.map((alumno, index) => (
                                    <div className='flex justify-between border-b-2 border-b-gray-300 items-center' key={index}>
                                        <div className='flex gap-2 items-center uppercase mb-2  p-2'>
                                            <p className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>{alumno.alumno?.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</p>
                                            <p>{alumno.alumno}</p>
                                        </div>
                                        {console.log(alumno.nota)}
                                        <p className='font-normal'>{alumno?.nota !== null ? alumno?.nota : "Sin Calificación"}</p>
                                        <div className='flex gap-1'>
                                        {
                                            alumno?.nota == null ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" onClick={() => addNota(alumno)}>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            ) : 
                                            (
                                                <p></p>
                                            )
                                        }
                                        
                                        
        
                                        {
                                            alumno?.nota !== null && (
        
                                                <div className='flex gap-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" onClick = {() =>addNota(alumno)}>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" onClick={() => eliminarNota(alumno.gradeId)}>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                </div>
                                                
                                            )
                                        }
        
                                        
        
        
        
                                        </div>
                                        
                                    </div>
                                    
                                ))
                            )  :    
                            (
                                <p className='text-center font-normal p-2'>No hay Alumnos inscritos aún</p>
                            )
                        
                        }
                        </tbody>
                        
                        
                    </table>

                    <Modal isOpen={modal} style={customStyles} onRequestClose={() => setModal(false)}>
                                        
                         <ModalNota closeModal={() => setModal(false)}
                            alumno = {alumnoSeleccionado} 
                            getGradesStudentsbySubject = {getGradesStudentsbySubject}
                            esEdicion={alumnoSeleccionado?.nota !== null}  />
                                       
                    </Modal>
            </div>
            

    </div>
  )
}

export default MateriaDocente