import Footer from '../Footer/footer';
import Navbars from '../Header/navbar';

function Contacts() {
    return (
        <div className='container-fluid'>
            <Navbars/>
            <div id='sec6-row' className="row">
                    <div className="col-12">
                        <p id='sec6-p1'>CONTACT</p>
                        <p id='sec6-p2'>For more details
                        </p>
                        <button id='sec6-p3'>highwayautoinfo@gmail.com</button>
                        <button id='sec6-p3' style={{marginLeft:"500px"}}>wa.me/923004293626</button>
                        <div id='sec6-icons'>
                            <i id='sec6-i' class="bi bi-facebook"></i>
                            <i id='sec6-i2' class="bi bi-instagram"></i>
                            <i id='sec6-i3' class="bi bi-twitter"></i>

                        </div>

                    </div>
                </div>
            <Footer/>
    </div>
    );
}

export default Contacts;