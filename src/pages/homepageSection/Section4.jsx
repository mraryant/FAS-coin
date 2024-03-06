
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
                  <p className='s4cardpara'>
                    Visit Our website FASCOIN.IO & Click On Buy Token Button</p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}
                  className="s4card">
                  <img src={s4icon1} alt="" />
                  <p className='s4cardhead mb-0 '>Step 2</p>
                  <p className='s4cardpara'>Now, You can connect your wallet to Metamask And Use The USDT You Have To Buy FAS Token On Metamask.</p>
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
                  <p className='s4cardpara'>Choose Number Of USDT {'"APPROVE"'} </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={slideVarient}
                  className="s4card">
                  <img style={{ height: "50px", width: "50px" }} src={s4icon3} alt="" />
                  <p className='s4cardhead mb-0 '>Step 4</p>
                  <p className='s4cardpara'>Choose Number Of USDT {'"BUY"'} & Checking TRANSACTIONS</p>
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