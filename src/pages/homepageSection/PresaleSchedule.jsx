
import CardPresale from '../../components/CardPresale'
import "../../styles/CardPresale.css"
const PresaleSchedule = () => {

    return (
        <>

            <div id="presaleschedule-main"
                style={{
                    margin: "40px 0px 40px 0px ",
                    display: "flex",
                    color: "white",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,

                }}
            >
                <h1>Presale Schedule</h1>
                <div id="presaleschedulecards"
                    style={{
                        width: "100%",
                        display: 'flex',
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "30px",

                    }}
                >

                    <CardPresale
                        title="FAS Coin"
                        round="Round 1"
                        duration="27 Feb - 10 March "
                        price="Price : $0.0011 "
                        isbuy="Total funds Raised - 42,765$"
                        link=" "

                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 2"
                        duration="11 mar - 17 Mar"
                        price="Price : $0.0033 "
                        isbuy="Total funds Raised - 78332$"
                        link=""
                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 3"
                        duration="18 Mar - 24 Mar  "
                        price="Price : $0.0045 "
                        isbuy="Total funds Raised - 93489$"
                        link=" "
                    />

                    <CardPresale
                        title="FAS Coin"
                        round="Round 4"
                        duration="25 Mar - 31 Apr "
                        price="Price :  $0.0075"
                        isbuy="Total funds Raised - 132480$"
                        link=" "
                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 5"
                        duration="May 1- Jun 25"
                        price=" Price : $0.0090"
                        isbuy="Buy Now"
                        link="http://presale.fascoin.io/ "
                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 6"
                        duration="Jun 26"
                        price="Coin Listing"
                        isbuy="Coming soon ..."
                        link="  "
                    />
                     
                </div>

            </div>

        </>
    )
}

export default PresaleSchedule