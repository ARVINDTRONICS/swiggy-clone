import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import "./assets/globalScss/index.scss";
import { OFFERS } from "./data";
import { CartProvider } from "./store/cartProvider";
import { HomeSection } from "./components/HomeSection";
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Header offers={OFFERS} />
        <HomeSection />
      </div>
    </CartProvider>
  );
}

export default App;
