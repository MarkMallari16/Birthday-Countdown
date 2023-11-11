function birthdayCountdown(targetDate) {
    const updateTimer = () => {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        let seconds = Math.floor(timeDifference / 1000);

        const daysCountElement = document.getElementById("daysCount");
        const hoursCountElement = document.getElementById("hoursCount");
        const minutesCountElement = document.getElementById("minutesCount");
        const secondsCountElement = document.getElementById("secondsCount");

        if (seconds > 0) {
            const days = Math.floor(seconds / (24 * 3600));
            seconds %= 24 * 3600;

            const hours = Math.floor(seconds / 3600);
            seconds %= 3600;

            const minutes = Math.floor(seconds / 60);
            seconds %= 60;

            daysCountElement.textContent = formatTime(days);
            hoursCountElement.textContent = formatTime(hours);
            minutesCountElement.textContent = formatTime(minutes);
            secondsCountElement.textContent = formatTime(seconds);

            setTimeout(updateTimer, 1000);
        } else {
            daysCountElement.textContent = "00";
            hoursCountElement.textContent = "00";
            minutesCountElement.textContent = "00";
            secondsCountElement.textContent = "00";
          
        }
    }
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    }
    const playHappyBirthdaySong = () => {
        const audio = document.getElementById("happyBirthdayAudio");
        audio.play();
    }
    updateTimer();
    playHappyBirthdaySong();
}

const birthdayDate = new Date("2023-11-16");
birthdayCountdown(birthdayDate);
