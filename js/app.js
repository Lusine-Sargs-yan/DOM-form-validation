//Imports
import {showError, removeError} from './utils/helper.js';

//Elements
const $form = document.querySelector('#form');
const $emailInput = document.querySelector('.email');
const $phoneInput = document.querySelector('.phone');
const $emailErrorMessage = document.querySelector('#email');
const $phoneErrorMessage = document.querySelector('#phone');
const $modal = document.querySelector('#success');
const $modalWrapperId = document.querySelector('.success__wrapper').dataset.modalId;
const $modalId = document.querySelector('#success').dataset.modalId;


//Listeners
$form.addEventListener('submit', handleSubmit);
window.addEventListener('click', clickOutsideToCloseModal);
$emailInput.addEventListener('keydown', handleEmailKeyDown);
$phoneInput.addEventListener('keydown', handlePhoneKeyDown);

//Handle listeners
function openModal() {
    $modal.classList.replace('success__modal--close', 'success__modal--open');
}
function closeModal() {
    $modal.classList.replace('success__modal--open', 'success__modal--close');
}
function handleSubmit(event) {
    event.preventDefault();
    validateFields();
}

function handleEmailKeyDown() {
    if($emailInput.value.includes('@')) {
        removeError($emailErrorMessage, $emailInput);
        return true;
    }
}

function handlePhoneKeyDown() {
    if($phoneInput.value.length >= 11) {
        removeError($phoneErrorMessage, $phoneInput);
        return true;
    }
}

function clickOutsideToCloseModal(event) {
    const { modalId } =  event.target.dataset;

    if (modalId === $modalId || modalId === $modalWrapperId) {
        closeModal();
    }
}

//validate function
function validateFields() {
    const email = $emailInput.value.trim();
    const phone = $phoneInput.value.trim();
    let isValidEmail = false;
    let isValidPhone = false;

    if(email === '') {
        isValidEmail = false;
        showError($emailErrorMessage, 'Field is required.', $emailInput)
    } else if (!email.includes('@')) {
        isValidEmail = false;
        showError($emailErrorMessage, 'Sorry, but that email is invalid.', $emailInput)
    } else {
        isValidEmail = true;
    }

    if(phone === '') {
        isValidPhone = false;
        showError($phoneErrorMessage, 'Field is required.', $phoneInput)
    } else if (phone.length <= 10) {
        isValidPhone = false;
        showError($phoneErrorMessage, 'Sorry, but that email is invalid.', $phoneInput)
    } else {
        isValidPhone = true;
    }


    if(isValidPhone && isValidEmail) {
        openModal();
        $emailInput.value = '';
        $phoneInput.value = '';
    }
}




