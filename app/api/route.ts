import { dbconfig } from "@/utils/dbconfig"
import usermodel from "@/utils/model/usermodel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


export const GET = async () => {
    try {
        await dbconfig()

        const users = await usermodel.find()

        return NextResponse.json({
            status:200,
            message:" getting users",
            data:users
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"could not get users"
        })
    }
}


export const POST = async (req:NextRequest) => {
    try {
        await dbconfig()

        const{name,email,password} = await req.json()

        const salt = await bcryptjs.genSalt(10)
        const hashed = await bcryptjs.hash(password,salt)

        const users = await usermodel.create({name,email,password:hashed})

        return NextResponse.json({
            status:200,
            message:"creating users",
            data:users
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"could not create users"
        })
    }
}