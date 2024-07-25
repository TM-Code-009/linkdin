import { Document, model, models, Schema, Types } from "mongoose"

interface iComment{
    content:string
    userID:string
    post: {}
}

interface iCommentData extends iComment, Document{}

const commentdata = new Schema<iCommentData> ({
    content:{
        type: String, 
    },   
    userID:{
        type: String, 
    },   
    post:{
        type: Types.ObjectId,
        ref: 'Post', 
    },
},{timestamps:true})

const commentmodel = models.Comments || model<iCommentData>("Comments",commentdata)

export default commentmodel