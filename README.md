# opentxtgame
open source text game engine

# Playable here:
https://htmlpreview.github.io/?https://github.com/zakaos/opentxtgame/blob/master/index.html

# Objective:
To create a simple easy to edit text game engine in js for practice in collaboration through github

# Features:
1 Main Text window containing a room title, a descriptive paragraph, and a line of footer text that provides feedback. A Button window containing buttons that are used to interact with each "room"

# Structure:
Each room is an object made up of a room title, room description, button labels, and button functions seen as below:
Changing rooms is accomplished through the makeRoom function, that sets all the room's variables to the display and buttons.

```
var OutFront= {
	title: "Out in Front of the House",
	description: "Ahh, good old outside. Seems to be raining a little bit. The grass is soaking wet, it looks like it has been raining for a long time. The front yard A big apple tree is fenced in the center of the yard. For some reason the front gate is locked preventing you from going anywhere else but back inside the house.",
	btnTxt: ["go back inside", "grab an apple", "take a nap", "look around", "climb the tree",
		"do a cartwheel", "check the mail", "shout at the rain"],
	btnFnc: ['makeRoom(LivingRoom)', 'footTxt(\'Mmmm Preeettty good apple!\')', 
		'footTxt(\'Yea right, like I am really going to take a nap in the rain.\')', 
		'footTxt(\'Sure is rainy out here.\')', 'footTxt(\'Do you really think it iss a good idea to climb a tree in the rain?\')',
		'footTxt(\'weeeeeeeeeeeee!\')', 'footTxt(\'Oh yea, that is right. Mail does not come on sundays.\')',
		'footTxt(\'You Shout at the top of your lungs STOP RAINING YOU STUPID RAIN! you even shake your fist a little.\')']
};
// from Title; to Bedroom, OutFront, DiningRoom, EndRoom
var LivingRoom= {
	title: "The Living Room",
	description: "You are in the main living room of the house, there are normal living room things here, a tv, a couch and chair. A door leads to the bedroom, and another door leads out to the front yard. a dining room stretches out across the hallway.",
	btnTxt: ["watch tv", "look out the window", "take a nap", "look around", "sneeze", "go out the front door", 
		"go into the bedroom", "enter the dining room", "You lose"],
	btnFnc: ['footTxt(\'You spend some minutes clicking through channels, as usual nothings on.\')', 'footTxt(\'You look out the window, seems like its raining outside.\')', 
		'footTxt(\'You snooze off for a bit, no cool dreams or anthing though.\')', 'footTxt(\'Looks like this room could use some cleaning, I am not gonna be the one to do it though.\')', 
		'footTxt(\'Achoooooo!\')', 'makeRoom(OutFront)', 'makeRoom(BedRoom)', 
		'makeRoom(DiningRoom)', 'makeRoom(DefeatRoom)']
};

```
