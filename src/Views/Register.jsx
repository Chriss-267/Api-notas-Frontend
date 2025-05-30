import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/AuthLayout.css"
import Swal from 'sweetalert2';
import Select from 'react-select';


function Register() {

   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const rolOptions = [
    { value: '1', label: 'Maestro' },
    { value: '0', label: 'Alumno' }
  ];
  

   const [datos, setDatos]  = useState({

          name : '',
          email : '',
          password : '',
          password_confirmation : '',
          rol : '0'
    })

  const handleChange = (e) =>{
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  }

  const register = async (e) => {

    e.preventDefault()
    setLoading(true)
    const url = `${import.meta.env.VITE_API_URL}/api/auth/register`

    try {

      const {data} = await axios.post(url, datos)
      if (data) {
        console.log(data)
        sessionStorage.setItem('token', data.access_token);
        navigate('/');
    } else {
        alert(error)
    }
      
    } catch (error) {
      
        

        const errors = error.response.data

        let errorMessages = []

        if (typeof errors === 'string') {
          const parsedErrors = JSON.parse(errors); // convierte a objeto
          for (const key in parsedErrors) {
            parsedErrors[key].forEach((msg) => {
              errorMessages.push(msg);
            });
          }
        } else {
          // Si ya vienen como objeto
          for (const key in errors) {
            errors[key].forEach((msg) => {
              errorMessages.push(msg);
            });
          }
        }

        Swal.fire({
          icon: 'error',
          title: 'Errores de validacion',
          html: `<ul>${errorMessages.map(msg => `<li>${msg}</li>`).join('')}</ul>`
         });
        setLoading(false)

    }


  }
  return (
    <div>
    <div className='px-6 flex justify-center'>
        <img src="../logoUp.png" alt="" className='max-w-96' />
    </div>
    <div>
        <p className='text-center text-gray-700 text-lg'>Cree una nueva cuenta:</p>
    </div>
    <form action="" className='px-10'>
        <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">Nombre</label>
                    <input
                    type="text"
                    id="name"
                    name='name'
                    className=" border border-gray-300 px-4 py-2 text-gray-700"
                    placeholder='Ingrese su nombre'
                    onChange={handleChange}
                    />
          </div>
        <div className="flex flex-col mt-2">
                <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Correo</label>
                <input
                type="email"
                id="email"
                name='email'
                className=" border border-gray-300 px-4 py-2 text-gray-700"
                placeholder='Ingrese su correo'
                onChange={handleChange}
                />
        </div>
        <div className="flex flex-col mt-2">
                <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">Contraseña</label>
                <input
                onChange={handleChange}
                type="password"
                id="password"
                name='password'
                className=" border border-gray-300 px-4 py-2 text-gray-700"
                placeholder='Ingrese su contraseña'
                />
        </div>
        <div className="flex flex-col mt-2">
                <label htmlFor="password_confirmation" className="mb-1 text-sm font-medium text-gray-700">Confirmar contraseña</label>
                <input
                onChange={handleChange}
                type="password"
                id="password_confirmation"
                name='password_confirmation'
                className=" border border-gray-300 px-4 py-2 text-gray-700"
                placeholder='Repita su contraseña'
                />
        </div>
        <div className="flex flex-col mt-2">
        <label htmlFor="password_confirmation" className="mb-1 text-sm font-medium text-gray-700">Rol</label>

          <Select
            options={rolOptions}
            value={rolOptions.find(option => option.value === datos.rol)}
            onChange={(selectedOption) =>
              setDatos({ ...datos, rol: selectedOption.value })
            }
            placeholder="Seleccione un rol"
          />
          </div>
        <button className='mt-6 bg-blue-950 py-3 w-full text-white hover:bg-blue-800 cursor-pointer'
        onClick={register}>
             Registrarse
        </button>
    </form>
    <div className='text-center'>

    <Link to={'/auth'} className = "font-bold text-sm">¿Ya tiene una cuenta? Inicie sesión</Link>
    </div>
    {
        loading && (
            <div className='mt-0'>
            <div class="sk-fading-circle">
            <div class="sk-circle1 sk-circle"></div>
            <div class="sk-circle2 sk-circle"></div>
            <div class="sk-circle3 sk-circle"></div>
            <div class="sk-circle4 sk-circle"></div>
            <div class="sk-circle5 sk-circle"></div>
            <div class="sk-circle6 sk-circle"></div>
            <div class="sk-circle7 sk-circle"></div>
            <div class="sk-circle8 sk-circle"></div>
            <div class="sk-circle9 sk-circle"></div>
            <div class="sk-circle10 sk-circle"></div>
            <div class="sk-circle11 sk-circle"></div>
            <div class="sk-circle12 sk-circle"></div>
            </div>
            </div>
        )
    }
    
    
    
    
</div>
  )
}

export default Register