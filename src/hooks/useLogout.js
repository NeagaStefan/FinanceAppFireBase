
import {useState} from "react";
import {useAuthContext} from "./useAuthContext";
import {projectAuth} from "../firebase/config";

const useLogout = () =>{
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    const logout = async () =>{
        setError(null)
        setIsPending(true)

        //sing out the user

        try{
            await projectAuth.signOut()

            //dispatch logout action
            dispatch({ type:'LOGOUT'})

            setIsPending(false)
            setError(null)
        }catch (err){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    return{logout, error, isPending}
}