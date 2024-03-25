import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// component
import CarouselComp from "./components/carousel";
import CardAds from "./components/card-ads";
import CardTransport from "./components/card-transport";
import Footer from "./components/footer";
import Login from "./auth/login";
import Signup from "./auth/signup";
import AboutUs from "./pages/about-us";
import Logout from "./auth/logout";
import Navigationbar from "./components/navbar";
// component
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
// console.log('check sessionData: ', sessionData);
  useEffect(() => {
    setSessionData(JSON.parse(sessionStorage.getItem("key")));
    // Fetch data from the server using Axios
    axios
      .get("http://localhost:8000/transport.php")
      .then((response) => {
        // Update component state with fetched data
        setData(response.data.data);
        // console.log(response);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this effect runs once, like componentDidMount()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Index dataTransport={data} sessionData={sessionData} />}
        />
        <Route path="/App" element={<App />} />
        <Route path="/about-Us" element={<AboutUs dataTransport={data} />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
function Index({ dataTransport, sessionData }) {
  const [show, setShow] = useState("");
  // console.log("🚀 ~ Index ~ show:", show);
  return (
    <div className="font-family-courier-new">
      <div
        className={show === "login" || show === "signup" ? "opacity-25" : ""}
      >
        <section className="sticky-top w-100 " style={{ zIndex: 2 }}>
          <Navigationbar setShow={setShow} show={show} sessionData={sessionData} />
        </section>

        <section>
          <CarouselComp />
          <div className="">
            <CardAds />
          </div>
          <div className="container">
            <CardTransport
              dataTransport={dataTransport}
              show={show}
              setShow={setShow}
            />
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </div>

      {/* login or signup handler */}
      {show === "login" && (
        <>
          <Login setShow={setShow} />
        </>
      )}
      {show === "signup" && (
        <>
          <Signup setShow={setShow} />
        </>
      )}
      {/* login or signup handler */}
    </div>
  );
}

export default App;
