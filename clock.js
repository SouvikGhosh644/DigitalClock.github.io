setInterval(showTime,1000)
function showCustomDayandMonth(){
    let obj = new Date();
    let Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let Months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    let day = obj.getDay();
    let month = obj.getMonth();
    let year =  obj.getFullYear();
    let date = obj.getDate();

    let customDayMonth = date+" "+Months[month]+" "+year+" , "+ Days[day];
    document.getElementById("date").innerHTML = customDayMonth;
}

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    session = "AM";

    if (hour>12)
    {
        hour=hour-12;
        session="PM";
    }
    else if (hour<12)
    {
        session="AM";
    }
    else if (hour==0)
    {
        hour=12;
        session="AM";
    }

    hour=hour<10 ? "0"+hour : hour;
    min=min<10 ? "0"+min : min;
    sec=sec<10 ? "0"+sec : sec;

    let currentTime = hour+":"+min+":"+sec+" "+session;

    document.getElementById("clock").innerHTML=currentTime;
}

showTime();
showCustomDayandMonth();