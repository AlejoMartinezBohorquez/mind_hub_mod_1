window.onload = function() {
    let estrellas = document.querySelectorAll('.clasificacion > input[type=radio]');
    estrellas.forEach(function(estrella) {
      estrella.addEventListener('click', function() {
        this.className = 'checked';
      });
    });
  };