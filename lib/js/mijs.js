window.onload = function() {
    var myInput = document.getElementById('cuerpo');
    myInput.onpaste = function(e) {
    e.preventDefault();
    alert("esta acción está prohibida");
  }

    myInput.oncopy = function(e) {
    e.preventDefault();
    alert("Esta acción está prohibida");
    }
}