import React from "react";

const ScoreShower = (props) => {
    return (
        <>
            {
                props.data === undefined ?
                    window.innerWidth > 900 ?
                        <div className="scoreShowerMain">
                            <div style={{ color: "#bababa" }} className="detailsData"></div>
                            <div style={{ color: "#61dafb" }} className="team1Data"></div>
                            <div style={{ color: "white" }} className="team2Data"></div>
                            <div style={{ color: "#bababa", fontFamily: "'Inconsolata', monospace" }} className="statusData"></div>
                        </div>
                        : <></>

                    :
                    <div className="scoreShowerMain">
                        <div style={{ color: "#bababa" }} className="detailsData">{props.data.details}</div>
                        <div style={{ color: "#61dafb" }} className="team1Data">{props.data.team1}</div>
                        <div style={{ color: "white" }} className="team2Data">{props.data.team2}</div>
                        <div style={{ color: "#bababa", fontFamily: "'Inconsolata', monospace" }} className="statusData">{props.data.statusDetail}</div>
                    </div>
            }
        </>
    )
}
export default ScoreShower; 