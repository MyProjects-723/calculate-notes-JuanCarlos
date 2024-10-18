const username = document.getElementById('name');
const data1 = document.getElementById('note1');
const data2 = document.getElementById('note2');
const data3 = document.getElementById('note3');
const btnCalculate = document.getElementById('btn-calculate');
const predict = document.getElementById('btn-predict');
const response = document.getElementById('Answer');

btnCalculate.addEventListener('click', calculateNote);
predict.addEventListener('click',calculatepredict );

function calculateNote() {
  let user = username.value;
  let note1 = Number(data1.value);
  let note2 = Number(data2.value);
  let note3 = Number(data3.value);
  let result = ((note1 * .3) + (note2 * .3) + (note3 * .4));

  if (result >1.0  && result <= 3.5) {
    response.textContent = `Hola ${user}, su nota definitiva es: ${result}, perdió la materia.`;
  } else if (result >= 3.6 && result <= 4.5) {
    response.textContent = `Hola ${user}, su nota definitiva es: ${result}, ganó la materia.`;
  } else if (result >= 4.6 && result <= 5) {
    response.textContent = `Hola ${user}, su nota definitiva es: ${result}, su nota es sobresaliente.`;
  } else {
    response.textContent = `Hola ${user}, alguna de sus notas es inválida, revise.`;
  }
}

function calculatepredict() {
    let user= username.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let resultpredict = (3.5-((note1 * 0.3) + (note2 * 0.3))) / 0.4 
    let resultpredict1= resultpredict.toFixed(2)


    response.textContent= `Hola ${user} para ganar la materia, en la nota 3 tiene que sacar:  ${resultpredict1}`
    response.style.color='black';
  }

