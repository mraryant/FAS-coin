
import "../styles/Presale.css"
import logo from "../assets/FAS_logo/logo_main_wht.png"
import logo1 from "../assets/FAS_logo/icon2.png"
import hvideo from "../assets/tcfvideo1.mp4"
import "../styles/Section1.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const Presale = () => {
    const [dolorValue, setDolorValue] = useState('');
    const [PFTValue, setPFTValue] = useState('');

    const pft = 0.03;

    const handleDolorChange = (event) => {
        const newDolorValue = event.target.value;
        setDolorValue(newDolorValue);

        const newPFTValue = newDolorValue / pft;
        setPFTValue(newPFTValue);
    };

    const handleFASChange = (event) => {
        const newPFTValue = event.target.value;
        setPFTValue(newPFTValue);

        const newDolorValue = newPFTValue * pft;
        setDolorValue(newDolorValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Pay with Dolor: $" + dolorValue);
        console.log("You will get PFT: " + PFTValue + " FAS");
    };
    return (
        <>
            <div id="presale-main">

                <video autoPlay loop muted className='video'>
                    <source src={hvideo} type='video/mp4' />
                </video>
                <div className='videolayer'></div>
                <div className='bottomshadow'></div>

                <div className="d-flex gap-1 align-items-center flex-column "   >
                    {/* <div id="bg">
                        <div className="bg1"></div>
                        <div className="bg2"></div>
                        <div className="bg3"></div>
                        <div className="bg4"></div>
                        <div className="bg5"></div>


                    </div> */}

                    <div id="navp">
                        <Link id="a2" to="/">
                            <img src={logo} alt="" />
                        </Link>
                        {/* <button className="rbtn">Connect</button> */}
                        <a href='#' id="a3" className='rbtn'>
                            <span className="text">Connect</span>
                        </a>
                    </div>

                    <div id="inner-contain" >
                        <div id="inner-heading">
                            <h2>Presale for FAS Begins..</h2>
                            <h2>Early access to FAS Coin</h2>
                        </div>
                        <div id="inner-cards">
                            <div className="d-flex gap-3">

                                <div className="card-1">
                                    <h6>Pre Lonch price</h6>
                                    <p>$ 0.03</p>
                                </div>
                                <div className="card-1">
                                    <h6>after Lonch price</h6>
                                    <p>$ 0.09</p>
                                </div>
                            </div>

                            <div className="d-flex gap-3">
                                <div className="card-1">
                                    <h6> 1 dolor price</h6>
                                    <p>₹ 83.268</p>
                                </div>
                                <div className="card-1">
                                    <h6>initial price</h6>
                                    <p>$ 0.003</p>
                                </div>
                            </div>
                        </div>
                        <div id="inner-inputs" >
                            <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                                <div className="mb-3 inpu-sec">
                                    <label htmlFor="dolor" className="form-label">Pay with </label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ fontWeight: 800 }}>$</span>
                                        <input
                                            id="dolor"
                                            type="number"
                                            className="form-control"
                                            placeholder="Pay in dolor"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            value={dolorValue}
                                            onChange={handleDolorChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 inpu-sec">
                                    <label htmlFor="FAS" className="form-label">You will get</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            <img id="input-img" src={logo1} alt="" />
                                        </span>
                                        <input
                                            id="FAS"
                                            type="number"
                                            className="form-control"
                                            placeholder="Get in FAS"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            value={PFTValue}
                                            onChange={handleFASChange}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className='rbtn'>
                                    <span className="text">Connect</span>
                                </button>
                            </form>

                        </div>
                        <div className=" d-flex flex-column justify-content-center align-items-center" >
                            <h5>100% Secure smart contract</h5>
                            <h5 style={{ fontSize: "3vmin" }} ><a href="">FAS Coin presale smart contract</a></h5>
                            <h6 style={{ textAlign: "center" }}>All Rights reserved. FAS Coin</h6>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Presale