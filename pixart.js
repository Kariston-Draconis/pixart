var button = document.getElementById('set-color');
var brush = document.getElementsByClassName('brush')[0];

button.addEventListener('click', function(event) {
  event.preventDefault();
  var color = document.getElementById('color-field').value;
  brush.style.backgroundColor = color;
});

for (var i = 0; i < 20; i++) {
  var square = document.createElement('div');
  square.className = "square"
  document.body.appendChild(square);
};
