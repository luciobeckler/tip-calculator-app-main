/* Variáveis  */
const totalBill = document.getElementById('totalBill')
const tipButton = document.querySelectorAll('.tipButton')
const tipInput = document.querySelector('.tipInput')
const peopleInput = document.querySelector('.peopleInput')
const cantBeZeroText = document.querySelector('.cantBeZeroText')

const tipDisplay = document.getElementById('tipPerson')
const totalDisplay = document.getElementById('totalPerson')
const resetButton = document.querySelector('.resetButton')

let bill = 0.0
let percentage = 0
let people = 1
calculaEExibe()


/* while (isNaN(bill * percentage * people)){
} */
totalBill.addEventListener('input', function () {
      bill = parseFloat(totalBill.value)
      console.log(typeof (bill), bill)
      calculaEExibe()
})

for (let i = 0; i < tipButton.length; i++) {
      tipButton[i].addEventListener('click', function () {
            for (let j = 0; j < tipButton.length; j++) {         /*Sempre que ocorre um novo clique este for realoca a classe 'selectedCircle' */
                  tipButton[j].classList.remove('selectedButton')
            }
            tipButton[i].classList.add('selectedButton');
            percentage = parseFloat(tipButton[i].value)
            console.log(typeof (percentage), percentage)
            calculaEExibe()
      })
}

peopleInput.addEventListener('input', function () {
      people = parseInt(peopleInput.value)
      console.log(typeof (people), people)
      calculaEExibe()

})

function calculaEExibe() {
      let tipPerson = (parseFloat(bill * percentage / (100 * people))).toFixed(2)
      let tipTotal = (bill * percentage / 100).toFixed(2)

      if (isNaN(tipPerson)) tipDisplay.innerHTML = '0.0'
      else {
            tipDisplay.innerHTML = tipPerson
      }

      if (isNaN(tipTotal)) totalDisplay.innerHTML = '0.0'
      else {
            totalDisplay.innerHTML = tipTotal
      }


}
