const display = document.querySelector('input[name="answer"]')

const buttons = document.querySelectorAll('input[type="button"]')

const operator = document.querySelectorAll('.operator')

for (let i = 0; i < buttons.length; i++) {
  document.onkeydown = function (event) {
    let key = event.key

    for (let e = 0; e < 10; e++) {
      if (key === e.toString()) {
        display.value += key
      }
    }

    let displayValue = display.value

    switch (key) {
      case 'Backspace':
      case 'Delete':
        display.value = display.value.substr(0, display.value.length - 1)
        if (!display.value) {
          display.classList.remove('error')
          display.setAttribute('placeholder', '')
        }
        break

      case 'Escape':
      case 'c':
        display.setAttribute('placeholder', '')
        display.value = ''
        break

      case 'Enter':
        if (display.value)
          try {
            display.value = eval(displayValue)
          } catch {
            display.classList.toggle('error')
            display.setAttribute('placeholder', 'ERROR')
            display.value = ''
          }
        break

      case '+':
      case '-':
      case '*':
      case '/':
      case '.':
        display.value += key
        display.setAttribute('placeholder', '')
        break
    }
  }
  buttons[i].addEventListener('click', function (e) {
    let btn = e.target.value

    switch (btn) {
      case 'AC':
        display.setAttribute('placeholder', '')
        display.value = ''
        break

      case 'DEL':
        display.value = display.value.substr(0, display.value.length - 1)
        break

      case '=':
        if (display.value)
          try {
            display.value = eval(display.value)
          } catch {
            display.classList.toggle('error')
            display.setAttribute('placeholder', 'ERROR')
            display.value = ''
          }
        break

      default:
        if (display.classList.contains('error')) {
          display.value = ''
          display.classList.toggle('error')
        }
        display.value += btn
        break
    }
  })
}
