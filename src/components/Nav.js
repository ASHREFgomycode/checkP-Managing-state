import { Link } from "react-router-dom"

const Nav =({auth,setAuth})=>{
    return(
        <ul>
            <Link to={'/'}> <li > Home </li> </Link> 
            {
                auth ? 
                 <>
                <Link to={'/ListUsers'}> <li> Users </li></Link>   
                <button onClick={()=> setAuth(false)}>LogOut</button>
                </> :
                <button onClick={()=> setAuth(true)}>Login</button>
                
            }
           
           
        </ul>
    )
}
export default Nav