function buttonSortear() {

    const min = Math.ceil(document.querySelector('.min').value)
     const max = Math.floor(document.querySelector('.max').value)
     const result = Math.floor(Math.random() * (max - min + 1)) + min;
       
      localStorage.setItem ('resultado',result);
    
   
     if (min >= max) {
       alert('O valor mínimo tem que ser MENOR que o valor máximo');
     }else {
       window.location  = 'index2.html';
       
       document.querySelector('.result-to').style.color='#FF5722';
     }
   };
   
   function buttonVoltar (){
     window.location = 'index.html';
   };
   
   document.addEventListener('DOMContentLoaded',function (){
     const resultadoLocalStorage = localStorage.getItem('resultado');
     const resultadoTo = document.querySelector('.result-to');
   
     if(resultadoLocalStorage / null){
       resultadoTo.textContent = 'Resultado do Sorteio: ' + resultadoLocalStorage;
       resultadoTo.style.color='#FF5722';
     }else{
       resultadoTo.textContent = 'Nemhum resultado encontrado no localstorage.';
     }
   });