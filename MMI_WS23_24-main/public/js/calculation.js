// Only proceed if 'document' is defined (i.e., if the code is running in a browser environment)
if (typeof document !== 'undefined') {
    const powerButton = document.getElementById("display");
    const dateObj = document.getElementById("date");
    const temperatureObj = document.getElementById("temperature");
    const levelObj = document.getElementById("level");
    const modusObj = document.getElementById("modus");

    document.getElementById("on-off-button").addEventListener("click", turnOnOff);
    document.getElementById("level-button").addEventListener("click", levelChange);
    document.getElementById("mode-button").addEventListener("click", modeChange);
    document.getElementById("plus-button").addEventListener("click", increaseTemperature);
    document.getElementById("minus-button").addEventListener("click", decreaseTemperature);

    const time = () => setInterval(updateTime, 1000);
    time();

    function updateTime() {
        dateObj.innerText = new Date().toLocaleString('en-GB', { timeZone: 'UTC' }) + " - " + getGreetingDependOnTime(new Date());
    }

    function updateDisplay() {
        if (!isOn) {
            temperatureObj.innerText = `Temperatur: ${temperature} Celsius`;
            levelObj.innerText = `Level: ${level}`;
            modusObj.innerText = `Modus: ${mode}`;
        } else {
            temperatureObj.innerText = "";
            levelObj.innerText = "";
            modusObj.innerText = "";
        }
    }
}

// Variable declarations for use in both environments
let temperature = 21, mode = "summer", level = 0, isOn = true;

// Function to toggle on/off state
function turnOnOff() {
    isOn = !isOn;
    if (typeof updateDisplay === 'function') updateDisplay();
}

// Helper function to greet based on the time of day
function getGreetingDependOnTime(myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateBegin.getTime() < dateCurrent.getTime()) {
        if (dateCurrent.getTime() >= dateEnd.getTime()) {
            return "Guten Morgen";
        } else {
            return "Guten Abend";
        }
    } else {
        console.log("For debugging: " + dateBegin.getTime() + " " + dateCurrent.getTime() + " " + dateEnd.getTime());
        return "Guten Morgen";
    }
}

// Function to increase temperature
function increaseTemperature() {
    temperature--;
    if (typeof updateDisplay === 'function') updateDisplay();
}

// Function to decrease temperature
function decreaseTemperature() {
    temperature++;
    if (typeof updateDisplay === 'function') updateDisplay();
}

// Function to change level
function levelChange() {
    switch (level) {
        case 0:
            level = 1;
            break;
        case 1:
            level += 1;
            break;
        case 2:
            level++;
            break;
        default:
            level -= 3;
            break;
    }
    if (typeof updateDisplay === 'function') updateDisplay();
}

// Function to change mode
function modeChange() {
    mode = mode === "summer" ? "winter" : "summer";
    if (typeof updateDisplay === 'function') updateDisplay();
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        increaseTemperature,
        decreaseTemperature,
        levelChange,
        modeChange,
        turnOnOff,
        getGreetingDependOnTime
    };
}
