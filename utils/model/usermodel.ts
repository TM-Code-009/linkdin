import { Document, model, models, Schema, Types } from "mongoose"

interface iUser{
    name: string
    email: string
    password: string
    avatar: string
    avatarID: string
    post: {}[]
}

interface iUserData extends iUser, Document{}

const userdata = new Schema<iUserData> ({
    name:{
        type: String, 
    },
    email:{
        type: String, 
        unique:true
    },
    password:{
        type: String, 
    },
    avatar:{
        type: String, 
    },
    avatarID:{
        type: String, 
    },
    post:[{
        type: Types.ObjectId,
        ref: 'Post', 
    }],
},{timestamps:true})

const usermodel = models.User || model<iUserData>("User",userdata)

export default usermodel