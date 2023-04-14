/*

font size toggle

function increaseSize() {
    var el1 = document.body;
    el1.classList.toggle("large-font-size")
    var el2 = document.getElementById("network")
    el2.classList.toggle("large-image")
}

*/

/*responsive navbar*/

/*toggle adding/removing "responsive" class to .topnav when fa fa bar icon is clicked*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
} 