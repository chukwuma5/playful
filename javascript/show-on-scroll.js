//request Animation process; This is a method we can use to repeatedly check our pages to see if elements are visible while making sure we donot overload the browser by checking all over again like 10000 times
//To set up our request animation frame we apply it to a variable(to enable fall back functions for browsers that donot support it)
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
//Here we saying that scroll should be the window.request animation frame method or if it's not available use a function that waits 1000 sec per mins before calling a callback
var elementsToShow = document.querySelectorAll('.show-on-scroll');
//This will look for all element show on scroll and return them as an array we can loop through
function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    //This loops check if elements is in the view port if so add class is visible
    scroll(loop);
    //We need this function to keep on running so we make use of scroll variable,to pass the function as a call back,i.e as soon as request animation frame arrises it repeats the function and update class as needed.
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826(used to push the function we set up)
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
