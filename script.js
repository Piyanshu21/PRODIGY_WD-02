let isRunning = false;
let startTime;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Pause";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00.000";
    document.getElementById("lapsList").innerHTML = "";
    isRunning = false;
}

function updateTime() {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;

    document.getElementById("display").textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function lap() {
    const lapTime = document.getElementById("display").textContent;
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    document.getElementById("lapsList").appendChild(lapItem);
}
