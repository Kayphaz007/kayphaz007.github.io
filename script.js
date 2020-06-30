/* create a "close" and append it to each list item */
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i=0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

/* click on a close button to hide the current list item */
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++ ) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

/* add a checked symbol when clicking on a list item */
var list = document.querySelector('UL');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);
/* var myNodeLis = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeLis.length; i++){
    myNodeLis[i].onclick = function(){
        var div = this;
        this.classList.toggle("checked");
    }
} */

/* create a new list item when clicking on the add button */
function newElement(){
    var li = document.createElement('li');/* create a list element tag */
    var inputValue = document.getElementById("myInput").value;/* get the value of input */
    var t = document.createTextNode(inputValue);/* create a text node */
    li.appendChild(t);/* appends text node to li tag */
    if (inputValue === '') {
        alert("You must write something!");/* alerts if value is empty */
    }
    else {
        document.getElementById("myUL").appendChild(li);/* appends li element to ul if value is'nt empty */
    }
    document.getElementById("myInput").value = "";/* to empty the input box */

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");/* create text node of a multiplication symbol */
    span.className= "close";/* sets a class name for span */
    span.appendChild(txt);/* appends text to span */
    li.appendChild(span);/* appends span to li */

    for (i = 0; i < close.length; i++){
        close[i].onclick = function () {
            var div= this.parentElement;
            div.style.display = "none";
        }
    }
}