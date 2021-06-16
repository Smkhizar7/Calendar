var newDate = new Date();
function calendar(){
    //For Year NO
    var cYear = document.getElementById('year');
    cYear.innerHTML = newDate.getFullYear();

    //For Month Name
    var cMonth = newDate.getMonth();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var dmonth = document.getElementById('mname');
    dmonth.innerHTML = months[cMonth];

    //For Current Date
    var tDate = new Date().toDateString();
    var dDate = document.getElementById('date');
    dDate.innerHTML = tDate;

    var days = document.getElementById('days');
    days.innerHTML = "";
    var cYear = newDate.getFullYear();
    var lastDay = new Date(cYear,cMonth+1,0);
    var prevLastDay = new Date(cYear,cMonth,0);
    
    
    var i,j,k,l,m = 0;
    for( j = prevLastDay.getDate()-prevLastDay.getDay();j <= prevLastDay.getDate(); j++){
        days.innerHTML += "<div id='prev-date'>"+j+"</div>";
        m++;
    }
    for( i = 1; i <= lastDay.getDate(); i++ ){
        if(i === new Date().getDate() && newDate.getMonth() === new Date().getMonth() && newDate.getFullYear() === new Date().getFullYear()){
            days.innerHTML += "<div id='today'>"+i+"</div>";
        }
        else{
            days.innerHTML += "<div>"+i+"</div>";
        }
        m++;
    }
    for( k = 1;k <= 7-lastDay.getDay()-1; k++){
        days.innerHTML += "<div id='next-date'>"+k+"</div>";
        m++;
    }
    if(m < 36){
        for( l = k;l <= k+6; l++){
            days.innerHTML += "<div id='next-date'>"+l+"</div>";
        }
    }
}
function previousMonth(){
    newDate.setMonth(newDate.getMonth()-1);
    calendar();
}
function nextMonth(){
    newDate.setMonth(newDate.getMonth()+ 1);
    calendar();
}
function previousYear(){
    newDate.setFullYear(newDate.getFullYear()-1);
    calendar();
}
function nextYear(){
    newDate.setFullYear(newDate.getFullYear()+ 1);
    calendar();
}
calendar();