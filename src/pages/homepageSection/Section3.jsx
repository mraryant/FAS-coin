
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
              FAS Exchange - Pioneering the Future of Trading
            </p>
            <p className="s3para">
              At the heart of FAS {"Coin's"} utility lies its own exchange platform - FAS Exchange. Designed to facilitate seamless and secure trading experiences, FAS Exchange leverages cutting-edge blockchain technology to ensure swift transactions and enhanced liquidity. Traders and investors can benefit from a user-friendly interface, real-time market data, and advanced trading tools. FAS Exchange aims to become a go-to platform for crypto enthusiasts, offering a diverse range of trading pairs and fostering a vibrant trading community.

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
              FAS App - Empowering Transactions on the Go
            </p>
            <p className="s3para">
              FAS Coin introduces its mobile application, FAS App, catering to the growing demand for on-the-go accessibility. FAS App extends the functionality of FAS Coin beyond traditional desktop environments, enabling users to manage their portfolios, execute transactions, and stay updated on market trends from the palm of their hands. The {"app's"} intuitive design and secure features make it an essential tool for users seeking a seamless mobile crypto experience.
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
              Gaming Platform - Integrating FAS Coin into the Gaming Universe
            </p>

            <p className="s3para">
              FAS Coin ventures into the realm of gaming, envisioning a future where digital assets play a pivotal role in virtual economies. The gaming platform powered by FAS Coin allows users to engage in in-game transactions, trade virtual assets, and even earn FAS Coins through gameplay achievements. By integrating blockchain technology, FAS Coin ensures transparency and security in gaming transactions, unlocking new possibilities for the gaming community.



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
              NFT Marketplace - Redefining Digital Ownership

            </p>
            <p className="s3para">
              FAS Coin embraces the rising trend of non-fungible tokens (NFTs) by establishing its own NFT Marketplace. Artists, creators, and collectors can leverage FAS {"Coin's"} blockchain to tokenize and trade unique digital assets. FAS NFT Marketplace provides a decentralized and secure platform for the creation, purchase, and exchange of NFTs, fostering a creative ecosystem where digital ownership is transparent and verifiable.
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
              F-Wallet - A Secure Hub for Digital Assets
            </p>
            <p className="s3para">
              As security remains paramount in the crypto space, FAS Coin introduces its crypto wallet, F-Wallet. F-Wallet ensures the safe storage and management of FAS Coins and other supported cryptocurrencies. With features like multi-factor authentication and cold storage options, F-Wallet prioritizes the security of {"user's"} digital assets, offering peace of mind in the ever-evolving landscape of digital finance.


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
              Bridging the Gap Between Crypto and Everyday Life FAS Coin expands its reach into daily life through utility services, both in desktop and app versions. Users can seamlessly integrate FAS Coin into their routine activities, whether {"it's"} making purchases, paying bills, or accessing various services. The utility services offered by FAS Coin aim to bridge the gap between the crypto world and traditional financial activities, making it a practical and versatile digital asset.
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
              FAS Chain - Forging the Path to Decentralization
            </p>
            <p className="s3para">
              The pinnacle of FAS {"Coin's"} innovation is its own blockchain - FAS Chain. Built with scalability, security, and decentralization in mind, FAS Chain lays the foundation for a robust and self-sustaining ecosystem. Developers can leverage the FAS Chain to create decentralized applications (DApps) and smart contracts, contributing to the growth and decentralization of the broader blockchain landscape.
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