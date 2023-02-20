const scrollDown = document.getElementById("scrollDown");
const scrollUp = document.getElementById("scrollUp");
const scrollTo = document.getElementById("scrollTo");

scrollDown.addEventListener("click", () => {
    scroll = { elm: scrollUp, invert: false };
    createScroll();
})
scrollUp.addEventListener("click", () => {
    scroll = { elm: scrollDown, invert: true };
    createScroll();
})
scrollTo.addEventListener("click", ()=> {
    const scrollValue = document.getElementById("scrollInput");
    const elemens = document.getElementById("elemens");
    
    scroll = { elm: elemens.children[scrollValue.value], invert: false }
    createScroll();
})


let scroll = {};

function createScroll() {
    console.count("scroll")
    var i = 0;
    var interval = setInterval(function () {
        let amount = scroll.invert ? -35 : 35;
        window.scrollBy(0, amount);
        i++;
        if (i > getRandomInt(3, 16)) {
            clearInterval(interval);
            if (!checkVisible(scroll.elm)) {
                setTimeout(createScroll, getRandomInt(100, 300));
            }   
            //this is a hack that creates an extra scroll when element is visible to help cases when just a small part of element is visible
            else if(typeof(scroll.done) === 'undefined') { 
                setTimeout(createScroll, getRandomInt(100, 300));
                scroll.done = true;
            }
        }
    }, 25);
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function posFromTop() {
    return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
}