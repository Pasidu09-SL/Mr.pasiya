// =================About Me Tabs================

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// =================Side Menu================

var sidem = document.getElementById("sidemenu")
function openmenu() {
    sidem.style.right = "0";
}
function closemenu() {
    sidem.style.right = "-200px";
}


// =================Mose Movement Tracking For Ripple ================

document.addEventListener('mousemove', function (e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.pageX - 10}px`;
    ripple.style.top = `${e.pageY - 10}px`;

    document.body.appendChild(ripple);

    // Remove the ripple element after animation ends
    ripple.addEventListener('animationend', function () {
        ripple.remove();
    });
});
