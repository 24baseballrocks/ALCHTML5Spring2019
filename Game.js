var hammer;
var paper;
var hammerhit = 3;
Game();
function Game() {
 alert("Legend of the Game");
    
    var playerName = prompt("What is your name?");
    
    while(!confirm("Are you sure you want "+playerName+" as your name?")){
        playerName = prompt("What is you name?");
    }
    
  alert("Welcome to the land of GAM " + playerName);
    
    Prison();
    Drop();
    End();
    Free();
    
function Prison(){

        var prison1 = prompt("You suddenly wake up in prison jumpsuit. You're chained to a hairy guy. You are both holding hammers and are surrounded by rocks. The hairy guy looks at you, almost like he's hungry. \n -look around \n  -pound rocks \n -talk \n -hit chain with hammer \n -drop hammer").toLowerCase();
        
        if(prison1 == "look around" || prison1 == "look"){
                prompt("You're chained to a hairy guy. You notice a cell door on the other side of the room. You are both holding hammers and are surrounded by rocks. The hairy guy looks at you, almost like he's hungry. \n -look around \n  -pound rocks \n -talk \n -hit chain with hammer \n -drop hammer").toLowerCase();
        }
    
            else if (prison1 == "pound rocks" || prison1 == "use hammer" || prison1 == "pound"){
                prompt("You pound rocks for a few hours. After a while you realize no one is coming for you and the hairy guy is looking hungier and hungrier.");
                Prison();
                
            }
        else if (prison1 == "drop hammer" || prison1 == "drop"){
            Drop();
        }
        
    else if (prison1 == "hit" || prison1 == "hit chain with hammer"){
        Free();
    }
            
        else if (prison1 == "talk" || prison1 == "speak" || prison1 == "talk to hairy guy" || prison1 == "talk to guy"){   
            alert("You try to talk to the big guy, but all he does is grunt and slobber at you. I suppose you could talk to yourself but what's the point.");
            Prison();
        }
    else{
        alert("Porque?");
        Prison();
    }
    
    
    function Free(){
        var free1 = prompt("You pound on the chain until it shatters. You get up free to move around the room now. \n -Attack guy \n -Walk to Door \n -Drop hammer").toLowerCase();
        
        if(free1 == "attack" || free1 == "attack guy"){
        Knockout();
        }
        else if(free1 == "door" || free1 == "walk to door" || free1 == "walk"){
            prompt("You walk over to find the door unlocked. That's convenient. \n -walk out");
            
            if(free1 == "walk" || free1 == "walk out"){
                Hall();
            }
        }
        else if(free1 == "drop" || free1 == "drop hammer"){
            alert("You dropped the hammer");
            hammer = false;
        }
        else{
        alert("Porque?");
        Free();
    }
        
    }
    function HallCall(){
        Hall();
    }
    function Hall(){
        
var hall1 = prompt("You walk into a hallway leading east and west. Both ways look the same. \n -east \n -west \n -drop hammer");
        
        
         if(hall1 == "drop hammer"){
                alert("You drop the hammer. It vanishes once you drop it. Hope that doesn't come back to bite you.");
                hammer = false;
                HallCall();

            }
        
         else if(hall1 == "use hammer"){
               
                    while(hammer == true ){
                    
                        prompt("You pound on the wall with the hammer. It seems to be weakening, but so it your hammer. \n -keep going \n -go back");
                        
                    }
         
                
            
               if(hammer == false){
                    prompt("Sorry you can't do that. \n - go back");
               }
         }
    
            
         else if(hall1 == "east"){
             
            prompt("You find a dead end. Its weird though, it looks like light is coming from under the wall. /n -go back /n ?").toLowerCase();    
        }
        
         if(hall1 == "go back"){
                HallCall();
            }
        else if(hall1 == "west"){
            West();
            
        }
 
else{
        alert("Porque?");
        HallCall();
    }
    }
    function West(){
        var west1 = prompt("Not a lot down here. Just a big sleeping guard with keys. \n -knockout \n -ignore \n steal");
        if(west1 == "knockout"){
             
            if(hammer == true){
                prompt("You knock him out with your hammer and steal his keys nice. \n -search him \n -go back \n go farther east.");
                
            }
            else if(hammer == false){
                    prompt("You try knocking him out with your hands. Turns out skull beats fist. He wakes up and drags you back to your cell. Better luck next time. Without the hammer you soon fall prey to the hairy guy.");
                    End();
                }
    }
            else if(west1 == "ignore"){
                prompt("Fair enough. \n -keep walking \n - go back")
        }
        else{
        alert("Porque?");
        West();
    }
        
        
    }
    function Knockout(){
        var knockout1 = prompt("You attack the big guy with your hammer. Its really unfair and you eventually knock him out witha bonk to the head. \n -search him \n -finish him").toLowerCase();
        
        if(knockout1 == "search" || knockout1 == "search him"){
            prompt("You find his pockets are stuffed with diamonds. Dang he must have been working hard. You wish he could take them but you can't see them being useful \n walkout ");
            
             if(knockout1 == "walkout" || knockout1 == "walk out"){
                    Free();
                }
        }
            
            else if(knockout1 == "finish him" || knockout1 == "finish"){
                prompt("Sorry bro this ain't Mortal Combat. He's knocked out leave him alone. \n -search him \n -walkout");
                
                if(knockout1 == "walkout" || knockout1 == "walk out"){
                    Free();
                }
            }
        else{
        alert("Porque?");
        Knockout();
    }
            
        }
    function Drop(){
                var drop1 = prompt("The big guy watches you drop the hammer. You turn your back on the big guy. You see the chain start to move. \n -grab hammer \n -turn around \n -ignore"); 
                
                 if(drop1 == "grab" || drop1 == "grab hammer"){
                alert("You pick back up the hammer and the big guy retreats");
               Prison();
            }
                else if(drop1 == "turn"){
                    prompt("You turn to find the big guy creeping closer. You stare him down for now but you should probably grab the hammer");
                    Drop();
                }
                else if(drop1 == "ignore"){
                    alert("You feel a sharp pain in your head. You never wake up again.");
                    End();
                }
         else{
        alert("Porque?");
        Drop();
    }
            
            }
    function End(){
        var end1 = prompt("You have fallen on your journey. Do you wish to continue?"); 
        
        if(end1 == "yes"){
            alert("Thank you");
            Prison();
        }
        else if(end1 == "No"){
            alert("Goodbye");   
        } 
        else{
        alert("Porque?");
        End();
    }
    }
    
        }
    
} 