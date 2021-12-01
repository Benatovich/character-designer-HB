// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headCount = 0;
let midCount = 0;
let bottomCount = 0;
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const id = headDropdown.value;

    // increment the head change count state
    headCount++;

    // update the dom for the head
    headEl.textContent = '';
    let img = document.createElement('img');
    img.src = `./assets/${id}-head.png`;
    headEl.append(img);
    
    // update the stats to show the new count
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const id = middleDropdown.value;

    // increment the middle change count state
    midCount++

    // update the dom for the middle
    middleEl.textContent = '';
    let img = document.createElement('img');
    img.src = `./assets/${id}-middle.png`;
    img.classList.add('middle-segment');
    middleEl.append(img);

    // update the stats to show the new count
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const id = bottomDropdown.value;

    // increment the bottom change count state
    bottomCount++

    // update the dom for the bottom
    bottomEl.textContent = '';
    let img = document.createElement('img');
    img.src = `./assets/${id}-pants.png`;
    bottomEl.append(img);
    
    // update the stats to show the new count
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCatchphrase = catchphraseInput.value;
    
    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(newCatchphrase);    
    
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    
    // grab div id catchphrases (update the DOM for the catchphrases)
    // let catchphrases = document.createElement('catchphrases')
    // catchphrases.src

    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases()
});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(headCount, midCount, bottomCount); // call this function with the correct arguments
    reportEl.textContent = `${statsString}`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';

    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    for (let catchphrase of catchphraseArray) {
        const p = document.createElement('p');
        p.classList.add('catchphrase');
        p.textContent = catchphrase;
        catchphrasesEl.append(p);
    } 
    

}
