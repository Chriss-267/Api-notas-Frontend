import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { NotasContext } from '../Context/NotasContext';
import Modal from "react-modal";
import ModalAddMateria from '../components/ModalAddMateria';
import MateriaGeneral from '../components/MateriaGeneral';


function Materias() {

  


    const {materias, modal, handleClickModal, setModal, customStyles} = useContext(NotasContext)
    
    const [edicion, setEdicion] = useState(false);
    const [materiaModal, setMateriaModal] = useState(null);


  return (
    <div className='bg-gray-200 min-h-screen'>
            
        <div className='w-[90vw] bg-white mx-auto rounded-lg mt-10 shadow-lg p-10'>
            <div className='flex justify-between mb-10'>
                <h2 className='text-2xl font-bold'>Todas las materias disponibles</h2>
                <button className='text-white bg-slate-900 py-2 px-6 rounded-sm font-bold flex gap-1 items-center cursor-pointer hover:bg-slate-700'
                onClick={() => {
                  handleClickModal();
                  setEdicion(false);
                  setMateriaModal(null);
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                Agregar
                </button>
                
            </div>
            <div className='flex gap-4 flex-wrap'>
            {materias.map((materia) => (
                <MateriaGeneral
                  key={materia.id}
                  materia={materia}
                  setEdicion={setEdicion}
                  setMateriaModal={setMateriaModal}
                  handleClickModal={handleClickModal}
                />
                
            ))}
            </div>

            <Modal isOpen={modal} style={customStyles} onRequestClose={() => setModal(false)}>
     
             <ModalAddMateria closeModal={() => setModal(false)}
                  edicion={edicion}
                  materia={materiaModal}
              />
            
            </Modal>
            
        </div>
        
    </div>
  )
}

export default Materias