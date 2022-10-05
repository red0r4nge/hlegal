let block = document.getElementById('menu');
let close = document.getElementById('close');

console.log(menu);
console.log(close);

close.addEventListener('click', function () {
  menu.style.display = "none";
});