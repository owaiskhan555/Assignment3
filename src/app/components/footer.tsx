import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[400px] w-full bg-[#043873] absolute top-[4100px] left-[1px] px-40 py-32 ">
        <div className="flex gap-[100px] ">

         <div className="w-[230px] h-[160px] flex flex-col gap-3 ">
        <Image src="/Logo.png" alt="logo" width={191} height={34}/>
        <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>
        <div className="flex flex-col gap-3 ">
            <p className="text-[#FFFFFF] font-bold leading-5 text-lg tracking-[-2%] ">Product</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Overview</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Pricing</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Customer stories</p>
        </div>
        <div className="flex flex-col gap-3 ">
            <p className="text-[#FFFFFF] font-bold leading-5 text-lg tracking-[-2%] ">Resources</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Blog</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Guides & tutorials</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Help Center</p>
        </div>
        <div className="flex flex-col gap-3 ">
            <p className="text-[#FFFFFF] font-bold leading-5 text-lg tracking-[-2%] ">Company</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">About us</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Careers</p>
            <p className="text-[#F7F7EE] font-normal text-lg tracking-[-2%] ">Media kit</p>
        </div>



        </div>
    </div>
  )
}
