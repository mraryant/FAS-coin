
import '../../styles/Section5.css'
import pie from '../../assets/pie.png'
import sign1 from '../../assets/dot.svg'
import sign2 from '../../assets/dot-01.svg'
import sign3 from '../../assets/dot-1.svg'
import sign4 from '../../assets/dot-2.svg'
import sign5 from '../../assets/dot-3.svg'

// import Logo2 from '../../assets/FAS_logo/FAS_logo_wht.png'
import Logo2 from '../../assets/FAS_logo/icon1.png'
import presale from '../../assets/refral.png'

import { useState } from 'react'
import Copy from "../../assets/copy.gif"
import bsc from "../../assets/bsc.webp"

const Section5 = () => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0x84C143cAa1A98F882a5979F007BD58c39B4E7607') // Replace with the text you want to copy
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Hide the popup after 2 seconds
      })
      .catch(err => {
        console.error('Copy failed: ', err);
      });
  };


  const text = "0x84C143cAa1A98F882a5979F007BD58c39B4E7607"

  return (
    <>
      <div id='tokenomics' className="main5">
        <div className='homeHead'>
          <p>Tokenomics</p>
        </div>
        <div className="s5main">
          <div className="s5left">
            <p style={{ marginBottom: 0, color: "white", fontSize: 18, fontWeight: 400, }}>
              In the FAS ecosystem, the native utility coin, FAS Coin (F), plays a pivotal role in facilitating seamless transactions, fostering governance, and powering various features within the network. A crucial aspect of the FAS Coin tokenomics is its intrinsic connection to the broader functionalities and sustainability of the project.</p>

          </div>
          <div className="s5center">
            <img src={pie} alt="" />
          </div>
          <div className="s5right">
            <div className="s5p1">
              <div style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "space-around", }}>
                <img src={sign1} alt="" />
                <p style={{ marginBottom: 0, color: "white", fontSize: 18, fontWeight: 600 }}>Investor</p>
              </div>
              <p style={{ marginBottom: 0, color: "white", fontSize: 16, fontWeight: 600 }}>20%</p>
            </div>
            <div className="s5p1">

              <div style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "space-around", }}>
                <img src={sign2} alt="" />
                <p style={{ marginBottom: 0, color: "white", fontSize: 18, fontWeight: 600 }}>Community</p>
              </div>
              <p style={{ marginBottom: 0, color: "white", fontSize: 16, fontWeight: 600 }}>40%</p>
            </div>

            <div className="s5p1">
              <div style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "space-around", }}>
                <img src={sign4} alt="" />
                <p style={{ marginBottom: 0, color: "white", fontSize: 18, fontWeight: 600 }}>Burning</p>
              </div>
              <p style={{ marginBottom: 0, color: "white", fontSize: 16, fontWeight: 600 }}>20%</p>
            </div>
            <div className="s5p1">
              <div style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "space-around", }}>
                <img src={sign3} alt="" />
                <p style={{ marginBottom: 0, color: "white", fontSize: 18, fontWeight: 600 }}>Founder And Development</p>
              </div>
              <p style={{ marginBottom: 0, color: "white", fontSize: 16, fontWeight: 600 }}>15%</p>
            </div>

            <div className="s5p1">
              <div style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center", justifyContent: "space-around", }}>
                <img src={sign5} alt="" />
                <p style={{ marginBottom: 0, color: "white", fontSize: 18, fontWeight: 600 }}>Treasury</p>
              </div>
              <p style={{ marginBottom: 0, color: "white", fontSize: 16, fontWeight: 600 }}>05%</p>
            </div>

          </div>
        </div>
        <div className="tokenomics" id='tokenomic'>
          <div className="tokediv">
            <div className="tokeleft">
              <div className="div1">
                <p>Token Name</p>
              </div>
              <div className="div2">
                <p>FAS  coin</p>
              </div>
            </div>
            <div className="tokeright">
              <div className="div1">
                <p>Symbol</p>
              </div>
              <div className="div2">
                <p>F</p>
              </div>
            </div>
          </div>
          <div className="tokediv">
            <div className="tokeleft">
              <div className="div1">
                <p>Decimal</p>
              </div>
              <div className="div2">
                <p>18</p>
              </div>
            </div>
            <div className="tokeright">
              <div className="div1">
                <p>Total Supply</p>
              </div>
              <div className="div2">
                <p>9 Billion</p>
              </div>
            </div>
          </div>
          <div className="tokediv">
            <div className="tokeleft">
              <div className="div1">
                <p>Network</p>
              </div>
              <div className="div2">
                <p>BEP20</p>
              </div>
            </div>

          </div>
        </div>

        <div className="addressmain pt-5" id='contract'>
          <div className="address">
            <span style={{ fontWeight: 500, fontSize: "20px", color: "white", letterSpacing: 1 }}>Contract Address</span>
            <p className="contract" > {text}</p>

          </div>

          <div className='d-flex gap-2' >

            <button onClick={handleCopy}><img src={Copy} style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
              Copy Address</button>
            <a target='blank' href="https://bscscan.com/address/0x84C143cAa1A98F882a5979F007BD58c39B4E7607"><button ><img src={bsc} style={{ width: 25, height: 25, marginRight: 15, }} alt="" />
              BSC Scan</button></a>
          </div>
          {copied && <div className="popup mt-3" style={{ color: "white", }}>Copied to clipboard!</div>}

        </div>



        <div className='homeHead'>
          <p>Documentation</p>
        </div>
        <div className="s7main container">
          <div className="s7left">
            <img className='s7img' src={Logo2} alt="" />
            <p className='s7head'>Whitepaper</p>
            <a href="#" target='_blank' className='rbtn'>

              <span className="text">Download</span>
            </a>
          </div>
          <div className="s7right">
            <img className='s7img1' src={presale} alt="" />
            <h5 className=" text-white ">Bonus on each Referral</h5>
            <p className='s7head'>Presale</p>
            <a href='#' className='rbtn'>

              <span className="text">Buy Token</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5