import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NotasContext } from '../Context/NotasContext'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useAuth } from '../hooks/useAuth'


function Layout() {

  // const {user, getUser} =  useContext(NotasContext) 

  const {user, authError, getUser} = useAuth({middleware: "auth"})

  // useEffect(() => {
  //   getUser()
  // }, [])

  const logOut = async () => {
    const token = sessionStorage.getItem('token')

    // const url = "https://api-notas-production.up.railway.app/api/auth/logout"

    const confirm = await Swal.fire({
                title:"¿Deseas cerrar sesión?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText:"Sí cerrar sesión"
    });
    if(confirm.isConfirmed){
      console.log(token);
      
        //   try {
        //     const {data} = await axios.post(url, {}, {
        //       headers : {
        //           Authorization : `Bearer ${token}`
        //       }
        //   })
        //   console.log(data);
        //   sessionStorage.removeItem('token')
          
          
        // } catch (error) {
        //   console.log(error);
          
        // }
        sessionStorage.removeItem('token')
        getUser()
    }
    
  }

  return (
    <div className="min-h-screen flex flex-col">
        <header >
 
            <div className='flex justify-center'>
              <img src="../logoUped.png" alt="logo uped" className='w-[23vw] mt-2'/>
            </div>

            <div className=' flex items-center gap-2 mr-4 justify-between  ml-2'>

                <div className='flex items-center gap-2'>
                  <p className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>{user.name?.split(' ').map(word => word.charAt(0)).join('').toUpperCase()}</p>
                  <p className='uppercase text-gray-500 font-medium'>{user.name}</p>
                </div>
                <p className='cursor-pointer text-gray-700 hover:text-gray-500'
                  onClick={() => logOut()}>
                  Cerrar Sesión
                </p>
                      
            </div>
          
            <nav className='flex w-[35vw] justify-between mx-auto mt-5 font-medium text-gray-600 mb-10'>
                <Link to={'/'}  className='border-b-4 border-transparent  hover:border-amber-300'>Inicio</Link>
                <Link to={'/area-personal'} className='border-b-4 border-transparent  hover:border-amber-300'>Área personal</Link>
                {
                  user.rol == 0 && (
                    <Link to={'/inscripcion-en-linea'} className='border-b-4 border-transparent  hover:border-amber-300'>Incripción en línea</Link>
                  )
                }
                <Link to={'/integrantes'} className='border-b-4 border-transparent  hover:border-amber-300'>Integrantes</Link>
            </nav>


        </header>

        <main className=" bg-gray-200">
           <Outlet/>
        </main>

        <footer className='bg-gray-800 text-white flex justify-center items-center h-[10vh]'>
          <p>2025 © Centro Escolar Cantón Lourdes | Todos los derechos reservados</p>
        </footer>
    </div>
  )
}

export default Layout
