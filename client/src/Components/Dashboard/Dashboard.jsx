import React, { useState, useEffect } from "react";
import ScoreShowerComponent from "./ScoreShowerComponent";
import io from "socket.io-client";
const socket = io.connect('/');

const Dashboard = () => {
    const [mainData, setMainData] = useState(null);
    socket.on("getData", (data) => {
        setMainData(data)
    })
    socket.on("hello", (data) => {
        console.log(data);
    })
    useEffect(() => {
        const fetchData = async () => {
            let tempData = await fetch("/giveData");
            let data = await tempData.json();
            setMainData(data);
        }
        fetchData();
    }, []);
    return (
        <>
            {
                mainData === null || mainData.length === 0 ?
                    <></> :
                    <div className="dashboardMain">
                        <div className="dashboardSubMain" style={{ minHeight: window.innerHeight - 80 }} >
                            {
                                mainData.map((data, index) =>
                                (
                                    <ScoreShowerComponent key={index} data={mainData[index]} />
                                ))
                            }
                        </div>
                    </div>
            }

        </>
    )
}
export default Dashboard; 