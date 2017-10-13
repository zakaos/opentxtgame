function makeRoom(room){
document.getElementById('MainTxt').innerHTML=room.description;
document.getElementById('btn1').innerText=room.btn1txt;
document.getElementById('btn2').innerText=room.btn2txt;
document.getElementById('btn3').innerText=room.btn3txt;
document.getElementById('btn4').innerText=room.btn4txt;
document.getElementById('btn5').innerText=room.btn5txt;
document.getElementById('btn6').innerText=room.btn6txt;
document.getElementById('btn7').innerText=room.btn7txt;
document.getElementById('btn8').innerText=room.btn8txt;
document.getElementById('btn1').onclick=btn1fnc;
//document.getElementById('btn2').onclick=room.btn2fnc;
}
function footTxt(newfoottxt){
	document.getElementById('FooterTxt').innerHTML=newfoottxt;
}


var LivingRoom=new Object();
LivingRoom.title="The Living Room"
LivingRoom.description="You are in the main living room of the house, there are normal living room things here, a tv, a couch and chair. A door leads to the bedroom, and another door leads out to the front yard. a dining room stretches out across the hallway."
LivingRoom.btn1txt="watch tv";
LivingRoom.btn2txt="look out the window";
LivingRoom.btn3txt="take a nap";
LivingRoom.btn4txt="look around";
LivingRoom.btn5txt="sneeze";
LivingRoom.btn6txt="go out the front door";
LivingRoom.btn7txt="go into the bedroom";
LivingRoom.btn8txt="enter the dining room";
LivingRoom.btn1fnc=footTxt("tv tv tv")

//LivingRoom.btn2fnc=footTxt("couchcouchcouch");
LivingRoom.btn3fnc="";
LivingRoom.btn4fnc="";
LivingRoom.btn5fnc="";
LivingRoom.btn6fnc="";
LivingRoom.btn7fnc="";
LivingRoom.btn8fnc="";
makeRoom(LivingRoom);
