
import Hero from '@/components/Hero'
import About from './about'
import Services from "@/app/services/page";
export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center h-screen">
   <Hero/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
   </div>
  )
}
