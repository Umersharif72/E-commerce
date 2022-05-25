import '../Footer/iconbox.css'
function Iconbox() {
    return (
        <div className='container-fluid'>
        <div id='icon' className="row">
            <div id='icon-1' className='col-4'>
            <img  src={require('../images/icon-1.png')} alt="icon-1" />
            </div>
            <div id='icon-2' className='col-4'>
            <img  src={require('../images/icon-2.png')} alt="icon-1" />
            </div>
            <div id='icon-3' className='col-4'>
            <img  src={require('../images/icon-3.png')} alt="icon-1" />
            </div>
        </div>

    </div>
    );
}

export default Iconbox;