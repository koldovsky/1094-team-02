const btn = document.querySelector(".person__release--btn");
const timer = document.querySelector(".person__release--timer");
timer.style.display = "none";

const newDateTime = new Date(2023, 11, 11, 17);
function updateCountdown() {
    const currentTime = new Date();
    const diff = newDateTime - currentTime;
    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    const count = `${d}d:${h}h:${m}m:${s}s`
    timer.innerHTML = count
}

setInterval(updateCountdown, 1000);

function toggleTimer() {
    if (timer.style.display === "none") {
        timer.style.display = "block";
        btn.innerHTML = "Hide time left to release"
    } else {
        timer.style.display = "none";
        btn.innerHTML = "Show time left to release"
    }
}
btn.addEventListener("click", toggleTimer)