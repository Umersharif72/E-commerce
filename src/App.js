import Layout from './Layout';
import { Routes, Route} from "react-router-dom";
import NotFound from './invalid';
import Signup from './Header/signup';
import SHOP from './Homepage/Product/shop';
import Parts from './page2/parts';
import Contacts from './page3/contact';
import ShowForm from './Header/showForm';
import Cart from './Homepage/Product/cart';
function App() {
  return (

    <div>
    
        <Routes>

          <Route index element={<Layout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="signup" element={<Signup />} />
          <Route path="shop" element={<SHOP/>} />
          <Route path="parts" element={<Parts/>} />
          <Route path="contact" element={<Contacts/>} />
          <Route path="showForm" element={<ShowForm/>} />
          <Route path="cart" element={<Cart/>} />

        </Routes>

    </div>
  );
}

export default App;
