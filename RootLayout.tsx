import { redirect } from 'next/navigation';
import React, { FC } from 'react'
import { useSelector } from 'react-redux';

interface iRoot{
    children: React.ReactNode;
}

const RootLayout:FC<iRoot> = ({children}) => {
    const user = useSelector((state:any) => state.user)
   if(!user){
       return(<div>{children}</div>)
   }else{
      return redirect("/signin")
   }
}

export default RootLayout