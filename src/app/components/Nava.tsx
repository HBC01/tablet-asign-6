import Image from "next/image";
import Link from "next/link";


export default function Nava(){
  return(<div className="nava ">
    <div className="flex items-center justify-around mt-2 ">    
      <div><Image src="/Column.svg" alt="logo" width={130.6} height={41}/></div>
      <div className="flex items-center bg-white  gap-5 bg-white p-5 m-2   rounded">
        <Link href="#">Home</Link>
        <Link href="#">Courses</Link>
        <Link href="#">Services</Link>
        <Link href="#">Achievements</Link>
        <Link href="#">AboutUs</Link>
        <Link href="#">Testimonial</Link>
      </div>
      <div className="flex gap-6 ">
        <button className="border-2 border-black  text-center pr-10 pl-10">Login</button>
        <button className="border-2 border-black text-center pr-10 pt-2 pb-2 pl-10 text-white bg-black ">SignUp</button>
      </div>
      
      
      
    </div>
      
    
  </div>)
}