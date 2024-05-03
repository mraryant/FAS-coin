
import '../../styles/Section1.css'
import tcfback from '../../assets/tcfvideo1.mp4'
 

const Section1 = () => {



  return (

    <>
      <div className="main">
        <div className="main1">
          <video autoPlay loop muted className='video'>
            <source src={tcfback} type='video/mp4' />

          </video>
          <div className='videolayer'></div>
          <div className='bottomshadow'></div>
          <div className="trial1">

            <div className="left">
              <h1 className='heading text-focus-in'>Welcome To <br /></h1>

              <div className='headdiv'>
                <h1 className='FAS streched '>FAS</h1>
                <h2 className='coin'>COIN</h2>
              </div>
              <p className='s1para' >FAS Coin is a revolutionary digital asset on the BEP-20 network, bridging blockchain and financial accounting principles to create a transparent and standardized financial ecosystem in the crypto space. Addressing challenges of reporting and transparency, FAS Coin integrates established accounting standards into the blockchain, ensuring accuracy and paving the way for broader cryptocurrency acceptance in mainstream finance.</p>
              <div className='know'>

                <a href='http://presale.fascoin.io/' target='blank' className='rbtn'>

                  <span className="text">Buy Tokens</span>
                </a>
                <a href='https://fas-coin.gitbook.io/fas-whitepaper' target='blank' className='rbtn'>

                  <span className="text">Whitepaper</span>
                </a>



              </div>


            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Section1