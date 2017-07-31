var button = document.getElementById('set-color')
var brush = document.getElementsByClassName('brush')[0]

button.addEventListener('click', function(event) {
  event.preventDefault();
  var color = document.getElementById('color-field').value;
  brush.style.backgroundColor = color;
})
