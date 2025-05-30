import axios from "axios";
import { createContext, useEffect, useState } from "react"


export const NotasContext = createContext()

export const NotasProvider = ({children}) => {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background:  "#fff",
          color:  "#000",
          borderRadius: "1rem",
          border: "none",
          zIndex: 60,
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          zIndex: 50,
        },
      };

     const  [user, setUser] = useState([])

    const getUser = async () => {
        const token = sessionStorage.getItem('token')
        const url =  `${import.meta.env.VITE_API_URL}/api/auth/me`
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
        }
    }

    useEffect(() =>{
        getUser();
    }, [])


    const [materias, setMaterias] = useState([])

    
    
    const getSubjects = async () => {
        const url = `${import.meta.env.VITE_API_URL}/api/subjects` ; 
        try {
            const {data} = await axios.get(url)
            setMaterias(data.subjects)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getSubjects();
    }, [])

    const [modal, setModal] = useState(false)
        
    const handleClickModal = () =>{
        setModal(true)
     }

     const teachers = async () =>{

        const url = `${import.meta.env.VITE_API_URL}/api/teachers`

        try {
            const {data} = await axios.get(url)
        } catch (error) {
            console.log(error)
        }
       

     }


    return (
        <NotasContext.Provider value={{user, 
            materias, 
            setMaterias,
            getSubjects,
            customStyles,
            setModal,
            modal,
            handleClickModal,
            getSubjects,
            getUser,



        }}>
            {children}
        </NotasContext.Provider>
    )
}