import Image from "next/image";


export default function Team(){
  return(<>
    
    <div className="p-24">
      <h1>Explore Courses By Category</h1>
      <p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>
    
    
    <div className="abcd flex flex-col gap-12 items-center ">
    <div className="abc flex items-center ">
    <div className="card flex items-center justify-center">
         <Image src="/Frame-a.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Design & Development</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
  
  <div className="card flex items-center justify-around">
         <Image src="/Frame-b.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Marketing</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    
    
    <div className="card flex items-center  justify-around ">
         <Image src="/Frame-c.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Development</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    </div>
    
    
    <div className="abc flex items-center">
    <div className="card flex items-center justify-around">
         <Image src="/Frame-g.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Business</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
  
  <div className="card flex items-center justify-around">
         <Image src="/Frame-h.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Finance</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    
    
    <div className="card flex items-center  justify-around ">
         <Image src="/Frame-i.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Consulting</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    </div>
    
    
    
    
    
    <div className="abc flex items-center justify-center">
    <div className="card flex items-center justify-around">
         <Image src="/Frame-d.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Communication</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
  
  <div className="card flex items-center justify-around">
         <Image src="/Frame-e.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Digital Marketing</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    
    
    <div className="card flex items-center  justify-around ">
         <Image src="/Frame-f.svg" alt="Photo" width={100} height={100}/>
         <div className="flex items-center flex-col">
         <h5>Self Development</h5>
         <p>50+ Courses Available</p>
         </div>
    </div>
    </div>
    
    <button className=" w-56 p-5 border border-black text-center rounded justify-center" >View All</button>
    </div>
    
    
  </>)
}