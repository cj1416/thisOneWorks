//scripts are working from Project 3. Only update so far was moving "myscripts.js" into a folder named jsMain

function openSideMenu() {
    var x = document.getElementById("sideMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}

function openNewMenu() {
    var x = document.getElementById("#newMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}

function toggle() {
    var a = document.getElementById("lightMode");
    a.x = 'maincss/main' == a.x ? 'themecss/theme' : 'maincss/main'; 
    a.href = a.x + '.css';
}

function doMenu(el){
    let id = $(el).attr("id");
    let contentId = `#${id}_content`;
    $(".page_content").hide();
    $(contentId).show();
}

$(document).ready(function () {
    $(".theMenu").click(function () {
        doMenu(this)
    })
doMenu(document.getElementById("home"))
});

