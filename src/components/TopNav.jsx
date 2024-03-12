

import '../styles/TopNav.css'
import Logo from "../assets/FAS_logo/logo_main_wht.png"


const Topnav = () => {

  return (
    <>
      <nav

        className=" navbar navbar-expand-lg navbar-dark topnav">
        <div className="container-fluid navfluid" >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
            <a href="#"> <img src={Logo} style={{ height: 35 }} alt="" /></a>
            {/* <p style={{marginBottom:0, color:"white", fontWeight:"bold", fontFamily:"Manrope", fontSize:14, wordSpacing:1.5}}>THE CRYPTO FACTORY</p> */}
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="ng collapse navbar-collapse" id="navbarSupportedContent">


            <form className="d-flex ngflex">
              <ul

                className="navbar-nav  mb-2 mb-lg-0 ngflex" >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#usecase">Usecase</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#roadmap">Roadmap</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-nowrap " href="#presaleschedule-main">Presale Schedule</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tokenomics">Tokenomics</a>
                </li>
              </ul>
              <a href='http://presale.fascoin.io/' target='blank' className='rbtn'>

                <span className="text"> Buy Token</span>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Topnav