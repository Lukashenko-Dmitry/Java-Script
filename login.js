"use strict";
let login=prompt("Enter login, please:");
if (login == "Admin"){
	let Password=prompt("Enter Password, please:");
	if (Password=="Boss"){
		alert("Hello, boss!");
	}
	 else if (Password == "" || Password == null) {
    alert( "Canceled" );
	}
	 else {
    alert( "Wrong Password" );
	}	
}
else if (login==""||login==null){
	alert ("Canceled");
}
else {
	alert ("I don't know you");
}
