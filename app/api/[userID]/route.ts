import { dbconfig } from "@/utils/dbconfig"
import usermodel from "@/utils/model/usermodel"
import { NextRequest, NextResponse } from "next/server"
import postmodel from "@/utils/model/postmodel"
import { Types } from "mongoose"


export const GET = async () => {
    try {
        await dbconfig()

        const posts = await postmodel.find()

        return NextResponse.json({
            status:200,
            message:" getting posts",
            data:posts
        })
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"could not get posts"
        })
    }
}


export const POST = async (req:NextRequest,{params}:any) => {
    try {
        await dbconfig()
       
        const {userID} = params

        const{image,desc} = await req.json()

        const users = await usermodel.findById(userID)

        if(users){
            const posts = await postmodel.create({image,desc})

            await users.post.push(new Types.ObjectId(posts._id));
            users.save();
      

            return NextResponse.json({
                status:200,
                message:"creating posts",
                data:{users,posts}
            })
        }else{
            return NextResponse.json({
                status:404,
                message:"could not get user id"
            })
        }


        
    } catch (error) {
        return NextResponse.json({
            status:404,
            message:"could not create posts"
        })
    }
}