import Image from "next/image";
import { ImStarEmpty } from "react-icons/im";


export default function Blog(){
  return(<>
    <div className="blog flex items-center flex-col">
      <div className="flex flex-col gap-5">
        <h1>Courses</h1>
        <p>Your Ultimate Guide to learning</p>
      </div>
      <div className="flex justify-around w-full">
        <p><u>Popular</u></p>
        <p>Recommened</p>
        <p>Best Price</p>
      </div>
    <div className="allcards flex flex-col ">
      <div className="threecards">
        <div className="single">
        
           <Image src="/Image-a.svg" alt="Image1" width={416} height={300}/>
           <div className="flex items-center justify-between">
             <h5>Design</h5>
             <div className="flex gap-1.5 align-middle items-center "><ImStarEmpty/><p><b>5.0</b></p>
             </div>
             </div>
             <div className="pt-2 gap-1.5">
               <h5>UX/UI Design 201</h5>
               <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             <div className="flex justify-start gap-24 pt-10 items-center">
               <button className="border border-black rounded text-center p-3.5 w-40">Enrol Now</button>
            <h5>$400</h5>
             </div>
             </div>
             
             <div className="single">
        
           <Image src="/Image-b.svg" alt="Image1" width={416} height={300}/>
           <div className="flex items-center justify-between">
             <h5>Prgramming</h5>
             <div className="flex gap-1.5 align-middle items-center "><ImStarEmpty/><p><b>5.0</b></p>
             </div>
             </div>
             <div className="pt-2 gap-1.5">
               <h5>Introduction to Python</h5>
               <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             <div className="flex justify-start gap-24 pt-10 items-center">
               <button className="border border-black rounded text-center p-3.5 w-40">Enrol Now</button>
            <h5>$400</h5>
             </div>
             </div>
             
              <div className="single">
        
           <Image src="/Image-c.svg" alt="Image1" width={416} height={300}/>
           <div className="flex items-center justify-between">
             <h5>Business</h5>
             <div className="flex gap-1.5 align-middle items-center "><ImStarEmpty/><p><b>5.0</b></p>
             </div>
             </div>
             <div className="pt-2 gap-1.5">
               <h5>Data Analysis for Beginners</h5>
               <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             <div className="flex justify-start gap-24 pt-10 items-center">
               <button className="border border-black rounded text-center p-3.5 w-40">Enrol Now</button>
            <h5>$400</h5>
             </div>
             </div>
             </div>
             
             <div className="threecards">
               
                <div className="single">
        
           <Image src="/Image-d.svg" alt="Image1" width={416} height={300}/>
           <div className="flex items-center justify-between">
             <h5>Art</h5>
             <div className="flex gap-1.5 align-middle items-center "><ImStarEmpty/><p><b>5.0</b></p>
             </div>
             </div>
             <div className="pt-2 gap-1.5">
               <h5>Art Specialization</h5>
               <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             <div className="flex justify-start gap-24 pt-10 items-center">
               <button className="border border-black rounded text-center p-3.5 w-40">Enrol Now</button>
            <h5>$400</h5>
             </div>
             </div>
               
                <div className="single">
        
           <Image src="/Image-e.svg" alt="Image1" width={416} height={300}/>
           <div className="flex items-center justify-between">
             <h5>Law</h5>
             <div className="flex gap-1.5 align-middle items-center "><ImStarEmpty/><p><b>5.0</b></p>
             </div>
             </div>
             <div className=" gap-1.5">
               <h5>Rule of law</h5>
               <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             <div className="flex justify-start gap-24 pt-10 items-center">
               <button className="border border-black rounded text-center p-3.5 w-40">Enrol Now</button>
            <h5>$400</h5>
             </div>
             </div>
               
               
                <div className="single">
        
           <Image src="/Image-f.svg" alt="Image1" width={416} height={300}/>
           <div className="flex items-center justify-between">
             <h5>Tec</h5>
             <div className="flex gap-1.5 align-middle items-center "><ImStarEmpty/><p><b>5.0</b></p>
             </div>
             </div>
             <div className="pt-2 gap-1.5">
               <h5>Introduction to webflow</h5>
               <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             <div className="flex justify-start gap-24 pt-10 items-center">
               <button className="border border-black rounded text-center p-3.5 w-40">Enrol Now</button>
            <h5>$400</h5>
             </div>
             </div>
               
               
             </div>
             
             
      
    </div>
    <button className="p-3 border border-black rounded">View All Courses</button>
    </div>
  
  </>)
}