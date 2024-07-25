import Image from "next/image"
import { AiOutlineLike } from "react-icons/ai"
import { BiRepost } from "react-icons/bi"
import { FaImage, FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa"
import { GrArticle } from "react-icons/gr"
import { IoIosSend } from "react-icons/io"



const Section2 = () => {
    const data = [
        {
            id:1,
            name:"Media",
            icons:<FaImage className="text-blue-500"/> ,
        },
        {
            id:2,
            name:"Event",
            icons:<FaRegCalendarAlt className="text-orange-500"/> ,
        },
        {
            id:3,
            name:"Write article",
            icons:<GrArticle className="text-red-400" /> ,
        },
    ]

    const post = [
        {
            id:1,
            name:"Terry",
            desc:"Software Engineer" ,
            caption:"meddldld" ,
        },
        {
            id:2,
            name:"James",
            desc:"Software Engineer" ,
            caption:"md,mdemvlew" ,
        },
        {
            id:3,
            name:"Fedora",
            desc:"Software Engineer" ,
            caption:"ewvmwem,ev," ,
        },
        
    ]
    const comment = [
        {
            id:1,
            name:"Like",
            icons:<AiOutlineLike className="text-[14px] lg:text-[18px]"/>,
        },
        {
            id:2,
            name:"Comment",
            icons:<FaRegCommentDots className="text-[14px] lg:text-[18px]" />,
        },
        {
            id:3,
            name:"Repost",
            icons:<BiRepost className="text-[14px] lg:text-[18px]" />,
        },
        
        {
            id:4,
            name:"Send",
            icons:<IoIosSend className="text-[14px] lg:text-[18px]"/>,
        },
        
    ]
    return(
        <div className="flex flex-col">
            <div className="w-full min-h-[100px] bg-white py-3 flex justify-center items-center gap-5 flex-col rounded-md border ">
           <div className="flex gap-3">
              <Image src={"/"} alt="avatar" width={1000} height={1000} className="rounded-full h-[50px] w-[50px] bg-neutral-600 border"/>

              <input type="text" placeholder="Start a post, try writing with AI" className="rounded-full pl-4 h-[40px] lg:h-[50px] w-[300px] lg:w-[470px] border"/>
           </div>

           <div className="flex gap-10 justify-center items-center ">
              {data.map((el:any) => (
                 <div key={el.id} className="flex gap-2 items-center min-w-[100px] h-[50px] rounded-md hover:bg-slate-100 justify-center p-4">
                    {el.icons}
                    <p className="text-[14px]">{el.name}</p>
                 </div>
              ))}
           </div>
           </div>

           <div className="w-full mt-10">
             <hr />
           </div>

           <div  className=" mt-10 gap-4 flex flex-col">
              {
                post.map((el:any) => (
                    <div key={el.id} className="min-h-[300px] min-w-[150px] lg:min-w-[200px] border p-4 flex flex-col justify-center items-center">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex gap-2 ">
                            <Image src="" alt=" " width={1000} height={1000}className="w-[50px] h-[50px] object-cover bg-black rounded-full"/>
                            <div className="flex gap-1 flex-col">
                                <div className="flex flex-col">
                                <p className="font-semibold text-[14px]">{el.name}</p>
                                <p className="text-[14px]">{el.desc}</p>
                                </div>
                                <p>{el.caption}</p>
                            </div>
                            </div>
                            <p>Follow</p>
                        </div>
                        <div className="h-[200px] w-[200px] lg:w-full bg-black mt-5">

                        </div>

                        <div className="flex gap-3 lg:gap-7 mt-10">
                           {
                            comment.map((el:any) => (
                                <div key={el.id} className="flex text-[14px] lg:text-[16px] gap-2 items-center font-semibold">
                                    {el.icons}
                                    {el.name}
                                </div>
                            ))
                           }
                        </div>
                    </div>
                ))
              }
           </div>
        </div>
    )
}

export default Section2