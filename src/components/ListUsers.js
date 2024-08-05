import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"

const ListUsers=()=>{
const [users,setUsers]= useState([])
const [loading,setLoding] =useState(true)
useEffect(()=>{

axios.get(`https://jsonplaceholder.typicode.com/users`)
.then((res)=> setUsers(res.data))
.then(()=> setLoding(false))
.catch((error)=>console.log(error))
},[])


    return(
         <div>
            { loading ? <h2>  Veillez patienter Svp ... </h2> :  users.map((el,i,t)=> <CardUser el={el} />)}
         </div>
    )
}



export default ListUsers