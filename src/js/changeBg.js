const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
stopBtnRef.disabled = true;
const randomIntegerFromInterval = function (num) { 
    return Math.floor(Math.random() * num);
}

const onChangeBodyColor = function () { 
    const index = randomIntegerFromInterval(colors.length);
    const bgColor = colors[index];
    document.body.style.backgroundColor = bgColor;
}

let isActive = null;
const fnBtn = {
    timerId: null,
    
    onStartChange() {
        if (isActive) { 
            return;
        }
        isActive = true;
        this.timerId = setInterval(onChangeBodyColor, 1000);
        startBtnRef.disabled = true;
        stopBtnRef.disabled = false;

    },
    onStop() {
        isActive = false;
        clearInterval(this.timerId);
        startBtnRef.disabled = false;
        stopBtnRef.disabled = true;
    }
}; 


startBtnRef.addEventListener('click', fnBtn.onStartChange.bind(fnBtn));
stopBtnRef.addEventListener('click', fnBtn.onStop.bind(fnBtn));
