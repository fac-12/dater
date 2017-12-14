//add DOM
var addBtn=document.getElementById('addButton')
var romanticCheckbox = document.getElementById('Romantic');
var doubleDateCheckbox = document.getElementById('doubleDate');
var budgetCheckbox = document.getElementById('budget');
var outdoorsyCheckbox = document.getElementById('outdoorsy');
var adventurousCheckbox = document.getElementById('adventurous');
var culturalCheckbox = document.getElementById('cultural');
var naughtyCheckbox = document.getElementById('naughty');
var blindDateCheckbox = document.getElementById('blindDate');
var spontaneousCheckbox = document.getElementById('spontaneous');
var foodieCheckbox = document.getElementById('foodie');
var addform=document.getElementById('addForm');

//filter DOM
var filterBtn = document.getElementsByClassName('filterbtn');
var filterBtnArr = Array.from(filterBtn);
console.log(filterBtnArr)

filterBtnArr.forEach(button => {
  button.addEventListener('click', function(e){
    var tag = e.target.textContent.replace(' ', '-');
    window.location.href='/result/'+tag;
})
})

