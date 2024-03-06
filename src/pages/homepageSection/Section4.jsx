
import '../../styles/Section4.css'
import s4icon1 from '../../assets/s4icon1.png'
import s4icon2 from '../../assets/s4icon2.png'
import s4icon3 from '../../assets/s4icon3.png'
import s4icon4 from '../../assets/s4icon4.png'
import s4img from '../../assets/s4img1.png'
import { motion } from "framer-motion"

const Section4 = () => {

  const slideVarient = {
    hidden: {
      x: -20,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    }
  }

  return (
    <>
      <div className="main4">
        <div className='homeHead'>
          <p>How To Buy</p>
        </div>
        <div className="s4main">
          <div className="s4para">
            <p >FAS Coin, the innovative digital asset with a promising future, is now within your reach. Follow these simple steps to acquire FAS Coin and become part of a revolutionary blockchain ecosystem.
            </p>
          </div>
          <div className="s4section">
            <div className="s4left">
              <div className='s4cardmain'>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}

                  className="s4card">
                  <img src={s4icon4} alt="" />
                  <p className='s4cardhead mb-0 '>Step 1</p>
                  <p style={{ fontSize: "18px", fontWeight: "700" }} className='s4cardpara'>
                    Visit FASCOIN.IO and Click on {'"Buy Token"'} Button </p>
                  <p className='s4cardpara'>Begin your journey to acquiring FAS Coin by visiting the official website at FASCOIN.IO. Once there, locate and click on the {'"Buy Token"'} button to initiate the purchase process.</p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}
                  className="s4card">
                  <img src={s4icon1} alt="" />
                  <p className='s4cardhead mb-0 '>Step 2</p>
                  <p style={{ fontSize: "18px", fontWeight: "700" }} className='s4cardpara'> Connect Your Wallet to Metamask and Use USDT </p>
                  <p className='s4cardpara'> To proceed with the purchase, {"you'll"} need to connect your digital wallet to Metamask. If you {"don't"} have Metamask installed, make sure to set it up. Once connected, use the USDT (Tether) you have in your wallet to buy FAS Coin directly on Metamask.</p>
                </motion.div>

              </div>
              <div className='s4cardmain'>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}
                  className="s4card">
                  <img src={s4icon2} alt="" />
                  <p className='s4cardhead mb-0 '>Step 3</p>
                  <p style={{ fontSize: "18px", fontWeight: "700" }} className='s4cardpara'>Choose the Number of USDT and {'"APPROVE"'} </p>
                  <p className='s4cardpara'>
                    Specify the amount of USDT you wish to exchange for FAS Coin. After selecting the desired quantity, click on the {'"APPROVE"'} button to authorize the transaction. This step ensures that the smart contract can execute the purchase securely. </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}
                  className="s4card">
                  <img style={{ height: "50px", width: "50px" }} src={s4icon3} alt="" />
                  <p className='s4cardhead mb-0 '>Step 4</p>
                  <p style={{ fontSize: "18px", fontWeight: "700" }} className='s4cardpara'>Choose the Number of USDT and {'"BUY"'} Checking Transactions </p>
                  <p className='s4cardpara'>Once the approval is successful, proceed to choose the exact quantity of USDT you want to exchange for FAS Coin. Confirm your selection and click on the {'"BUY"'} button to execute the transaction. {"It's"} important to check the transaction details and ensure accuracy before finalizing the purchase. </p>
                </motion.div>
              </div>
            </div>
            <div className="s4right">
              <img src={s4img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section4