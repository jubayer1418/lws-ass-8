"use client"
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function CustomLink() {
    const {auth,setAuth}=useAuth()
    const route =useRouter()
    const logout =()=>{
        setAuth(null)
        route.push("/login")
    }

  return (
   <>
   {
    auth? (
        <button onClick={()=>logout()}>Logout</button>
    ) : (
        <Link href="/login">Login</Link>
    )
   }
   </>
  )
}

export default CustomLink