import Nav from "@/app/components/Nav";
import Nava from "@/app/components/Nava";
import Header from "@/app/components/Header";
import Team from "@/app/components/Team";
import Layout from "@/app/components/Layout";
import Blog from "@/app/components/Blog";



import Logo from "@/app/components/Logo";
export default  function Home(){
  return(
    <div className="body">
    
     <Nav/>
      <Nava/>
      <Header/>
      <Logo/>
      <Team/>
      <Layout/>
      <Blog/>
    
    </div>
    )
  
}