import "./App.css";
import { Header } from "./components/header/Header";
import { ProductDetail } from "./pages/ProductDetail";
import { ShoppingCart } from "./components/shopping-cart/shopping-cart/ShoppingCart";

function App() {
  return (
    <main className="min-h-screen bg-white text-black font-regular text-md lg:text-lg">
      <section className="mx-auto flex max-w-md flex-col gap-6 lg:max-w-full">
        <Header />

        <section className="">
          <ProductDetail />
        </section>
        <ShoppingCart />
      </section>
    </main>
  );
}

export default App;
