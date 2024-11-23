import Image from "next/image";

export default function Logo(){
  return(
  
  <> <div className="logo flex  items-center justify-between  ">
  <div className=" border border-black w-1/4 ml-2">
      <h5>Trusted by 2000+ companies worldwide.</h5></div>
    
      <div className="flex border border-black gap-8 mr-2">
        <Image src="/Logo-a.svg" alt="Logo-1" width={123.8} height={38.52}/>
         <Image src="/Logo-b.svg" alt="Logo-2" width={123.8} height={38.52}/>
          <Image src="/Logo-c.svg" alt="Logo-3" width={123.8} height={38.52}/>
          <Image src="/Logo-d.svg" alt="Logo-4" width={123.8} height={38.52}/>
         <Image src="/Logo-e.svg" alt="Logo-5" width={123.8} height={38.52}/>
          <Image src="/Logo-f.svg" alt="Logo-6" width={123.8} height={38.52}/>
       </div>
    </div>
  </>)
}