var romanticTagBtn = document.getElementById('Romantic');

romanticTagBtn.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4) {
      var result = JSON.parse(xhr.responseText);
      
    }
  }
})
