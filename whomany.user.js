// ==UserScript==
// @name         Who-Many Userscript
// @namespace    http://tampermonkey.net/
// @version       1.2.0
// @description   Displays the number of current chats for each librarian, along with # of ops bereft of chat partners
// @author        bruce flaco jensen
// @match        https://247cooperative.libanswers.com/admin/dashboard
// @grant        none
// ==/UserScript==

/*
<div class="patronJoined">
        8:56 pm
    </div>
*/
//Set your fave colors of notification text!  The variable called color1 is for librarians with chats, color2 for number of us with no chats, and color3 for the hey-you’re-not-logged-on error. You can even use recognized color names if you prefer, like “green” or “FireBrick” or “Tomato” – see https://tinyurl.com/grpk652 -- but whatever you use make sure they’re between quotes as below:
var color1 = "#0066ff";
var color2 = "#20b22a";
var color3 = "Tomato";

(function() {
    'use strict';
    var input=document.createElement("input");
    input.type="button";
    input.value="Hit me hard to see who has how many!";
    input.onclick = repeater;
    input.setAttribute("style", "font-size:18px; color: #ff0066; position:absolute;top:120px;right:40px;");
    document.body.appendChild(input);

    function repeater() { setInterval(chats, 5000); }

    function chats()
    {
        var amion = document.getElementById("chatCoopStatus");
        var onornot = amion.getElementsByClassName("coopStatusToggle btn-statusToggle");
        var coops = onornot.length;
        var q = 0;
        for(var k=0; k < coops; k++) { var logtest = onornot[k];
                                      if(logtest.getAttribute("aria-checked") == "true") {q = q + 1;}
                                     }
        if(q == 0){ document.getElementById("s-la-dash-header-top").innerHTML = "<h4><span style='color: " + color3 + "; font-weight:bolder;'>Looks as if you might not be online?</h4>";
                   return;
                  }

        var i;
        var ops = [];
        var fullnames = [];
        var obj = {};
        var opsPop = document.getElementsByClassName("internalQueueHeader").length;
        var loggedOn = 0;
        for(var j=0; j < opsPop; j++) { if(document.getElementsByClassName("internalQueueHeader")[j].getAttribute("data-status") != "offline")
        { loggedOn = loggedOn + 1; }
                                      }
        var opsNum = loggedOn - 3;
        var lastnames = [];
        var chatPop = document.getElementById("chatQueueList").getElementsByTagName("li").length;
        if(chatPop == 0) {document.getElementById("s-la-dash-header-top").innerHTML = "<h5><span style='color:" + color2 + "; font-weight:bolder;'>Nobody is chatting right now</h5>"; return;}
        for (j = 0; j <= chatPop; j++) {var nombres = document.getElementById("chatQueueList").getElementsByClassName("patronChatOperator")[j].textContent;
                                        const namArray = nombres.split(" ");
										var lastname = namArray.pop();
                                        if (lastname == "24/7") {
                                            lastname = namArray.pop();
                                        }
                                        if (lastname == "P.") {
                                                lastname = "Lauren"
                                            }
                                        if (lastname.length == 1) {
                                            lastname = namArray.pop();
                                            if (lastname == "Tariel") {
                                                lastname = "Helen"
                                            } else if (lastname == "Lake") {
                                                lastname = "Beth"
                                            }
                                        }
                                        lastnames.push(lastname);
                                        var lastnameStr = lastnames.toString();
                                        function foo(lastnames) {
                                            var a = [], b = [], prev;
                                            lastnames.sort();
                                            for ( var i = 0; i < lastnames.length; i++ ) {
                                                if ( lastnames[i] !== prev ) {
                                                    a.push(lastnames[i]);
                                                    b.push(1);
                                                } else {
                                                    b[b.length-1]++;
                                                }
                                                prev = lastnames[i];
                                            }

                                            return [a, b];
                                        }
                                        var x;
                                        var result = foo(lastnames);
                                        var keys = result[0]; var key; //APPARENTLY, result[0] CAN SOMETIMES INCLUDE STRINGS LIKE #453471 WHICH AREN'T SHOWN IN PAGE
                                        var values = result[1];
                                        var goal = [];
                                        for (x in keys) {goal[x] = " " + keys[x] + ":" + values[x];}
                                        var chatrsNum = parseInt(result[0].length);
                                        var andString = "";
                                        var diff = opsNum - chatrsNum;
                                        if(diff == 1){andString = "</span><span style='color:" + color2 + "; font-weight:bolder;'> and one logged-in op with none.";}
                                        else if(diff > 1){andString = "</span><span style='color:" + color2 + "; font-weight:bolder;'> and " + diff + " logged-in ops with none.";}
                                        goal = goal.toString();
                                        document.getElementById("s-la-dash-header-top").innerHTML = "<h5><span style='color:" + color1 + "; font-weight:bolder;'>" + goal + " " + andString + "</span></h5>";
                                       }}})();
