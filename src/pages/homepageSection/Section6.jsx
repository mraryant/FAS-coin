
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
                    <p className='s6title'>Foundation</p>
                    <div className="s6para">
                      <h5>1 : Project Inception </h5>
                      <p>
                        • Introduction of FAS Coin concept and vision.
                        <br />
                        • Team formation and initial research.
                      </p>
                      <h5>2 : Market Analysis and Feasibility  </h5>
                      <p>
                        • Comprehensive analysis of market trends and demand for FAS Coin.
                        <br />
                        • Feasibility study to ensure viability.
                      </p>
                      <h5>2 : Whitepaper Release   </h5>
                      <p>
                        • Publication of the detailed FAS Coin whitepaper.
                        <br />
                        • Community engagement and feedback collection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="s6hai">
                  <div>
                    <img className='icon1' src={Icon1} alt="" />
                  </div>
                  <div className="s6data">
                    <p className="s6head">PHASE 02</p>
                    <p className='s6title'>Development Kickoff</p>
                    <div className="s6para">
                      <h5>1 : Blockchain Integration </h5>
                      <p>
                        • Selection of BEP-20 network for FAS Coin.
                        <br />
                        • Commencement of blockchain integration.
                      </p>
                      <h5>2 : Smart Contract Deployment </h5>
                      <p>
                        • Creation and deployment of FAS Coin smart contracts.
                        <br />
                        • Security audits to ensure robustness.
                      </p>
                      <h5>3 : Community Building </h5>
                      <p>
                        • Launching social media channels.
                        <br />
                        • Initiating community-driven campaigns and events.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="s6hai">
                  <div>
                    <img className='icon1' src={Icon1} alt="" />
                  </div>
                  <div className="s6data">
                    <p className="s6head">PHASE 03</p>
                    <p className='s6title'>Expansion and Ecosystem Building</p>
                    <div className="s6para">
                      <h5>1 : Prototype Release </h5>
                      <p>
                        • Unveiling the first version of FAS Coin for community testing.
                        <br />
                        • Collecting feedback for further improvements.
                      </p>
                      <h5>2 : Exchange Listings </h5>
                      <p>
                        • Listing FAS Coin on major cryptocurrency exchanges.
                        <br />
                        • Enhancing liquidity and accessibility.
                      </p>
                      <h5>3 : Mobile App Development Kickoff </h5>
                      <p>
                        • Initiating the development of the FAS Coin mobile application.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* <div className="s6hai">
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
                </div> */}




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
                  <p className="s6head">PHASE 03</p>
                  <p className='s6title'>Expansion and Ecosystem Building</p>
                  <div className="s6para">
                    <h5>1 : Prototype Release </h5>
                    <p>
                      • Unveiling the first version of FAS Coin for community testing.
                      <br />
                      • Collecting feedback for further improvements.
                    </p>
                    <h5>2 : Exchange Listings </h5>
                    <p>
                      • Listing FAS Coin on major cryptocurrency exchanges.
                      <br />
                      • Enhancing liquidity and accessibility.
                    </p>
                    <h5>3 : Mobile App Development Kickoff </h5>
                    <p>
                      • Initiating the development of the FAS Coin mobile application.
                    </p>
                  </div>
                </div>
              </div>

              <div className="s6hai">
                <div>
                  <img className='icon1' src={Icon1} alt="" />
                </div>
                <div className="s6data">
                  <p className="s6head">PHASE 04</p>
                  <p className='s6title'>Diversification</p>
                  <div className="s6para">
                    <h5>1 : Gaming Platform Integration </h5>
                    <p>
                      • Exploring partnerships or developing FAS Coin integration for gaming platforms.
                    </p>
                    <h5>2 : NFT Marketplace Launch </h5>
                    <p>
                      • Introduction of FAS Coin transactions within an NFT marketplace.
                    </p>
                    <h5>3 : Crypto Wallet Integration </h5>
                    <p>
                      • Integration with popular crypto wallets for secure storage.
                    </p>
                  </div>
                </div>
              </div>


              {/* <div className="s6hai">
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
              </div> */}


            </div>
          </div>

        </div>
        <div className=" ">
          <div className="s6hai">
            <div>
              <img className='icon1' src={Icon1} alt="" />
            </div>
            <div className="s6data">
              <p className="s6head">PHASE 05</p>
              <p className='s6title'>Autonomy and Full Ecosystem</p>
              <div className="s6para">
                <h5>1 : Utility Services Launch </h5>
                <p>
                  • Introduction of desktop and app versions for utility services powered by FAS Coin.
                </p>
                <h5>2 : Own Blockchain Development </h5>
                <p>
                  • Initiating the development of FAS Coin's own blockchain for increased autonomy.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Section6