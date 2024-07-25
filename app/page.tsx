"use client"

import { redirect } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Home from './(screen)/Home'

const Page = () => {
  const user:any = useSelector((state:any) => state.user)
 
  if(user === null){
    return redirect("/signin")
  }else{
    return (
      <div>
        <Home/>
      </div>
    )
  }
}

export default Page