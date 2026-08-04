import axios from 'axios';


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 3000,
    // baseURL:`http://localhost:3000`,
    withCredentials:true 
})




export async function register({username , email , password}) {
    
        const response = await api.post("/api/auth/register",
            { username , email , password} )

        return response.data

}

// login with username and email
// async function login({username , email , password}) {
    
//     try {
//         const response = await api.post("/api/auth/login",
//             { username , email , password} )
//         return response.data

//     } catch (err) {
//         console.log(err)
//     }
// }




// login without username 
export async function login({ email , password}) {
    
        const response = await api.post("/api/auth/login",
            {  email , password} )
        return response.data

 
}



export async function logout() {
    
        const response = await api.get("/api/auth/logout" )
        return response.data

}

export async function getMe() {
    
        const response = await api.get("/api/auth/get-me" )
        return response.data


}
