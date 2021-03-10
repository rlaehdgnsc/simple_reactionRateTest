var screen = document.querySelector("#screen");
var result = document.querySelector("#result");

var start;
var end;
var timer;

screen.addEventListener('click', (e) => {
    if (screen.classList.contains('waiting')) {
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = "Ready..."
        timer = setTimeout(() => {
            start = new Date(); // console.time/timeEnd(timer) or performance.now();
            screen.click();
        }, Math.random() * 3000 + 1000);
    } else if (screen.classList.contains('ready')) {
        if (!start) {
            clearTimeout(timer);
            screen.classList.remove('ready');
            screen.classList.add('waiting');
            screen.textContent = "You should wait until the screen is changed. click and reset";
        } else {
            screen.classList.remove('ready');
            screen.classList.add('now');
            screen.textContent = "Click"
        }

    } else if (screen.classList.contains('now')) {
        end = new Date();
        screen.classList.remove('now');
        screen.classList.add('waiting');
        result.textContent = `${Math.round((end - start) / 1000)} sec`
        screen.textContent = "Get ready for the start";
    }
});