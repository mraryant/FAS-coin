import "../../styles/Parteners.css"

import partener1 from "../../assets/pr1.svg"
import partener2 from "../../assets/pr2.png"
import partener3 from "../../assets/pr3.png"
import partener4 from "../../assets/pr4.svg"
// import partener5 from "../../assets/pr4.svg"


const Parteners = () => {


  return (
    <>
      <div id="parteners-main" >
        <p id="H1"> Strategic Parteners   </p>
        <div id="parteners-main2" >
          <img src={partener1} alt="Partner1" />
          <img src={partener2} alt="Partner2" />
          <img src={partener3} alt="Partner3" />
          <img src={partener4} alt="Partner4" />
          {/* <img src={partener5} alt="Partner5" /> */}

        </div>
      </div>
    </>
  );


}

export default Parteners