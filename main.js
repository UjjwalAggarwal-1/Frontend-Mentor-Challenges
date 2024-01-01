var allCards = document.getElementsByClassName("card");

let myPanel = null;

var transformAmount = 5;


for (var i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('mouseover', function () {
        myPanel = this;

        myPanel.onmousemove = transformPanel;
        myPanel.onmouseenter = handleMouseEnter;
        myPanel.onmouseleave = handleMouseLeave;

    });
}

function transformPanel(mouseEvent) {

    let rect = myPanel.getBoundingClientRect();

    const centerX = rect.left + window.scrollX + myPanel.clientWidth / 2;
    const centerY = rect.top + window.scrollY + myPanel.clientHeight / 2;
    const percentX = (mouseEvent.pageX - centerX) / (myPanel.clientWidth / 2);
    const percentY = -((mouseEvent.pageY - centerY) / (myPanel.clientHeight / 2));

    myPanel.style.transform = "perspective(500px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
    
    myPanel.querySelector(" a > div").style.transform = "perspective(900px) translateZ(150px) scale(0.8) rotateY(" + percentX * transformAmount*2 + "deg) rotateX(" + percentY * transformAmount*2 + "deg)";
}

function handleMouseEnter() {
}

function handleMouseLeave() {
    myPanel.style.transform = "perspective(500px) rotateY(0deg) rotateX(0deg)";
}
