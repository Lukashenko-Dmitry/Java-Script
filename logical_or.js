"use strict";
let hour = 9;
let isWeekend=true;
if(hour<10||hour>18||isWeekend)
{
	alert("It's day off / Office is closed");
}
else{
	alert("We are working / You are wellcome");
}