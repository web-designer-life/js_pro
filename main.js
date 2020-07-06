let bob = document.querySelector('.bob'),
    count = 0,
    i = 0,
    go = document.getElementById('#go'),
    reset = document.getElementById('#reset'),
    flyInterval,
    animate = true;

let flyAnimate = function() {
    flyInterval = requestAnimationFrame(flyAnimate);
    if (i == 0 && count < 100) {
        count = count + 5;
        bob.style.top = count + 'px';
    } else if (i == 0 && count == 100){
        i = 1;
    }
    if (i == 1 && count > 0) {
        count = count - 5;
        bob.style.top = count + 'px';
    } else if (i == 1 && count == 0){
        i = 0;
    }
}

go.addEventListener('click', function() {
    if (animate) {
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = false;
    } else {
        animate = true;
        cancelAnimationFrame(flyInterval);
    }
});

reset.addEventListener('click', function() {
    cancelAnimationFrame(flyInterval);
    count = 0;
    bob.style.top = 0 + 'px';
    animate = true;
});