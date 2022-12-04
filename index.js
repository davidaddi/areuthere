let initInterval = null; // Define interval method
/* Set a flag to prevent constant "focus" event triggering (see lines marked with: ❉) 
*/
var ogTitle = document.title;
let on = false;
let delay = 100; // 3 seconds for setTimeout method
/* Change to 30000 for 30 second intervals as per OP. 3 seconds
is just for the sake of brevity 
*/
let interval = 3000;
let count = 0; // Define count with initial value 
// Define array of titles
const titles = ["", ""];

/*

|| || Anonymous event handler triggers when window loads
|| ❉ Set >on< to true which indicates the user is still on the page.
|| Event handler passes (e)vent object by default
|| Redefine initInterval() method
==========================================================
||   wrap source of setInterval() in an anonymous function so that changeTitle() 
||   can pass the parameter >titles[count++]< 
||   Note: >count< is incremented on line C.
==========================================================
||   If >count< exceeds the last index of >titles< array, reset >count<
||   Invoke changeTitle(), passing the string at the current index
||   of >titles< array
|| Repeat above every >interval< ms
|| Start go(e) in >delay< ms
*/

function linear() {
    const changeTitle = str => document.title = str; 
    window.onload = e => {
        on = true; // ❉
        const go = e => {
            initInterval = setInterval(() => {
            if (count > titles.length - 1) {
                count = 0;
            }
            changeTitle(titles[count++]); // C
            }, interval);
        }
    setTimeout(go, delay);
    }
}

/*
|| Anonymous event handler triggers when user focuses on window.
|❉ If the >on< flag is false...
||   change the title to the focused message
||   start go(e) in >delay< ms
|❉  set >on< to true. This ensures that the only "focus" event that
||   the event handler gets triggered by is when the user focuses after 
||   a "blur" event
|| Change to title to a leaving message
|| Remove the interval method

*/

function mainTitle() {
    document.title = ogTitle;
}
 
function newTitle() {
    document.title = 'Come Back!';
}

function leaving() {
    window.onblur = e => {
        on = false; // ❉
        window.onblur = newTitle;
        window.onfocus = mainTitle;
        clearInterval(initInterval);
    }
}

function areUThere(animType) {
    if(animType ==="linear") {
        linear();
    } else if(animType === "leaving") {
        leaving();
    } else {
        console.log("Error: animation type not existing; use 'leaving' or 'linear'")
    }
}
