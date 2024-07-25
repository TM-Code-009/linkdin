"use client"

import { redirect } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Home from './(screen)/Home'

const page = () => {
  const user = useSelector((state:any) => state.user)
  const dispatch = useDispatch()
 
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

export default page