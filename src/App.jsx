import "./App.css";
import { Course, Footer, Login, Navbar, Opinion, Section, Services } from "../src/components/index"

function App() {
  return (
    <>
      <div>
         <Navbar />
         <Section />
         <Course />
         <Services />
         <Opinion />
         <Login />
         <Footer />
      </div>
    </>
  );
}

export default App;
