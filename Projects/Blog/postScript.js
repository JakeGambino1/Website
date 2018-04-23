const focus = document.querySelector('#contentFocus');
const htmlFocus = document.querySelector('#html');
const cssFocus = document.querySelector('#css');
const bootstrapFocus = document.querySelector('#bootstrap');
const javascriptFocus = document.querySelector('#javascript');

function contentFocus() {
  focus.innerHTML = htmlFocus.innerHTML;
  console.log('trigger');
}

// function contentFocus() {
//   let newFocus = document.querySelector(this)
//   focus.innerHTML = document.querySelector('#html');
//   console.log('trigger');
// }