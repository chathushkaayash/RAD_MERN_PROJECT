import Footer from "../components/Footer";
import Homeposts from "../components/HomePosts";
import Navbar from "../components/Navbar";

const Home = () => {

  

    return (
        <><Navbar />
        <div className="px-8 md:px-[200px]">
          <Homeposts />
          <Homeposts />
          <Homeposts />
          <Homeposts />
          <Homeposts />
        </div>
        <Footer />
        </>
        
    );
  }
  
  export default Home;