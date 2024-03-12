
import PropTypes from "prop-types";
import "../styles/CardPresale.css"
import { motion } from "framer-motion"
const CardPresale = ({ title, duration, round, price, isbuy, link }) => {
    return (
        <>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="price-card"  >

                <div className="price-card-header">
                    <h3> {round}</h3>
                    <p style={{ fontSize: "30px", fontWeight: "bold" }}> <span style={{ fontSize: "40px" }} >{title}</span>  </p>
                </div>

                <div className="price-card-features">
                    <ul>
                        <div id="features" className="d-flex gap-2">
                            <li >{duration}</li>
                        </div>
                    </ul>
                </div>

                <div id="pricing">
                    <h1>
                        <span style={{ fontWeight: 500, display: "flex", justifyContent: "center", fontSize: "55%", color: "white", letterSpacing: 1 }}>{price}</span>
                    </h1>
                </div>
                <button type="submit" style={{ fontSize: "18px", width: "100%", margin: "0 auto" }} className=' rbtn s4button' id='btn1'
                    onClick={() => window.open(link , '_blank')}
                >
                    {isbuy}
                </button>

            </motion.div>
        </>
    )
}

CardPresale.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    round: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    isbuy: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
export default CardPresale





