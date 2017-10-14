function makeRoom(room){

document.getElementById('MainTxt').innerHTML="<b>"+room.title+"</b>"+"<br>"+room.description;
footTxt("");
document.getElementById('btn1').innerText=room.btn1txt;
document.getElementById('btn2').innerText=room.btn2txt;
document.getElementById('btn3').innerText=room.btn3txt;
document.getElementById('btn4').innerText=room.btn4txt;
document.getElementById('btn5').innerText=room.btn5txt;
document.getElementById('btn6').innerText=room.btn6txt;
document.getElementById('btn7').innerText=room.btn7txt;
document.getElementById('btn8').innerText=room.btn8txt;
document.getElementById('btn1').onclick=room.btn1fnc;
document.getElementById('btn2').onclick=room.btn2fnc;
document.getElementById('btn3').onclick=room.btn3fnc;
document.getElementById('btn4').onclick=room.btn4fnc;
document.getElementById('btn5').onclick=room.btn5fnc;
document.getElementById('btn6').onclick=room.btn6fnc;
document.getElementById('btn7').onclick=room.btn7fnc;
document.getElementById('btn8').onclick=room.btn8fnc;
}

function footTxt(newfoottxt){
	document.getElementById('FooterTxt').innerHTML="<i>"+newfoottxt+"</i>";
}
OutFront=new Object();
OutFront.title="Out in Front of the House"
OutFront.description="Ahh, good old outside. Seems to be raining a little bit. The grass is soaking wet, it looks like it has been raining for a long time. The front yard A big apple tree is fenced in the center of the yard. For some reason the front gate is locked preventing you from going anywhere else but back inside the house."
OutFront.btn1txt="go back inside";
OutFront.btn2txt="grab an apple";
OutFront.btn3txt="take a nap";
OutFront.btn4txt="look around";
OutFront.btn5txt="climb the tree";
OutFront.btn6txt="do a cartwheel";
OutFront.btn7txt="check the mail";
OutFront.btn8txt="shout at the rain";
OutFront.btn1fnc=function(){makeRoom(LivingRoom)}
OutFront.btn2fnc=function(){footTxt("Mmmm Preeettty good apple!");}
OutFront.btn3fnc=function(){footTxt("Yea right, like i'm really going to take a nap in the rain.");};
OutFront.btn4fnc=function(){footTxt("Sure is rainy out here.");};
OutFront.btn5fnc=function(){footTxt("Do you really think it's a good idea to climb a tree in the rain?");};
OutFront.btn6fnc=function(){footTxt("weeeeeeeeeeeee!");};
OutFront.btn7fnc=function(){footTxt("Oh yea, that's right. mail doesn't come on sundays.");};
OutFront.btn8fnc=function(){footTxt("You Shout at the top of your lungs STOP RAINING YOU STUPID RAIN! you even shake your fist a little.");};

LivingRoom=new Object();
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
LivingRoom.btn1fnc=function(){footTxt("You spend some minutes clicking through channels, as usual nothings on.")}
LivingRoom.btn2fnc=function(){footTxt("You look out the window, seems like its raining outside.");}
LivingRoom.btn3fnc=function(){footTxt("You snooze off for a bit, no cool dreams or anthing though.");};
LivingRoom.btn4fnc=function(){footTxt("Looks like this room could use some cleaning, I'm not gonna be the one to do it though.");};
LivingRoom.btn5fnc=function(){footTxt("Achoooooo!");};
LivingRoom.btn6fnc=function(){makeRoom(OutFront);};
LivingRoom.btn7fnc=function(){makeRoom(BedRoom);};;
LivingRoom.btn8fnc=function(){makeRoom(DiningRoom);};;
makeRoom(LivingRoom);
