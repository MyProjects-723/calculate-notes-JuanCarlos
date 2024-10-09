const username = document.getElementById('name');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const calculateButton = document.getElementById('btn-calculate');
const response = document.getElementById('result');
const predictButton = document.getElementById('btn-predict');


calculateButton.addEventListener("click", calculateNote);
predictButton.addEventListener("click", predictMinimumNote);

function calculateNote(event) {
    event.preventDefault(); 
    let user = username.value;
    let note1Value = Number(note1.value);
    let note2Value = Number(note2.value);
    let note3Value = Number(note3.value);
    let result = (note1Value * 0.3) + (note2Value * 0.3) + (note3Value * 0.4);
    
    if (result < 3.0) {
        response.textContent = `Hola ${user}. Reprobaste el curso :(`;
        response.style.color = 'red';
    } else if (result > 3.0) {
        response.textContent = `Hola ${user}. Aprobaste el curso :)`;
        response.style.color = 'green';
    }
}

function predictMinimumNote() {
    let note1Value = Number(note1.value);
    let note2Value = Number(note2.value);
    
    let requiredNote3 = (3.5 - (note1Value * 0.3 + note2Value * 0.3)) / 0.4;

    if (requiredNote3 < 0) requiredNote3 = 0; 
    note3.value = requiredNote3.toFixed(2); 
}



