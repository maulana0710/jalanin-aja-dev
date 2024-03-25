import { useState } from "react";
import Login from "../auth/login";
import Signup from "../auth/signup";
import CardAds from "../components/card-ads";
import CarouselComp from "../components/carousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function AboutUs({ dataTransport }) {
    const [show, setShow] = useState("");
    // console.log("🚀 ~ Index ~ show:", show);
    return (
      <div className="font-family-courier-new">
        <div className={show === 'login' || show === 'signup' ? 'opacity-25' : ''}>
        <section className="sticky-top w-100 " style={{ zIndex: 2 }}>
          <Navbar setShow={setShow} show={show}/>
        </section>
  
        <section>
          <CarouselComp />
          <div className="">
            <CardAds />
          </div>
          
          <h1>Data from PHP backend :</h1>
          <ul>
            {dataTransport.map((item) => (
              <li key={item.id}>
                {item.id} {item.name}
              </li>
            ))}
          </ul>
        </section>
  
        
  
        <section>
          <Footer />
        </section>
        </div>
        {show === 'login' && (
            <>
              <Login setShow={setShow}/>
            </>
          )}
        {show === 'signup' && (
            <>
              <Signup setShow={setShow}/>
            </>
          )}
      </div>
    );
  }