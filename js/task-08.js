const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailField = event.currentTarget.elements.email.value;
  const passwordField = event.currentTarget.elements.password.value;

  if (emailField === '' || passwordField === '') {
    alert('Please fill in all fields of the form');
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach(element => console.log(element));
    form.reset();
  }
}
