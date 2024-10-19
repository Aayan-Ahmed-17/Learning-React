import HeroSection from "./HeroSection"
import Sidebar from "./Sidebar";

function MainContent() {

  return (
  <main className="md:grid md:grid-cols-12 p-10 px-20 h-screen">
    <HeroSection/>
    {/* <Sidebar /> */}
  </main>
  )
}

export default MainContent;
