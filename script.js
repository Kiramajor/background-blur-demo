let loadText = document.querySelector('#loading-text');
let bg = document.querySelector('.container');

let load = 0;
let loadInt = setInterval(loader, 30);

function loader() {
    load++
    if (load > 99){
        clearInterval(loadInt)
    }
   loadText.innerHTML = `${load}%`;
   loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
