function ShowTime(){
    let date = new Date();
    let hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    let Session = "AM";

if (hours===0 ){
    hours = 12;
}

if(hours > 12){
    hours = hours - 12;
    Session="PM";
}

hours = (hours < 10) ? `0${hours}` : hours;
Minutes = (Minutes < 10) ? `0${Minutes}` : Minutes;
Seconds = (Seconds < 10) ? `0${Seconds}` : Seconds;

let time=`${hours}:${Minutes}:${Seconds} ${Session}`;
document.querySelector(".clock").innerText = time;




}
setInterval(ShowTime,1000);
