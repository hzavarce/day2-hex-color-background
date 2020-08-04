const button = document.getElementById('btn');
const body = document.querySelector('body');
const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.getElementById('hex-value');


let changeHex = () => {
    let hex = '#';
    
    for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * hexArr.length);
            hex += hexArr[index];
        }
    value.textContent = hex;
    body.style.backgroundColor = hex;
};

button.addEventListener('click', changeHex);