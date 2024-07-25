import { Document, model, models, Schema, Types } from "mongoose"

interface iPost{
    comment: {}[],
    image: string,
    desc: string,
    like: [],
    user: {}
}

interface iPostData extends iPost, Document{}

const postdata = new Schema<iPostData> ({
    image:{
        type: String, 
    },
    desc:{
        type: String, 
    },
    comment:[{
        type: Types.ObjectId,
        ref:"Comments" 
    }],
    like:{
        type: [], 
    },
    
    user:{
        type: Types.ObjectId,
        ref: 'User', 
    },
},{timestamps:true})

const postmodel = models.Post || model<iPostData>("Post",postdata)

export default postmodel