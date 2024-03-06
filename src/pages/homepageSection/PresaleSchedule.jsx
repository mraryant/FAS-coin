
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
                        gap: "40px",

                    }}
                >

                    <CardPresale
                        title="FAS Coin"
                        round="Round 1"
                        duration="27 Feb - 10 March "
                        price="Price : 0.0011$"

                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 2"
                        duration="11 mar - 17 Mar"
                        price="Price : 0.0033$"
                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 3"
                        duration="18 Mar - 24 Mar  "
                        price="Price : 0.0045$"
                    />

                    <CardPresale
                        title="FAS Coin"
                        round="Round 4"
                        duration="25 Mar - 31 Mar "
                        price="Price :  0.0075$"
                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 5"
                        duration=""
                        price="Listing..."
                    />
                </div>

            </div>

        </>
    )
}

export default PresaleSchedule