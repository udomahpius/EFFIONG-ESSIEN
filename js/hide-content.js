
let closeContent = document.querySelector('.hide-me').addEventListener('click', () => {
    allowDisplayElement.classList.add('display-none')
    btnEleText.innerHTML = 'View More';
})

let commandLine = false;
let allowDisplayElement = document.querySelector('.allow-display');allowDisplayElement.classList.add('display-none');
let btnEleText = document.querySelector('.view_item');
 const displayItem = document.querySelector('.view_item').addEventListener('click', () => {

        if (commandLine === false) {
            allowDisplayElement.classList.remove('display-none');
            btnEleText.innerHTML = 'Hide Content';
            commandLine = true;
        } else if (commandLine === false) {
            closeContent()
            commandLine = true;
        } else {
            allowDisplayElement.classList.add('display-none');
            btnEleText.innerHTML = 'View More';
            commandLine = false
        }
    })



// appointment section display hidden content
    let scriptFunction = false;
    let EleHidden = document.querySelector('.appointment-hidden');
    EleHidden.classList.add('css-appointment-hidden');
   let btnInnerText = document.querySelector('.btn-display-appointment');
     

let buttomDisplayHiddenContent = document.querySelector('.bottom-btn-display-appointment').addEventListener('click', () => {
EleHidden.classList.add('css-appointment-hidden');
btnInnerText.innerHTML = "View ALL Appointments";
   })
    let btnEle = document.querySelector('.btn-display-appointment').addEventListener('click', () => {
        
        if (scriptFunction === false) {
            EleHidden.classList.remove('css-appointment-hidden');
            btnInnerText.innerHTML = "Hide Content";
            scriptFunction = true;

        } else if (scriptFunction === false) {
            buttomDisplayHiddenContent();
            scriptFunction = true;
        }
        else {
            EleHidden.classList.add('css-appointment-hidden');
            btnInnerText.innerHTML = "View ALL Appointments";
            scriptFunction = false;

        }
    })


