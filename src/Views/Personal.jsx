import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Materia from '../components/Materia'
import DetalleMateria from '../components/DetalleMateria'
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import { NotasContext } from '../Context/NotasContext';

function Personal() {

  const {customStyles, materias, setMaterias, getSubjects, user, getUser, setUser} = useContext(NotasContext)
  

  const [materiaSeleccionada, setMateriaSeleccionada] = useState(null);
  
      const [modal, setModal] = useState(false)
      
      const handleClickModal = (materia) =>{
        setMateriaSeleccionada(materia);
        setModal(true)
      }
  
    const [notas, setNotas] = useState([])
    // const  [user, setUser] = useState([])
    const [materiasStudent, setMateriasStudent] = useState([])
      // const [materiasGeneral, setMateriasGeneral] = useState([])

      // const getSubjects = async () => {
      //   const url = "https://api-notas-production.up.railway.app/api/subjects"; 
      //   try {
      //       const {data} = await axios.get(url)
      //       setMateriasGeneral(data.subjects)
      //   } catch (error) {
      //       console.log(error);
      //   }
      //   }

        useEffect(() =>{
            getSubjects();
        }, [])

    
    
    // const getUser = async () => {
    //     const token = sessionStorage.getItem('token')
    //     const url = "https://api-notas-production.up.railway.app/api/auth/me"; 
    //     try {
    //         const {data} = await axios.get(url, {
    //             headers : {
    //                 Authorization : `Bearer ${token}`
    //             }
    //         })
    //         setUser(data)
    //         console.log(data.id)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() =>{
        getUser();
    }, [])

    const getGrades = async () =>{
        const url = `${import.meta.env.VITE_API_URL}/api/grades/${user.id}`

        try{
            const {data} = await axios.get(url);
            setNotas(data.data)
            console.log("DATA RECIBIDA DE GRADES:", data)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() =>{
        if (user.id) {
            getGrades();
          }
    }, [user.id])

    // const total = notas.reduce((sum, nota) => sum + parseFloat(nota.grade), 0);
    // const promedio = total / notas.length;

    const total = Array.isArray(notas) && notas.length > 0
      ? notas.reduce((sum, nota) => sum + parseFloat(nota.grade), 0)
      : 0;

    const promedio = notas.length > 0 ? total / notas.length : 0;



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
    <div>
        

        {

           user.rol == 1 ? (

            <div>
                  <div className='bg-white shadow-lg flex items-center justify-between w-[100vw] mt-0.5'>
                  <h2 className='text-2xl font-bold text-slate-800 p-4'>Mis Materias Impartidas</h2>
                  
                </div>
                <div className='bg-white shadow-lg w-[100vw] p-8 flex items-center gap-2'>
                    {
                      materias.filter(materia => materia.user_id == user.id)
                      .map((materia) =>(
                        <Link to={`/materia/${materia.id}`} key={materia.id} className='cursor-pointer'>
                        <Materia
                        key={materia.id}
                        materia = {materia}
                        />
                        </Link> 
          
                      ))}

                      
                </div>
                
            </div>
                
           )

           : ( 

            <div>
                      <div className='bg-white shadow-lg flex items-center justify-between w-[100vw] mt-0.5 p-4'>
                        <h2 className='text-2xl font-bold text-slate-800 p-4'>Materias Inscritas</h2>
                        {/* <div className=' flex items-center gap-2'>
                            <p className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>{user.name?.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</p>
                            <p className='uppercase text-gray-500 font-medium'>{user.name}</p>
                        </div> */}
                      </div>

                    <div className='flex gap-4 bg-white p-8 flex-wrap'>
                        {materiasStudent.map((materia) => (
                          <button onClick={() => handleClickModal(materia)}   key={materia.id} className='cursor-pointer'>
                          <Materia
                          key={materia.id}
                          materia = {materia}
                          />
                          </button>
            
                          
                            
                        ))}
            
                        <Modal isOpen={modal} style={customStyles} onRequestClose={() => setModal(false)}>
                                        {materiaSeleccionada && (
                                            <DetalleMateria materia={materiaSeleccionada} closeModal={() => setModal(false)} />
                                        )}
                        </Modal>
                        
                     </div>
            </div>

             
           )
          
          
        }

       {        
              user.rol == 0 && (
       
                  <div>
                          <div className='bg-white shadow-lg flex items-center justify-between w-[100vw] mt-0.5 p-4'>
                               <h2 className='text-2xl font-bold text-slate-800 p-4'>Mis calificaciones</h2>
                               
                               
                           </div>
                   
                           <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border p-8">
                             <table class="w-full text-left table-auto min-w-max text-slate-800 p-4">
                               <thead>
                                 <tr class="text-slate-500 border-b border-slate-300 bg-slate-50">
                                   <th class="p-4">
                                     <p class="text-sm leading-none font-normal">
                                       #
                                     </p>
                                   </th>
                                   <th class="p-4">
                                     <p class="text-sm leading-none font-normal">
                                       Nombre de la Materia
                                     </p>
                                   </th>
                                   <th class="p-4">
                                     <p class="text-sm leading-none font-normal">
                                       Descripción de la Materia
                                     </p>
                                   </th>
                                   <th class="p-4">
                                     <p class="text-sm leading-none font-normal">
                                       Fecha Creación
                                     </p>
                                   </th>
                                   <th class="p-4">
                                     <p class="text-sm leading-none font-normal">
                                       Fecha Actualización
                                     </p>
                                   </th>
                                   <th class="p-4">
                                     <p class="text-sm leading-none font-normal">
                                       Nota
                                     </p>
                                   </th>
                                 </tr>
                               </thead>
                               <tbody>
                   
                                   {
                                   Array.isArray(notas) && notas.length > 0 ? (
                                   notas.map((nota, index) => (
                                       <tr key={index} class="hover:bg-slate-50">
                                           <td className='p-4'>
                                               <p className='text-sm'>
                                                   {index + 1}
                                               </p>
                                           </td>
                                           <td className='p-4 font-bold'>
                                               <p className='text-sm'>
                                                   {nota.subject.name}
                                               </p>
                                           </td>
                                           <td className='p-4'>
                                               <p className='text-sm'>
                                                   {nota.subject.description}
                                               </p>
                                           </td>
                                           <td className='p-4'>
                                               <p className='text-sm'>
                                               {new Date(nota.created_at).toLocaleDateString('es-ES')}
                                               </p>
                                           </td>
                                           <td className='p-4'>
                                               <p className='text-sm'>
                                               {new Date(nota.updated_at).toLocaleDateString('es-ES')}
                                               </p>
                                           </td>
                                           <td className='p-4'>
                                               <p className='text-sm'>
                                                   {nota.grade}
                                               </p>
                                           </td>
                                       </tr>
                   
                                   ))
                                   ) : (
                                     <tr>
                                       <td colSpan="6" className="text-center text-sm text-gray-500 py-4">
                                         No hay notas asignadas aún.
                                       </td>
                                     </tr>
                                   )}
                                   
                                 
                               </tbody>
                               <tfoot>
                               
                                       <tr className='bg-slate-300'>
                                           <td></td>
                                           <td></td>
                                           <td></td>
                                           <td></td>
                                           <td className='font-bold p-4'>Promedio Final</td>
                                           <td className='p-4 font-bold'>{promedio}</td>
                                       </tr>
                   
                               </tfoot>
                             </table>
                   </div>
          </div>

       )
                     
       }
       


    </div>
  )
}

export default Personal