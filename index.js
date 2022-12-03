var titles = ["MyTitle","AlsoMyTitle","MyThirdTitle","TheFourth"];
var timeLaps = 1000; // time in miliseconds
var i = 0;
var ogTitle = document.title;

function mainTitle() {
    document.title = ogTitle;
}
 
function newTitle() {
    document.title = 'Come Back!';
}


function changeTitle(animType) {
    if (animType === "linear") {
        setInterval(func,1000);
        function func(){
            if (i == 4) {
                i = 0;
            }
            document.title = titles[i];
            i++;
        }
    }

    else if (animType === "leaving") {
        window.onblur = newTitle;
        window.onfocus = mainTitle;
    }
} 


changeTitle("linear");