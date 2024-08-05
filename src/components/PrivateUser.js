import { Navigate } from "react-router-dom"

const PrivateUser=({children,auth})=>{
    return(
        <div>
{
auth ? children : <Navigate to='/' />
}
        </div>
    )
}
export default PrivateUser