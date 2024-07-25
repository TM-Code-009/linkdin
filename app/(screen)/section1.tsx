import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BsFillSaveFill, BsPersonPlusFill } from "react-icons/bs"
import { FaCreditCard, FaPlus } from "react-icons/fa"
import { useSelector } from "react-redux"


const Section1 = () => {
   const user:any = useSelector((state:any) => state.user)
    return(
       <div>

<div className="flex  flex-col p-2 py-5 min-w-[200px] lg:min-w-[230px] min-h-[100px] lg:min-h-[300px] rounded-md border bg-white">
            <div className="flex justify-center items-center flex-col gap-5 ">
                <Image src={"/"} alt="avatar" width={1000} height={1000} className="w-[70px] h-[70px] rounded-full bg-slate-500 "/>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-[18px] font-semibold">{user.name}</p>
                    <p className="text-[12px] ">Software Engineer at Codelab</p>
                </div>
            </div>
            
             <div className="mt-3 w-full hidden lg:flex ">
                <hr />
             </div>

             <div className=" hidden mt-3 w-full lg:flex justify-between items-center">
                <p className="text-[12px] "><span className="text-slate-400">Connections</span><br/>
                  Grow your network
                </p>

                <div><BsPersonPlusFill /></div>
             </div>

             <div className="mt-3 w-full hidden lg:flex">
                <hr />
             </div>

             <div className="mt-3 w-full  flex-col hidden lg:flex">
                <p className="text-[12px] text-slate-400 ">Strengthen your profile with an AI<br/>
                writing assistant
                </p>

                <div className="text-[12px] font-semi-bold items-center gap-2 hidden lg:flex"><FaCreditCard className="text-[10px] text-orange-300 "/>Try Premium for NGN0
                </div>
             </div>

             <div className="mt-3 w-full hidden lg:flex ">
                <hr />
             </div>

             <div className="text-[12px] font-semi-bold items-center gap-2 mt-3 hidden lg:flex"><BsFillSaveFill  className="text-[10px] text-slate-500 "/>Saved items
                </div>


        </div>

        <div className="rounded-md bg-white border w-[230px] min-h-[100px] mt-2 flex-col overflow-hidden hidden lg:flex ">
           <div className="p-3 flex justify-between items-center ">
              <div className="flex flex-col gap-3">
              <p className="text-blue-500 text-[12px] hover:underline cursor-pointer">Groups</p>
              <p className="text-blue-500 text-[12px] hover:underline cursor-pointer">Events</p>
              <p className="text-blue-500 text-[12px] hover:underline cursor-pointer">Followed Hashtags</p>
              </div>

              <div className="h-[30px] w-[30px] hover:bg-slate-200 rounded-full flex justify-center items-center "><FaPlus /></div>

           </div>
           
            <div className="h-[40px] w-full flex justify-center items-center hover:bg-slate-100 border-t text-[14px] text-slate-500 font-semibold">
               Discover more
            </div>
        </div>

       </div>
    )
}

export default Section1

