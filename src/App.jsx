
import { Suspense, useState } from "react"
import Main from "./components/Main/Main"
import Banner from "./components/Banner/Banner"
import NavBar from "./components/NavBar/NavBar"
import Stats from "./components/Stats/Stats"
import GetStarted from "./components/GetStarted/GetStarted"
import PriceSection from "./components/PriceSection/PriceSection"
import FinalPart from "./components/FinalPart/FinalPart"
import Footer from "./components/Footer/Footer"

const fetchData = async () => {
  const res = await fetch ("/data.json")
  return res.json();
}



function App() {

  const mainPromise = fetchData();

  const [showCart, setShowCart] = useState("false");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
    <NavBar cartCount={cart.length} />
    <Banner />
    <Stats />
    <Suspense fallback={
<span className="loading loading-spinner loading-xs"></span>}
 >
      <Main mainPromise={mainPromise} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
    </Suspense>
    <GetStarted />
    <PriceSection />
    <FinalPart />
    <Footer />

  


    

    </>
  )
}

export default App
