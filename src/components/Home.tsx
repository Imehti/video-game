import Navbar from "./Navbar";

function Home(){
    return (
        <>
          <div className="bg-[url('./assets/home-bg.jpg')] h-screen bg-cover bg-center bg-no-repeat">
            <Navbar />
          </div>
        </>
      );
}


export default Home