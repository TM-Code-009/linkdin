import { connect } from 'mongoose'
import React from 'react'

export const dbconfig = async () => {
 
    try {
        await connect("mongodb://localhost:27017/social").then(()=> {
            console.clear()
            console.log("Connected...");
            
        })
    } catch (error) {
        console.log(error)
    }

}

