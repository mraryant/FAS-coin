
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

              <h1 className='heading text-focus-in'>Welcome to <br /></h1>
              <div className='headdiv'>
                <span className='tcf '>Financial  Accounting  <br />  Standards</span>
              </div>
              <p className='s1para' >FAS Coin, led by The FAS Coin Initiative (TFCI), pioneers manufacturing transformation through decentralization and blockchain. With its dedicated blockchain, FAS Coin ensures secure transactions, user-friendly experiences, and utility services, marking a new era of efficiency and decentralized innovation in the industry.</p>
              <div className='know'>

                <a href="#" className='rbtn'>

                  <span className="text">Buy Tokens</span>
                </a>
                <a href="#" target='_blank' className='rbtn'>

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