let menu = document.getElementById('menu');
let close = document.getElementById('close');

console.log(menu);
console.log(close);

close.addEventListener('click', function () {
  menu.style.display = "none";
})


//Если меню disp block, то при нажатии на close menu display: none/ Else menu display: none, то при клике на бургер должен быть display block для меню.

// function closeButton() {
//   let menu = document.getElementById('menu');
//   let close = document.getElementById('close');

//   console.log(menu);
//   console.log(close);

//   if (menu.style.display = "block") {
//     close.addEventListener('click', function () {
//       menu.style.display = "none";
//     });
//   }

//   else (menu.style.display = "none")
// }