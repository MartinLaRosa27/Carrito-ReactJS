import { Footer } from "./components/helpers/Footer";
import { Navbar } from "./components/helpers/Navbar";
import { ProductoProvider } from "./context/ProductoProvider";

function App() {
  return (
    <>
      <ProductoProvider>
        <Navbar />
        <Footer />
      </ProductoProvider>
    </>
  );
}

export default App;
