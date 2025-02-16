import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import Sidebar from '../../Components/All-Dashboard/Sidebar/Sidebar'

const Dashboard = () => {
const [isLoading, setLoading] = useState(true)

useEffect(() =>{
    const timer = setTimeout(() =>{
        setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
}, [])

if (isLoading){
    return <Loading/>
}

  return (
    <div>
        <Sidebar/>
    </div>
  )
}

export default Dashboard