function fetchData(){
    console.log("fetch data called")
}
function calculateDaysUntilDiwali(){
    //define today's date
    var today = new Date();
    //define the date of diwali
    var diwaliDate = new Date(today.getFullYear(),10, 2);
    //if diwali has already passed this year, calculate the next year
    if(today> diwaliDate){
        diwaliDate.setFullYear()(diwaliDate.getFullYear()+1);
    }
    //calculate the time difference in milliseconds
    var timeDifference = diwaliDate.getTime()-today.getTime();
    //convert the time difference to days
    var daysLeft = Math.floor(timeDifference/(1000*60*60*24));
    
    return daysLeft;
}
function updateCountdown() {
    var daysLeft = calculateDaysUntilDiwali();
    var hoursLeft = (daysLeft * 24);
    var minutesLeft = (hoursLeft * 60);
    var secondsLeft = (minutesLeft * 60);

    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `
        <div>${daysLeft} days</div>
        <div>${hoursLeft} hours</div>
        <div>${minutesLeft} minutes</div>
        <div>${secondsLeft} seconds</div>
    `;
}

