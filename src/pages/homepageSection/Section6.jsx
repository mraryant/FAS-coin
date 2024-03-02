
import '../../styles/Section6.css'
import Icon2 from '../../assets/tick.png'
import Icon1 from '../../assets/upco.png'
import roadmap from '../../assets/roadmap.png'

const Section6 = () => {
  return (
    <>
      <div className="main6">
        <div className='homeHead'>
          <p>Roadmap</p>
        </div>
        <div className="s6main">
          <div className="s6">
            <div className="s6div">
              <div className="s6left">
                <div className="s6hai">
                  <div>
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="s6data">
                    <p className="s6head">PHASE 01</p>
                    <p className='s6title'>Ideation & Token Development</p>
                    <p className="s6para">
                      •	Ideation phase to refine the concept of decentralized production.
                      <br />•	Development and structuring of the native token (FAS  ).
                      <br />•	Initial planning and conceptualization of the decentralized production ecosystem.

                    </p>
                  </div>
                </div>
                <div className="s6hai">
                  <div>
                    <img className='icon1' src={Icon1} alt="" />
                  </div>
                  <div className="s6data">
                    <p className="s6head">PHASE 02</p>
                    <p className='s6title'>ICO Marketing</p>
                    <p className="s6para">
                      •	Launch an Initial Coin Offering (ICO) or token sale event to raise funds for ecosystem development.
                      <br />•	Marketing and promotional activities to attract investors and community support.

                    </p>
                  </div>
                </div>

                <div className="s6hai">
                  <div>
                    <img className='icon1' src={Icon1} alt="" />
                  </div>
                  <div className="s6data">
                    <p className="s6head">PHASE 03</p>
                    <p className='s6title'>Staking and DApp</p>
                    <p className="s6para">
                      •	Implementation of staking functionalities for token holders to participate in network validation or governance.
                      <br />•	Development of decentralized applications (DApps) to enhance user interaction and engagement within the ecosystem.

                    </p>
                  </div>
                </div>

                <div className="s6hai">
                  <div>
                    <img className='icon1' src={Icon1} alt="" />
                  </div>
                  <div className="s6data">
                    <p className="s6head">PHASE 04</p>
                    <p className='s6title'>CMC Listing</p>
                    <p className="s6para">
                      •	Listing on CoinMarketCap (CMC) to increase visibility and accessibility to a wider audience.
                      <br />•	Increased exposure to potential investors and users in the cryptocurrency space.
                    </p>
                  </div>
                </div>




              </div>
              <div className="s6center">
                <img src={roadmap} alt="" />
              </div>
            </div>
            <div className="s6right">

              <div className="s6hai">
                <div>
                  <img className='icon1' src={Icon1} alt="" />
                </div>
                <div className="s6data">
                  <p className="s6head">PHASE 05</p>
                  <p className='s6title'>PancakeSwap Listing</p>
                  <p className="s6para">
                    •	Listing the FAS   token on PancakeSwap, a decentralized exchange (DEX) on the Binance Smart Chain.
                    <br />•	Enabling users to trade FAS   tokens in a decentralized and permission less manner.


                  </p>
                </div>
              </div>
              <div className="s6hai">
                <div>
                  <img className='icon1' src={Icon1} alt="" />
                </div>
                <div className="s6data">
                  <p className="s6head">PHASE 06</p>
                  <p className='s6title'>Mobile CRM</p>
                  <p className="s6para">
                    •	Development of a mobile Customer Relationship Management (CRM) system.
                    <br />•	Enhancing user accessibility and convenience through a mobile interface.

                  </p>
                </div>
              </div>
              <div className="s6hai">
                <div>
                  <img className='icon1' src={Icon1} alt="" />
                </div>
                <div className="s6data">
                  <p className="s6head">PHASE 07</p>
                  <p className='s6title'>Decentralized Wallet</p>
                  <p className="s6para">
                    •	Launching a secure and user-friendly decentralized wallet for storing and managing FAS   tokens.
                    <br />•	Ensuring enhanced security measures and user control over their assets.

                  </p>
                </div>
              </div>

              <div className="s6hai">
                <div>
                  <img className='icon1' src={Icon1} alt="" />
                </div>
                <div className="s6data">
                  <p className="s6head">PHASE 08</p>
                  <p className='s6title'>Listing on Global Exchange</p>
                  <p className="s6para">
                    •	Expansion to larger global exchanges for increased liquidity and accessibility.
                    <br />•	Listing on prominent centralized exchanges to reach a broader audience of traders and investors.

                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Section6