interface propstypes {
  Heading?:string;
  paragraph?:string;
  Button?:string;
  color?:string;
  div?:string;
}


export default function Herosection(props:propstypes) {
  const {Heading,Button,paragraph,color,div}=props
  return (
    <div className="flex absolute top-[92px] left-[1px] px-40 py-24 text-[#FFFFFF] ">
        <div className="flex flex-col gap-12 ">
            <div className={`${color} w-[450px] h-[200px] py-5 flex flex-col gap-5 `}>
            <h2 className="font-bold text-[45px] leading-[70px] tracking-[-2%] ">{Heading}</h2>
                <p className="text-base tracking-[-2%] ">{paragraph}</p>
                <button className="bg-[#4F9CF9] w-56 h-14 flex gpx-5 py-5 rounded-[8px] p-4 ">
                    <p className="font-medium text-lg leading-5 tracking-[-2%] text-[#FFFFFF] ">{Button} </p>
                </button>
            </div>

        </div>
          
        <div className={`${div}`}></div>      
        
    </div>
  )
}
