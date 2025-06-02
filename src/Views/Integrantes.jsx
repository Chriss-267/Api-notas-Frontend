import React from 'react'
import '../Styles/AuthLayout.css'
import Integrante from '../components/Integrante'

function Integrantes() {
  return (
    <div className='p-4 my-2 bg-white'>
        <div className='integrantes p-2 m-6 w-4xl rounded shadow-lg'>
            <h2 className='text-white text-6xl font-bold p-2'>Nuestro <br /> <span className='font-extrabold text-8xl'>Equipo</span></h2>
        </div>

        <div className='m-6 flex justify-evenly gap-2'>
            <Integrante
            nombre = 'Christian Monterrosa'
            imagen = 'me.jpg'/>
            <Integrante
            imagen = 'angie.jpeg'
            nombre = 'Angie Lara'/>
            <Integrante
            imagen = 'hector.jpeg'
            nombre = 'Héctor Interiano'/>
            <Integrante
            imagen = 'stanley.jpeg'
            nombre = 'Stanley Vásquez'/>


        </div>
    </div>
  )
}

export default Integrantes