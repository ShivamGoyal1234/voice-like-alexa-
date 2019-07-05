const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const speechrecog = window.speechrecog || window.webkitspeechrecog;
const recog = new speechrecog();

recog.onstart() =function() {
    console.log("voice is acivated");

};

recog.onresult = function(event) {
    console.log(event);
};

//add the listener to button
btn.addEventListener('click', () => {
     recog.start();
});
