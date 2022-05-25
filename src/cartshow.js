import Footer from "./Footer/footer";
import Navbars from "./Header/navbar";
import Cart from "./Homepage/Product/cart";

function Contacts() {
    return (
        <div className='container-fluid'>
            <Navbars/>
            <Cart/> 
            <Footer/>
    </div>
    );
}

export default Contacts;