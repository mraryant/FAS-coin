
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
            <p >Buying FAS coin couldn’t be easier. Here’s how to buy FAS coin with Ethereum using Uniswap, Trust Wallet, or Metamask. If you don’t have any Ethereum, simply download Trust Wallet and buy some instantly with a debit or credit card!
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
                  <p className='s4cardpara'>Download FAS   Wallet and set
                    up a wallet by following the
                    instructions.</p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}
                  className="s4card">
                  <img src={s4icon1} alt="" />
                  <p className='s4cardhead mb-0 '>Step 2</p>
                  <p className='s4cardpara'>You can buy ETH or USDT by
                    selecting the currency you
                    want to buy, tapping “Buy,” and
                    making a purchase with your
                    debit or credit card.</p>
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
                  <p className='s4cardpara'>The funds are now in your
                    wallet!</p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}
                  className="s4card">
                  <img style={{ height: "50px", width: "50px" }} src={s4icon3} alt="" />
                  <p className='s4cardhead mb-0 '>Step 4</p>
                  <p className='s4cardpara'>Now, You can connect this wallet to Metamask And Use The USDT You Have To Buy FAS Token On Metamask.</p>
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