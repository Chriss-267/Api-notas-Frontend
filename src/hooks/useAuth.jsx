import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useSWR from "swr"
import clienteAxios from "../config/axios"
import Swal from "sweetalert2"
import axios from "axios"



export const useAuth = ({middleware, url}) => {


    const token = sessionStorage.getItem('token')
    
    
    const navigate = useNavigate()


       const  [user, setUser] = useState([])
       const [authError, setAuthError] = useState(false)
    
        const getUser = async () => {

            const url = `${import.meta.env.VITE_API_URL}/api/auth/me`
            
            try {
                const {data} = await axios.get(url, {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                })
                setUser(data)
                console.log(data.id)
            } catch (error) {
                console.log(error);
                setAuthError(true)
            }
        }
    
        useEffect(() =>{
            getUser();
        }, [])
  


    const login = async (datos, setLoading) =>{
        setLoading(true);
        const url = `${import.meta.env.VITE_API_URL}/api/auth/login`

        try {

            const {data} = await axios.post(url, datos)

            if (data.access_token) {
                console.log(data)
                sessionStorage.setItem('token', data.access_token);
                await getUser();
                navigate("/")
            } else {
                alert(error)
            }
            
        } catch (error) {
             Swal.fire({
                icon: 'error',
                title: 'Credenciales Inválidas',
                text: 'Por favor ingrese los datos correctamente',
            });
            setLoading(false)
            console.log(error)
        }
        console.log(datos)
    }

    useEffect(() =>{
        if(middleware === "auth" && (!token || authError)){
            navigate("/auth")
        }

        if(middleware === "guest" && url && user?.id){
            navigate(url)
        }
    }, [user, authError, token, middleware, url, navigate])

    return {
        user,
        login,
        authError,
        getUser
    }
}