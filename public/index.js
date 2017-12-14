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



function request(url, method, cb, body) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('what', JSON.parse(xhr.responseText))
                cb(null, JSON.parse(xhr.responseText));
            } else {
                var errorMessage = JSON.parse(xhr.responseText);
                cb("Error" + url + " " + errorMessage);
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send(body);
