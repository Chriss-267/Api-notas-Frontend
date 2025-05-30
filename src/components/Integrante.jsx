import React from 'react'

function Integrante({imagen, nombre}) {
  return (
    <div>
        <div className='p-4 shadow-2xl rounded-lg'>
            <img src={`../${imagen}`} alt="" className='w-80 rounded-lg h-80 object-cover'/>
            <h2 className='text-center font-bold text-2xl my-4 text-amber-600'>{nombre}</h2>
        </div>
        
    </div>
  )
}

export default Integrante