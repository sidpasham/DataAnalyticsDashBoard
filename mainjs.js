var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.parentNode.classList.toggle("active");
        this.lastChild.classList.toggle("fa-chevron-down");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
function openNav(idnav, side) {

    if (side == "left") {
        var length = document.getElementById(idnav).style.width;
        if (length == "" || length == "0px") {
            document.getElementById(idnav).style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.getElementById("searchNav").style.height = "0%";
        }
        else {
            document.getElementById(idnav).style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
    }
    else if (side == "top") {
        var length = document.getElementById(idnav).style.height;
        if (length == "" || length == "0%") {
            document.getElementById(idnav).style.height = "100%";
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        else {
            document.getElementById(idnav).style.height = "0%";
        }
    }
}

function closeNav() {
    document.getElementById("searchNav").style.height = "0%";
    document.getElementById("main").style.marginLeft = "0";
}