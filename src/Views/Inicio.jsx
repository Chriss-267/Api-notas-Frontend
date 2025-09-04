import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Inicio() {



  return (
    <div>
        
        <nav className='flex w-full justify-center bg-sky-950 h-[25vh]'>
            <Link to={'/materias'}>
                <section className='bg-amber-300 w-[13vw] h-full flex flex-col items-center justify-center gap-2'>
                <img decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2023/01/Microsoft_365_logo_2-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2023/01/Microsoft_365_logo_2-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/Microsoft_365_logo_2-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/Microsoft_365_logo_2-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/Microsoft_365_logo_2-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/Microsoft_365_logo_2-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2023/01/Microsoft_365_logo_2.png" data-attachment-id="18085" alt="" title="Microsoft_365_logo_2"></img>
                <p className='font-bold text-sky-800 text-lg text-center'>Microsoft <br /> 365</p>
                </section>
            </Link>
            <a href="#">
                <section className='bg-sky-800 w-[13vw] h-full flex flex-col items-center justify-center gap-2'>
                <img decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/REGISTROACADEMICO-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/REGISTROACADEMICO-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/REGISTROACADEMICO-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/REGISTROACADEMICO-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/REGISTROACADEMICO-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/REGISTROACADEMICO-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2020/11/REGISTROACADEMICO.png" data-attachment-id="881" alt="" title="REGISTROACADEMICO"></img>

                    <p className='font-bold text-white text-lg text-center'>Registro <br /> Academico</p>
                </section>
            </a>
            <a href="#">
                <section className='bg-sky-400 w-[12vw] h-full flex flex-col items-center justify-center gap-2'>
                <img decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/GRADUADOS-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/GRADUADOS-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/GRADUADOS-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/GRADUADOS-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/GRADUADOS-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/GRADUADOS-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2020/11/GRADUADOS.png" data-attachment-id="882" alt="" title="GRADUADOS"></img>
                <p className='font-bold text-white text-lg text-center'>Graduados</p>
                </section>
            </a>
            <a href="#">
                <section className='bg-amber-300 w-[13vw] h-full flex flex-col items-center justify-center gap-2'>
                <img loading="lazy" decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/PAGOS-EN-LINEA-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/PAGOS-EN-LINEA-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/PAGOS-EN-LINEA-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/PAGOS-EN-LINEA-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/PAGOS-EN-LINEA-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/PAGOS-EN-LINEA-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2020/11/PAGOS-EN-LINEA.png" data-attachment-id="883" alt="" title="PAGOS EN LINEA"/>
                    <p className='font-bold text-sky-800 text-lg text-center'>Pagos <br /> en línea</p>
                </section>
            </a>
            <Link to={'/materias'}>
                <section className='bg-sky-800 w-[12vw] h-full flex flex-col items-center justify-center gap-2'>
                <img loading="lazy" decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/BIBLIOTECA-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/BIBLIOTECA-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/BIBLIOTECA-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/BIBLIOTECA-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/BIBLIOTECA-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/BIBLIOTECA-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2020/11/BIBLIOTECA.png" data-attachment-id="884" alt="" title="BIBLIOTECA"></img>

                    <p className='font-bold text-white text-lg text-center'>Materias</p>
                </section>
            </Link>
            <a href="#">
                <section className='bg-sky-400 w-[12vw] h-full flex flex-col items-center justify-center gap-2'>
                <img loading="lazy" decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/DESCARGABLES-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/DESCARGABLES-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/DESCARGABLES-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/DESCARGABLES-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/DESCARGABLES-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/DESCARGABLES-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2020/11/DESCARGABLES.png" data-attachment-id="885" alt="" title="DESCARGABLES"></img>
                <p className='font-bold text-white text-lg text-center'>Descargables</p>
                </section>
            </a>
            <a href="#">
                <section className='bg-amber-300 w-[12vw] h-full flex flex-col items-center justify-center gap-2'>
                <img loading="lazy" decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/WHATSAPP-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/WHATSAPP-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/WHATSAPP-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/WHATSAPP-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/WHATSAPP-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/WHATSAPP-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2020/11/WHATSAPP.png" data-attachment-id="886" alt="" title="WHATSAPP"></img>
                    <p className='font-bold text-sky-800 text-lg text-center'>Asistencia <br /> WhatsApp</p>
                </section>
            </a>
            <Link to={'/maestros'}>
                <section className='bg-sky-800 w-[13vw] h-full flex flex-col items-center justify-center gap-2'>
                <img loading="lazy" decoding="async" class="vce-single-image" width="100" height="100" srcset="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/logo-microsoft-learn-320x320.png 320w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/logo-microsoft-learn-480x480.png 480w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/logo-microsoft-learn-800x800.png 800w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/logo-microsoft-learn-100x100.png 100w, https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/logo-microsoft-learn-200x200.png 2x" src="https://www.pedagogica.edu.sv/wp-content/uploads/2025/03/logo-microsoft-learn-100x100.png" data-img-src="https://www.pedagogica.edu.sv/wp-content/uploads/2022/05/logo-microsoft-learn.png" data-attachment-id="11970" alt="" title="logo-microsoft-learn"></img>

                    <p className='font-bold text-white text-lg text-center'>Maestros</p>
                </section>
            </Link>
            
        </nav>
        
    </div>
  )
}

export default Inicio
