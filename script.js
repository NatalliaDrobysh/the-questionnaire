const form = document.querySelector(".form");
const clear = document.querySelector('#clear');
const container = document.querySelector('.container');

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  fetch ('https://polinashneider.space/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      "Content-Type" : "application/json",
      'Authorization': 'Bearer: NatalliaDrobysh'
    },
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      secondName: document.querySelector('#secondName').value,
      phone: document.querySelector('#phone').value,
      email: document.querySelector('#email').value,
      agree: document.querySelector('#agree').checked,
    })
  })
  .then ((result) => {
    return result.json();
  })
  .then ((data) => {
    const confirmation = document.createElement('p');
    confirmation.classList.add("message");
    confirmation.textContent = 'Данные успешно добавлены';
    container.append(confirmation);
    const timerId = setTimeout (function() {
     confirmation.remove();
    }, 2000)
    if (data) {
      form.reset();
    }
  })
  .catch((error) => {
    console.log (error);
    const fault = ocument.createElement('p');
    fault.classList.add("fault");
    fault.textContent = 'Ошибка передачи данных';
    container.append(fault);
    const timer = setTimeout (function() {
      fault.remove();
     }, 2000)
  })
})





