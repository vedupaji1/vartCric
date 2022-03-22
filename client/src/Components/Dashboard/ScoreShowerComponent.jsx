import React from "react";
import ScoreShower from "./ScoreShower";
const ScoreShowerComponent = (props) => {
    let curIter = 0;
    const incrementCurIter = () => {
        curIter++;
    }
    return (
        <>
            <div className="scoreComponentMain">
                <div className="componentTitle">
                    {props.data.header}
                </div>
                <div className="componentDataMain">
                    {
                        props.data.data.map((data, index) =>
                        (
                            <div key={index} className="componentData">
                                {
                                    curIter < props.data.data.length ?
                                        <>
                                            <ScoreShower data={props.data.data[curIter]} />
                                            {incrementCurIter()}
                                            <ScoreShower data={props.data.data[curIter]} />
                                            {incrementCurIter()}
                                        </>
                                        :
                                        <></>
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
export default ScoreShowerComponent; 