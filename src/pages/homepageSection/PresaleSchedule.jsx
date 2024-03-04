
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
                        gap: "40px",
                        justifyContent: "space-evenly",
                    }}
                >

                    <CardPresale
                        title="FAS Coin"
                        round="Round 1"
                        duration="27 Feb - 4 March "
                        price="Price : 0.0011$"

                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 2"
                        duration="5 March - 12 march"
                        price="Price : 0.0033$"
                    />
                    <CardPresale
                        title="FAS Coin"
                        round="Round 3"
                        duration="13 March - 20 March "
                        price="Price : 0.0045$"
                    />
                </div>

            </div>

        </>
    )
}

export default PresaleSchedule