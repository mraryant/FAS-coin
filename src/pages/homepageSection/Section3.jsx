
import '../../styles/Section3.css'

import Uc1 from '../../assets/u1.png'
import Uc2 from '../../assets/u2.svg'
import Uc3 from '../../assets/u3.png'
import Uc4 from '../../assets/u4.png'
import Uc5 from '../../assets/u5.png'
import Uc6 from '../../assets/u6.png'
import Uc7 from '../../assets/u7.png'
import { motion } from "framer-motion"

const Section3 = () => {

  const slideLtR = {
    hidden: {
      x: -100,
      // opacity: 0
    },
    visible: {
      x: 0,
      // opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
      },
    }
  }
  const slideRtL = {
    hidden: {
      x: 100,
      // opacity: 0
    },
    visible: {
      x: 0,
      // opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
      },
    }
  }

  return (
    <>
      <div className="container s3main" id="usecase">
        <p className="s3head">
          USECASE
        </p>
        <motion.div className="s3usecase"
          initial="hidden"
          whileInView="visible"
          variants={slideRtL}

        >
          <div className="s3left">
            <p className="s3title">
              FAS Coin Exchange
            </p>
            <p className="s3para">
              Discover seamless trading experiences with our cutting-edge exchange platform. Whether {"you're"} a seasoned trader or a newcomer, our user-friendly interface and advanced features ensure swift and secure transactions. Benefit from real-time market insights and a diverse range of trading pairs, making FAS Coin Exchange your go-to destination for cryptocurrency trading.
            </p>
          </div>
          <div className="s3right">
            <img src={Uc1} className='s3img imgmain' alt="" />
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView="visible"
          variants={slideLtR}

          className="s3usecase2" >
          <div className="s3left2">
            <p className="s3title">
              FAS Coin as a Mobile App
            </p>
            <p className="s3para">
              Ensure the highest level of security for your digital assets with the FAS Coin Crypto Wallet. Effortlessly store, send, and receive FAS Coins, providing manufacturers with an intuitive solution for managing their digital wealth and instilling confidence in the decentralized ecosystem. With robust encryption and user-friendly features, the FAS Coin Crypto Wallet sets the standard for secure and seamless transactions.


            </p>
          </div>
          <div className="s3right2">
            <img src={Uc2} className='s3img2' alt="" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideRtL}

          className="s3usecase" >
          <div className="s3left">
            <p className="s3title">
              Gaming Platform
            </p>

            <p className="s3para">
              Immerse yourself in a world of entertainment and earning potential with FAS {"Coin's"} Gaming Platform. Unlock unique in-game assets as NFTs, trade seamlessly on our integrated marketplace, and earn FAS Coins through gaming achievements. Join a vibrant community of gamers and crypto enthusiasts, combining the thrill of gaming with the benefits of blockchain technology.



            </p>
          </div>
          <div className="s3right">
            <img src={Uc3} className='s3img' alt="" />
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView="visible"
          variants={slideLtR}

          className="s3usecase2" >
          <div className="s3left2">
            <p className="s3title">
              NFT Marketplace
            </p>
            <p className="s3para">
              Experience the future of ownership in the FAS Coin NFT Marketplace. Tokenize your digital assets, from artwork to virtual real estate, and engage in a decentralized ecosystem where authenticity is paramount. With transparent transactions and a diverse range of digital collectibles, our NFT Marketplace revolutionizes how you buy, sell, and own unique digital assets.


            </p>
          </div>
          <div className="s3right2">
            <img src={Uc4} className='s3img2' alt="" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideRtL}

          className="s3usecase" >
          <div className="s3left">
            <p className="s3title">
              FAS Crypto Wallet
            </p>
            <p className="s3para">
              Elevate the security of your digital wealth with the FAS Coin Crypto Wallet. Effortlessly manage your FAS Coins, send and receive funds with confidence, and explore features like multi-currency support. Our user-centric design ensures a smooth and secure crypto storage solution, putting you in control of your financial assets with ease.


            </p>
          </div>


          <div className="s3right">
            <img src={Uc5} className='s3img' alt="" />
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView="visible"
          variants={slideLtR}

          className="s3usecase2" >
          <div className="s3left2">
            <p className="s3title">
              FAS Utility Services
            </p>
            <p className="s3para">
              FAS Coin transforms into a catalyst for efficiency in essential services. Use FAS Coins to streamline payments for energy, logistics, and more within the manufacturing industry. Our utility token simplifies the supply chain, reduces bureaucratic hurdles, and ensures a seamless flow of resources, marking a revolutionary shift in how manufacturers access and pay for critical services.


            </p>
          </div>
          <div className="s3right2">
            <img src={Uc6} className='s3img2' alt="" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideRtL}

          className="s3usecase" >
          <div className="s3left">
            <p className="s3title">
              FAS Own Blockchain
            </p>
            <p className="s3para">
              At the heart of FAS Coin lies its dedicated blockchain, providing tamper-resistant ledgers, traceability, and smart contract capabilities. This proprietary blockchain foundation enhances the reliability and efficiency of manufacturing processes, establishing FAS Coin as a trailblazer in decentralized innovation. Join us on this transformative journey, where FAS {"Coin's"} blockchain


            </p>
          </div>


          <div className="s3right">
            <img src={Uc7} className='s3img' alt="" />
          </div>
        </motion.div>


      </div>
    </>
  )
}

export default Section3