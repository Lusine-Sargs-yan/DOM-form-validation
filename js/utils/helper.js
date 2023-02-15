export const showError = (errorElement, message, inputElement) => {
    errorElement.innerText = message;
    errorElement.classList.replace('error', 'show-error');
    inputElement.classList.add('change-border');

};
export const removeError = (errorElement, inputElement) => {
    errorElement.innerText = '';
    errorElement.classList.replace('show-error', 'error');
    inputElement.classList.remove('change-border');
}