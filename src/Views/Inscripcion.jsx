import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Materia from '../components/Materia';
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import ModalMateria from '../components/ModalMateria';
import { NotasContext } from '../Context/NotasContext';

function Inscripcion() {

    const {customStyles, materias, setMaterias, getSubjects, user, getUser, setUser} = useContext(NotasContext)
  

   
    const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);
    const [materiasStudent, setMateriasStudent] = useState([])

    const [modal, setModal] = useState(false)
    
    const handleClickModal = (materia) =>{
      setMateriaSeleccionada(materia);
      setModal(true)
    }


      const actualizarMateriasEstudiante = async () => {
        if (user.id) {
          await getSubjetsStudent();
        }
      };

      useEffect(() =>{
          actualizarMateriasEstudiante()
      }, [])
    



    const getSubjetsStudent =  async () =>{
      const url =  `${import.meta.env.VITE_API_URL}/api/subjects/alumno/${user.id}`

      try{
          const {data} = await axios.get(url);
          setMateriasStudent(data)
          console.log("Data", data)
      } catch (error){
          console.log(error)
      }
  }

  useEffect(() =>{
      if (user.id) {
          getSubjetsStudent();
        }
  }, [user.id])
    
  return (
    <div className='bg-gray-200 h-min-screen'>
     <div className='w-[90vw] bg-white mx-auto rounded-lg mt-10 shadow-lg p-10'>
       
       <h2 className='text-2xl font-bold text-slate-800 mb-10'>Materias Disponibles a Inscribir</h2>


        <div className='flex gap-4 flex-wrap'>

        {materias.length > 0 ? (
          materias.filter(materia => !materiasStudent.some(m => m.id === materia.id)).length === 0 ? (
            <p className='text-center text-gray-600'>Te has inscrito a todas las materias</p>
          ) : (
            materias
              .filter(materia => !materiasStudent.some(m => m.id === materia.id))
              .map((materia) => (
                <button onClick={() => handleClickModal(materia)} key={materia.id} className='cursor-pointer'>
                  <Materia materia={materia} />
                </button>
              ))
          )
        ) : (
          <p className='text-gray-500'>Cargando materias disponibles...</p>
        )}



                <Modal isOpen={modal} style={customStyles} onRequestClose={() => setModal(false)}>
                {materiaSeleccionada && (
                    <ModalMateria materia={materiaSeleccionada} closeModal={() => setModal(false)}
                    actualizarMateriasEstudiante={actualizarMateriasEstudiante} />
                )}
                </Modal>

            
            
            </div>

        </div>
        
    </div>
   
  )
}

export default Inscripcion