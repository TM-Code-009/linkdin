import { dbconfig } from "@/utils/dbconfig"
import usermodel from "@/utils/model/usermodel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


export const POST = async (req:NextRequest) => {
    try {
        await dbconfig()

        const{email,password} = await req.json()


        const users = await usermodel.findOne({email})

        if(users){
          const check = await bcryptjs.compare(password, users.password)

          if(check){
            return NextResponse.json({
                status:200,
                message:" getting users",
                data:users
            })
          }else{
            return NextResponse.json({
                status:404,
                message:"password incorrect"
            }) 
          }
        }else{
            return NextResponse.json({
                status:404,
                message:"could not get users"
            }) 
        }

        
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"could not get users"
        })
    }
}