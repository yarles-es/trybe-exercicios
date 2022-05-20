let secao2 = document.querySelectorAll('.no-emergency-tasks')[0];
secao2.style.backgroundColor = 'orange';

let header = document.getElementById('header-container');
header.style.backgroundColor = 'green';


let secao1 = document.querySelectorAll('.emergency-tasks')[0];
secao1.style.backgroundColor = 'pink';

let divsUrgentes = document.querySelectorAll('.emergency-tasks h3');
  for (index = 0; index< divsUrgentes.length; index +=1){
      divsUrgentes[index].style.backgroundColor = 'purple';
  }

  let divsNaoUrgentes = document.querySelectorAll('.no-emergency-tasks h3');
  for (index = 0; index < divsNaoUrgentes.length; index +=1){
    divsNaoUrgentes[index].style.backgroundColor = 'black';
  }

  let footer = document.getElementById('footer-container');
  footer.style.backgroundColor = 'rgb(21, 70, 0)';










