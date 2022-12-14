/* DECLARATION OF VARIABLES  */
const totalBill = document.getElementById('totalBill')
const tipButton = document.querySelectorAll('.tipButton')
const customInput = document.querySelector('.customInput')
const peopleInput = document.querySelector('.peopleInput')
const cantBeZeroText = document.querySelector('.cantBeZeroText')

const tipDisplay = document.getElementById('tipPerson')
const totalDisplay = document.getElementById('totalPerson')
const resetButton = document.querySelector('.resetButton')

let bill = 0.0
let percentage = 0.0
let people = 1


/* DECLARATION OF FUNCTIONS  */

/* Make the math and display the results*/
function computAndDisplay(bill, percentage, people) {
      let tipPerson = (parseFloat(bill * percentage / (100 * people))).toFixed(2)
      let tipTotal = (parseFloat(bill * percentage / 100)).toFixed(2)

      if (isNaN(tipPerson)) tipDisplay.innerHTML = '0.00'
      else {
            tipDisplay.innerHTML = tipPerson
      }

      if (isNaN(tipTotal)) totalDisplay.innerHTML = '0.00'
      else {
            totalDisplay.innerHTML = tipTotal
      }
}

/* Get total bill from 'Bill' input*/
function getBill() {
      totalBill.addEventListener('input', function () {
            bill = parseFloat(totalBill.value)
            computAndDisplay(bill, percentage, people)
      })
}

/* Get percentage from presset buttons and custom input */
function getPercentage() {

      for (let i = 0; i < tipButton.length; i++) {
            tipButton[i].addEventListener('click', function () {
                  for (let j = 0; j < tipButton.length; j++) {         /*Sempre que ocorre um novo clique este for realoca a classe 'selectedCircle' */
                        if (tipButton[j].classList.contains('selectedButton')) tipButton[j].classList.remove('selectedButton')
                  }
                  tipButton[i].classList.add('selectedButton');
                  percentage = parseFloat(tipButton[i].value)
                  computAndDisplay(bill, percentage, people)
            })
      }

      customInput.addEventListener('click', function () {
            for (let j = 0; j < tipButton.length; j++) {         /*Sempre que ocorre um novo clique este for realoca a classe 'selectedCircle' */
                  if (tipButton[j].classList.contains('selectedButton')) tipButton[j].classList.remove('selectedButton')
                  percentage = 0
                  computAndDisplay(bill, percentage, people)
            }
            customInput.addEventListener('input', function () {
                  percentage = parseFloat(customInput.value)
                  computAndDisplay(bill, percentage, people)
            })
      })
}
/* Get total people from 'Number of People' input*/
function getPeople() {
      peopleInput.addEventListener('input', function () {
            people = parseInt(peopleInput.value)
            if (people == 0) {
                  cantBeZeroText.style.display = 'flex'
                  peopleInput.style.borderColor = 'rgb(250, 116, 6)'
            }
            else {
                  cantBeZeroText.style.display = 'none'
                  peopleInput.style.borderColor = 'hsl(172, 67%, 45%)'
            }
            computAndDisplay(bill, percentage, people)
      })
}

/* Reset display when 'RESET' is pressed*/
function reset() {
      resetButton.addEventListener('click', function () {
            for (let j = 0; j < tipButton.length; j++) {         /*Sempre que ocorre um novo clique este for realoca a classe 'selectedCircle' */
                  tipButton[j].classList.remove('selectedButton')
            }
            tipDisplay.innerHTML = '0.00'
            totalDisplay.innerHTML = '0.00'
      })
}

/* Manage functions */
function manager() {
      getBill()
      getPercentage()
      getPeople()
      reset()
}

/* MAIN */
computAndDisplay(bill, percentage, people)
manager()




