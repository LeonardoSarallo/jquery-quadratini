// ￼Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti


var elementoverde = $('.quadrato');

elementoverde.click(function(){
  $(this).css('background-color','green');
});

var elementorosso = $('.red');

elementorosso.click(function(){
  $(this).css('background-color','red');

});

var punteggio = 0;
elementoverde.click(function() {
  punteggio++;
  $("#counter").html("Hai selezionato " + punteggio + ' quadrati verdi');
});
var count = 0;
elementorosso.click(function() {
  count++;
  $("#counter2").html("Hai selezionato " + punteggio + ' quadrati rossi');
});
