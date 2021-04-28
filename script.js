var s=[];
var b=[];
var f=0;
var stop="1";


var countDownDate;
if (stop=="1") {


var k = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (countDownDate!=null) {


  document.getElementById("timer").innerHTML =
  minutes + "m " + seconds + "s ";
}
    
  

}, 1000);
}

function myStopFunction() {
  clearTimeout(t_out);
}

var t_out;

function start(d){
  countDownDate =new Date().getTime()+120000000000;
var x = document.getElementById("start");
var y = document.getElementById("btn");
var z = document.getElementById("hidden");
var w = document.getElementById("timer");
x.style.display = "none";
y.style.display = "none";



if (d==1) {
    x.style.display = "block";
    
    w.style.display = "block";
t_out=setTimeout(end,1200000);

}
else if (d==2) {
    clearTimeout(t_out);
    end();
    }





function end(){
    x.style.display = "none";
    z.style.display = "block";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    for (let i = 1; i < 31; i++) {
        if (s[i]!="true")
         f++;


     }
    var point=30-f;

 if(f>4)
    window.alert( "شما با نمره "+point+"مردود شدید");

else

    window.alert( "شما با نمره "+point+"قبول شدید");
    
    clearInterval(k);



}
}

   function check(value,name){
    s[name]=value;
    var u = document.getElementById(name*1000);

    u.style.display="none";
    if (s[name]!="true") {
      var j = parseInt(s[name]);
    var e = (name-1)*4+j;
    document.getElementById(e).style.color = "red";
  
  
}
if (s[name]=="1"&&s[name]=="2"&&s[name]=="3") {
  var u = document.getElementById(name*1000);
  u.style.display = "block";
}  
}




