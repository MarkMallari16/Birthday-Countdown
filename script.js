function birthdayCountdown(targetDate) {
    const updateTimer = () => {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        let seconds = Math.floor(timeDifference / 1000);

        if (seconds <= 0) {
            displayMessage("0", "0", "0", "0");
            playHappyBirthdaySong();
            return;
        }

        const days = Math.floor(seconds / (24 * 3600));
        seconds %= 24 * 3600;

        const hours = Math.floor(seconds / 3600);
        seconds %= 3600;

        const minutes = Math.floor(seconds / 60);
        seconds %= 60;

        displayMessage(formatTime(days), formatTime(hours), formatTime(minutes), formatTime(seconds));
        setTimeout(updateTimer, 1000);
    };

    const displayMessage = (days, hours, minutes, seconds) => {
        const daysCountElement = document.getElementById("daysCount");
        const hoursCountElement = document.getElementById("hoursCount");
        const minutesCountElement = document.getElementById("minutesCount");
        const secondsCountElement = document.getElementById("secondsCount");

        daysCountElement.textContent = days;
        hoursCountElement.textContent = hours;
        minutesCountElement.textContent = minutes;
        secondsCountElement.textContent = seconds;
    };

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    const playHappyBirthdaySong = () => {
        const audio = document.getElementById("happyBirthdayAudio");
        audio.play();
    };

    updateTimer();

}

const birthdayDate = new Date("2023-11-16T12:00:00Z");
const currentDate = new Date();
const mainContainer = document.getElementById("main");
const resultContainer = document.getElementById("resultContainer");

if (
    birthdayDate.getDate() === currentDate.getDate() &&
    birthdayDate.getMonth() === currentDate.getMonth()
) {
    mainContainer.style.display = "none";
    resultContainer.classList.add("show-result-container");
}

birthdayCountdown(birthdayDate);