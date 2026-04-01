import { ToastContainer } from "react-toastify"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { toast } from "react-toastify";

const handleAddToCart = (item) => {
  setCart([...cart, item]);

  toast.success("Added to cart 🛒");
};
const handleRemove = (id) => {
  const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);

  toast.error("Removed from cart ❌");
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
