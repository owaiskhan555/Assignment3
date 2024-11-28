import Image from "next/image";
import Herosection from "./components/herosection";

export default function page() {
  return (
    <div>
      <div>
      <div className="min-h-screen bg-[#043873] ">
       <Herosection Heading="Get More Done with whitepace" paragraph="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks" Button="Try Whitepace free" div="bg-[#C4DEFD] flex gap-1 w-[650px] h-[400px] " />
      </div>

       <div className="w-[1440px] h-[1500px] absolute top-[700px] left-[1px] ">
        <div>
       <Herosection Heading="Project Management" color="text-[#212529] w-[370px] mr-[20px] h-[270px] " paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note." Button="Get Started" div="bg-[#C4DEFD] ml-[30px] flex gap-1 w-[550px] h-[420px] "/>
        </div>
        <div className="absolute top-[700px] left-[110px] flex gap-[100px] ">
          <div className=''>
          <Image src='/WorkTogether.png' alt="logo" width={500} height={660} />
          </div>
          <div className='absolute -top-[150px] left-[500px] '>
       <Herosection Heading="Work together" color="text-[#212529] w-[500px] mr-[20px] h-[170px]  " paragraph="With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others." Button="Get Started" 
        />
        </div>
        </div>
        <div className="h-[600px] w-full bg-[#043873] absolute top-[1300px] ">
        <Herosection Heading="Use as Extension" color="text-[#FFFFFF] w-[550px] mr-[20px] h-[150px]  " paragraph="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes." Button="Let&apos;s Go" div="bg-[#C4DEFD] flex -mt-[50px] w-[550px] h-[400px] "
        />
      </div>


       </div>
        <div className="h-[600px] w-full absolute top-[2500px] ">
        <Herosection Heading="Customise it to your needs" color="text-[#212529] absolute left-[800px] w-[390px] h-[250px]" paragraph="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API." Button="Let&apos;s Go" div="bg-[#C4DEFD] absolute flex w-[550px] h-[400px] "
        />

      <div className="h-[400px] w-full bg-[#043873] text-[#FFFFFF] flex flex-col items-center justify-center absolute top-[650px] gap-[40px] ">
        <div className="w-[900px]   ">
        <h1 className="font-bold text-6xl leading-[97px] ">Your work, everywhere you are</h1>
        <p className="font-normal text-lg text-center trackingp-[-2%] ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        </div>
        
        <button className="bg-[#4F9CF9] w-40 h-14 flex justify-center items-center px-2 py-4 rounded-[8px] p-4 ">
        <p className="font-medium text-lg leading-5 tracking-[-2%] text-[#FFFFFF] ">Try Taskey </p>
        </button>
      </div>
        <div className="h-[600px] w-full absolute top-[950px] flex flex-col justify-center items-center gap-[80px] ">
            <h1 className="font-bold text-6xl leading-[97px] ">Our sponsors</h1>
            <div className="w-[1000px] flex justify-between  ">
              <Image src='/Group.png' alt="group-logo" width={50} height={50}/>
              <Image src='/Microsoft.png' alt="Microsoft-logo" width={200} height={50}/>
              <Image src='/Slack.png' alt="Slack-logo" width={200} height={50}/>
              <Image src='/Google.png' alt="Google-logo" width={200} height={50} />
            </div>
        </div>

        </div>

      </div>
     
    </div>
    
  )
}
