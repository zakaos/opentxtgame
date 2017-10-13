# opentxtgame
open source text game engine

# Objective:
To create a simple easy to edit text game engine in js for practice in collaboration through github

# Features:
1 Main Text window and a Button window containing 8 buttons that are used to interact with each "room"

# Structure:
Each room is an object made up of room description, 8 button labels, and 8 button functions seen as below:

```
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

```
