import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#043873] h-[92px] text-[#FFFFFF] flex justify-between py-4 px-[220px] items-center ">
        <div className="w-[191px] h-[34px]  ">
        <Image src="/Logo.png" alt="logo" width={144} height={34}/>
        </div>
        <div className="flex w-[737.5] h-[60px] gap-[60px] items-center justify-between">
          <ul className="flex justify-between gap-[32px] ">
            <li><Link href="/" className="font-medium text-lg leading-[23px] ">Products</Link></li>
            <li><Link href="/" className="font-medium text-lg leading-[23px] ">Solutions</Link></li>
            <li><Link href="/" className="font-medium text-lg leading-[23px] ">Resources</Link></li>
            <li><Link href="/" className="font-medium text-lg leading-[23px] ">Pricing</Link></li>
          </ul>
            <div className="bg-[#FFE492] px-6 py-4 rounded-lg flex gap-[10px] ">
              <button className="text-[#043873] font-medium text-lg leading-[23px] tracking-[-2%] ">Login</button>
            </div>
        </div>
      </nav>
    </div>
  )
}
