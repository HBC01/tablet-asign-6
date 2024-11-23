import { FaFacebookF } from "react-icons/fa6";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Nav(){
  return(<div className=" nav flex border-b-2 border-black justify-between">
    <div className=" flex gap-10 items-center">
      <div className="text-center border-r-2 border-black pr-10">
        <p>Phone Number: 956 742 455 678</p>
     </div>
      <div className="text-center">Email:info@ddsgnr.com</div>
    
   </div>
    <div className="flex items-center gap-3 ml-10">
      <FaFacebookF/>
      <FaTwitter/>
      <FaInstagram/>
      <FaLinkedin/>
    </div>
    
  </div>)
}