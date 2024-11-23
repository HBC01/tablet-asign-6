import Nav from "@/app/components/Nav";
import Nava from "@/app/components/Nava";
import Header from "@/app/components/Header";
import Team from "@/app/components/Team";
import Layout from "@/app/components/Layout";
import Blog from "@/app/components/Blog";
import Faculty from "@/app/components/Faculty";
import Testinomial from "@/app/components/Testinomial";
import Footer from "@/app/components/Footer";


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
      <Faculty/>
      <Testinomial/>
      <Footer/>
    
    </div>
    )
  
}