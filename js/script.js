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

let rippleEnabled = false;

document.addEventListener('mousemove', function (e) {
    if (!rippleEnabled) return;
    
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

document.getElementById('toggleButton').addEventListener('click', function () {
    rippleEnabled = !rippleEnabled;
    this.classList.toggle('active', rippleEnabled);
});


//=============== Check section is in view====================

document.addEventListener('DOMContentLoaded', () => {
    const mySkillsSection = document.getElementById('my-skills');
    const progressLines = document.querySelectorAll('.progrss-line');
    const radialBars = document.querySelectorAll('.radial-bar');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function restartAnimations() {
        // Restart progress bars
        progressLines.forEach(line => {
            line.style.animation = 'none';
            line.offsetHeight; // Trigger reflow
            line.style.animation = ''; // Reapply the animation
        });

        // Restart radial bars
        radialBars.forEach(bar => {
            const paths = bar.querySelectorAll('.path');
            paths.forEach(path => {
                const animationName = getComputedStyle(path).animationName;
                path.style.animation = 'none'; // Remove animation
                path.offsetHeight; // Trigger reflow
                path.style.animation = `${animationName} 1s linear forwards`; // Reapply the animation
            });
        });
    }

    function onScroll() {
        if (isInViewport(mySkillsSection)) {
            restartAnimations();
        }
    }

    // Initial check in case the section is already in view
    onScroll();

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);
});