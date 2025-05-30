import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/AuthLayout.css"
import Swal from 'sweetalert2';
import { useAuth } from '../hooks/useAuth';



function Login() {

    const [datos, setDatos]  = useState({
        email : '',
        password : ''
    })

    const { login} = useAuth({
        middleware: "guest",
        url: "/"
    })

    const navigate = useNavigate()


    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setDatos({
          ...datos,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async e => {

        e.preventDefault()
        if (!datos.email || !datos.password) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos requeridos',
                text: 'Por favor complete todos los campos'
            });
            return;
        }
        login(datos, setLoading)

    }
  return (
    <div>
        <div className='p-6 flex justify-center'>
            <img src="../logoUp.png" alt="" className='max-w-96' />
        </div>
        <div>
            <p className='mt-2 text-center text-gray-700 text-lg'>Identifiquese usando su cuenta:</p>
        </div>
        <form action="" className='p-10'>
            <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Usuario</label>
                    <input
                    type="email"
                    id="email"
                    name='email'
                    className=" border border-gray-300 px-4 py-2 text-gray-700"
                    placeholder='Ingrese su usuario'
                    onChange={handleChange}
                    />
            </div>
            <div className="flex flex-col mt-4">
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
            <button className='mt-6 bg-blue-950 py-3 w-full text-white hover:bg-blue-800 cursor-pointer'
            onClick={handleSubmit}>
                Iniciar sesión
            </button>
        </form>
        <div className='text-center'>

        <Link to={'register'} className = "font-bold text-sm">¿No tienes una cuenta aún? Haz click aquí</Link>
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

export default Login