require('dotenv').config()
const moment = require('moment')
const URL = `https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&units=metric&appid=` + process.env.SECRET

async function getData() {
    const response = await fetch(URL, {
        method: 'GET'
    })
    const data = await response.json()
    return data;
}

function checkData() {
    getData()
    .then((obj) => {
        for (let i = 0; i < obj.list.length; i++) {
            let perHour = obj.list[i]
            let date = perHour.dt_txt
            if (date.includes('00:00:00')) {
                console.log(moment(date).format('ddd, DD MMM YYYY') + `: ${perHour.main.temp}°C`);
            }
        }
    })
}

// console.log(checkData(data));
checkData()