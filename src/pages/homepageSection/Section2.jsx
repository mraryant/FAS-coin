
import '../../styles/Section2.css'
import abtimg from "../../assets/FAS_logo/abtimg.jpg"
import logo from "../../assets/FAS_logo/icon1.png"
import ten from "../../assets/refral.png"
import { motion } from "framer-motion"

const Section2 = () => {

  return (
    <>
      <div id="refral-part"  >
        <div id="ref-left">
          <div>
            <h1>Refer And Earn</h1>
            <p>Buy FAS Coin and Get 10% {"' FAS coins '"} on your Referral Address.</p>
          </div>
        </div>
        <div id="ref-right">
          <motion.img
            animate={{
              y: [0, -10, -20, 0, -10, 0, -5, 0], // Bounce effect in the y-axis
              transition: {
                duration: 2, // Duration for each bounce
                repeat: Infinity, // Repeat the animation infinitely
                repeatDelay: 1, // Delay before starting the next repetition
                ease: 'easeInOut', // Easing function
              },
            }}
            src={ten} className='bonus' alt="" />
        </div>
      </div>

      <div className="main2" id='about'>
        <div className="s2main">

          <div className="s2left">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              src={abtimg} className='s2spin rotate-center' alt="" />
            <img src={logo} className='s2coin' alt="" />

          </div>

          <div className="s2right">
            <p className='s2small'>About Us</p>
            <p className="s2heading">Explore Our Company</p>
            <p className="s2desc">
              Cryptocurrencies, since {"Bitcoin's"} inception in 2009, faced challenges in financial reporting and accountability due to the absence of standardized frameworks. FAS Coin, or Financial Accounting Standards Coin, emerged as a solution, evolving to address historical issues in transparency and accountability. Integrating established financial principles with blockchain technology, FAS Coin establishes a transparent, auditable financial framework, fostering a culture of responsible practices within the cryptocurrency community and bridging the gap between traditional finance and blockchain innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2