import React, { useContext, useEffect, useState } from 'react'
import { NotasContext } from '../Context/NotasContext'
import axios from 'axios'
import Select from 'react-select';
import Swal from 'sweetalert2';
import "../Styles/AuthLayout.css"


function ModalAddMateria({closeModal, edicion = false, materia = null}) {


    const { getSubjects} = useContext(NotasContext)

    const [datos, setDatos] = useState({
      name: "",
      description : "",
      imagen : null,
      user_id : ""

    })

    // si esta editando
    useEffect(() => {
      if (edicion && materia) {
        setDatos({
          name: materia.name,
          description: materia.description,
          user_id: materia.user_id,
          imagen: materia.imagen
        });
      }
    }, [edicion, materia]);

    const editSubject = async (id) => {
      
        const url = `${import.meta.env.VITE_API_URL}/api/subjects/${id}` 

        const formData = new FormData();
          formData.append("name", datos.name);
          formData.append("description", datos.description);
          formData.append("user_id", datos.user_id);

          if (datos.imagen instanceof File) {
            formData.append("imagen", datos.imagen);
          }

          try {
            
            const { data } = await axios.post(url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'X-HTTP-Method-Override': 'PUT'
              },
            });
            
            console.log(data);
            closeModal()
            getSubjects()
             Swal.fire({
                title: "Materia editada exitosamente",
                icon: "success",
                confirmButtonText: "Cerrar",
              });
            

            
          } catch (error) {
            console.log(error.response?.data || error.message);

            const responseErrors = error.response?.data?.errors || error.response?.data?.message || 'Error inesperado';
            let errorMessages = [];
          
            if (typeof responseErrors === 'string') {
              // Mensaje simple de error
              errorMessages.push(responseErrors);
            } else if (typeof responseErrors === 'object') {
              // Recorremos los errores del backend (Laravel Validation)
              for (const key in responseErrors) {
                if (Array.isArray(responseErrors[key])) {
                  errorMessages.push(...responseErrors[key]);
                } else {
                  errorMessages.push(responseErrors[key]);
                }
              }
            }
          
            Swal.fire({
              icon: 'error',
              title: 'Errores de validación',
              html: `<ul style="text-align: center;">${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`
            });
            
          }
          console.log(datos)

        
    }


    const [teachers, setTeachers] = useState([])

    const addSubject = async () => {

          const url = `${import.meta.env.VITE_API_URL}/api/subjects`

          const formData = new FormData();
          formData.append("name", datos.name);
          formData.append("description", datos.description);
          formData.append("user_id", datos.user_id);
          formData.append("imagen", datos.imagen);

          try {
            
            const { data } = await axios.post(url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            
            console.log(data);
            closeModal()
            getSubjects()
             Swal.fire({
                title: "Materia creada exitosamente",
                icon: "success",
                confirmButtonText: "Cerrar",
                        });
            

            
          } catch (error) {
            console.log(error.response?.data || error.message);

            const responseErrors = error.response?.data?.errors || error.response?.data?.message || 'Error inesperado';
            let errorMessages = [];
          
            if (typeof responseErrors === 'string') {
              // Mensaje simple de error
              errorMessages.push(responseErrors);
            } else if (typeof responseErrors === 'object') {
              // Recorremos los errores del backend (Laravel Validation)
              for (const key in responseErrors) {
                if (Array.isArray(responseErrors[key])) {
                  errorMessages.push(...responseErrors[key]);
                } else {
                  errorMessages.push(responseErrors[key]);
                }
              }
            }
          
            Swal.fire({
              icon: 'error',
              title: 'Errores de validación',
              html: `<ul style="text-align: center;">${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`
            });
            
          }
          console.log(datos)
    }

    const getTeachers = async () => {

        const url = `${import.meta.env.VITE_API_URL}/api/teachers`

        try {
            const {data} = await axios.get(url)
            setTeachers(data.teachers)
            console.log(data)
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(() => {
      getTeachers()
    }, [])

    const optionsTeachers = teachers.map(t => ({
      value: t.id,
      label: t.name
    }));
    
  return (
    <div className='w-[40vw]'>
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
      <div className="p-3">
          <h2 className='text-center font-bold text-xl'>Agregar una nueva Materia</h2>
          <div className='max-w-screen-xl p-3'>
                      <div className='w-xl'>

                          <form className="bg-white p-6 w-full max-w-md mx-auto space-y-4">

                          <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">Nombre</label>
                            <input
                              type="text"
                              id="name"
                              className=" border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 "
                              onChange={(e) => setDatos({ ...datos, name: e.target.value })}
                              value={datos.name}
                            />
                          </div>

                          <div className="flex flex-col">
                            <label htmlFor="description" className="mb-1 text-sm font-medium text-gray-700">Descripción</label>
                            <input
                              type="text"
                              id="description"
                              name='description'
                              className=" border border-gray-300 px-4 py-2 text-gray-700"
                              onChange={(e) => setDatos({ ...datos, description: e.target.value })}
                              value={datos.description}
                            />
                          </div>

                          <div  className="flex flex-col">
                              <label className="file-label">
                                Subir imagen
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => setDatos({ ...datos, imagen: e.target.files[0] })}
                                  className="file-input"
                                />
                              </label>

                                {/* Vista previa si hay imagen existente o nueva */}
                                {datos.imagen && (
                                  <div className="mt-2 flex justify-center">
                                    {typeof datos.imagen === "string" ? (
                                      <img
                                        src={`${import.meta.env.VITE_API_URL}/storage/${datos.imagen}`}
                                        alt="Imagen actual"
                                        className="w-full h-50 object-cover rounded border border-gray-300"
                                      />
                                    ) : (
                                      <img
                                        src={URL.createObjectURL(datos.imagen)}
                                        alt="Imagen seleccionada"
                                        className="w-full h-50 object-cover rounded border border-gray-300"
                                      />
                                    )}
                                  </div>
                                )}


                          </div>

                

                          <div className="flex flex-col">
                            <label htmlFor="user_id" className="mb-1 text-sm font-medium text-gray-700">Maestro</label>
                            <Select
                              options={optionsTeachers}
                              value={optionsTeachers.find(option => option.value === datos.user_id)}
                              onChange={(selectedOption) =>
                                setDatos({ ...datos, user_id: selectedOption.value })
                              }
                              placeholder="Seleccione un maestro"
                            />

                          </div>

                          <div className="text-center">
                            <button
                              type="button"
                              className="mt-4 px-8 py-2 rounded-lg bg-amber-400 cursor-pointer font-semibold hover:bg-amber-500 transition duration-200"
                              onClick={edicion ? () => editSubject(materia.id) : addSubject}
                            >
                              {edicion ? "Guardar Cambios" : "Agregar"}
                            </button>
                          </div>
                        </form>


                      </div>
                </div>
      </div>
      </div>
  )
}

export default ModalAddMateria