const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const fetch = require("node-fetch");

let dataOp = [];

const editString = (uneditedStr) => {
    let editedStr = "";
    let firstDigit = uneditedStr.match(/\d/);
    //console.log(uneditedStr);
    //console.log(firstDigit);
    try {
        if (firstDigit === null) {
            if (uneditedStr.indexOf(" ") === -1) {
                let uneditedStr2 = uneditedStr.substr(0, uneditedStr.substr(1, uneditedStr.length).match(/[A-Z]/).index + 1)
                editedStr = uneditedStr2 + " (" + uneditedStr.substring(uneditedStr2.length, uneditedStr.length) + ") ";
            } else {
                let tempStr = uneditedStr;
                while (tempStr.indexOf(" ") !== -1) {
                    tempStr = tempStr.substring(tempStr.indexOf(" ") + 1, tempStr.length);
                }
                
                tempStr = tempStr.substring(1, tempStr.length);
                tempStr = tempStr.substring(tempStr.match(/[A-Z]/).index, tempStr.length)
                editedStr = uneditedStr.substring(0, uneditedStr.indexOf(tempStr)) + " (" + tempStr + ") ";
            }
        } else {
            if (uneditedStr.substr(0, firstDigit.index).indexOf(" ") === -1) {
                editedStr = (uneditedStr.substr(0, uneditedStr.substr(1, firstDigit.index).match(/[A-Z]/).index + 1) + " (" + uneditedStr.substring(uneditedStr.substr(1, firstDigit.index).match(/[A-Z]/).index + 1, firstDigit.index) + ") " + " " + uneditedStr.substr(firstDigit.index))

            } else {
                let realStr = uneditedStr;
                let tempFirstDigit = realStr.match(/\d/);
                let tempStr = realStr.substring(0, tempFirstDigit.index - 1);

                while (tempStr.indexOf(" ") !== -1) {
                    tempStr = tempStr.substring(tempStr.indexOf(" ") + 1, tempStr.length);
                }

                tempStr = tempStr.substring(1, tempStr.length);
                tempStr = tempStr.substring(tempStr.match(/[A-Z]/).index, tempStr.length)
                tempStr = realStr.substring(0, tempFirstDigit.index - tempStr.length - 1) + " (" + tempStr + ") " + realStr.substring(tempFirstDigit.index, realStr.length);
                editedStr = (tempStr);
            }
        }

    } catch (error) {
        console.log(error)
    }

    return editedStr;
}

const fetchData = async () => {
    let tempData = await fetch("https://www.espn.com/cricket/scores");
    let htmlData = await tempData.text();

    const $ = cheerio.load(htmlData);
    let tempMain = $("#scoreboard-page > div");
    let tempDataOp = [];
    tempMain.each((index, elem) => {
        //console.log(index);
        let tempContainersData = {
            header: $(`#scoreboard-page > div:nth-child(${index+1}) > div.scoreCollection__header`).text(),
            data: []
        };
        let containersData = $(`#scoreboard-page > div:nth-child(${index+1}) > div.scoreCollection__content.cricket > div`)
        containersData.each((i, elem1) => {
            let tempMatchData = {
                details: $(`#scoreboard-page > div:nth-child(${index+1}) > div.scoreCollection__content.cricket > div:nth-child(${i+1}) > div.cscore_link.cscore_link--button > div > div.cscore_info-overview`).text(),
                team1: editString($(`#scoreboard-page > div:nth-child(${index+1}) > div.scoreCollection__content.cricket > div:nth-child(${i+1}) > div.cscore_link.cscore_link--button > a > ul > li.cscore_item.cscore_item--away`).text()),
                team2: editString($(`#scoreboard-page > div:nth-child(${index+1}) > div.scoreCollection__content.cricket > div:nth-child(${i+1}) > div.cscore_link.cscore_link--button > a > ul > li.cscore_item.cscore_item--home`).text()),
                statusDetail: $(`#scoreboard-page > div:nth-child(${index+1}) > div.scoreCollection__content.cricket > div:nth-child(${i+1}) > div.cscore_commentary.cscore_commentary--footer`).text()
            }
            tempContainersData.data.push(tempMatchData);
        })     
        tempDataOp.push(tempContainersData);
    });
    dataOp = tempDataOp;
    //console.log(dataOp);
    return dataOp;
}

router.get('/', async (req, res) => {
    res.json(dataOp);
    //res.json(await fetchData());
})

module.exports = {
    router: router,
    fetchData: fetchData
}