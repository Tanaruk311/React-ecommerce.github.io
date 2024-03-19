
import { Routes,Route } from "react-router-dom"
import PageOne from "./pages/PageOne"
import Products from "./pages/Products"
import CheckoutForm from "./components/CheckoutForm"
import Payment from "./pages/Payment"

function App() {



  return (
    <>
    <Routes>
      <Route path="/" element={<PageOne />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="Products/Payment" element={<Payment />}></Route>   
    </Routes>
    </>
  )
}

export default App
