
  
  const carlosRadio = document.getElementById('carlos-radio');
  const thamiresRadio = document.getElementById('thamires-radio');
  const carlosContent = document.getElementById('carlos-content');
  const thamiresContent = document.getElementById('thamires-content');
  
  
  carlosRadio.addEventListener('change', function() {
      if (this.checked) {
          exibirConteudo('carlos');
        }
    });
    
    thamiresRadio.addEventListener('change', function() {
        if (this.checked) {
            exibirConteudo('thamires');
        }
    });
    
    function exibirConteudo(conteudo) {
      if (conteudo === 'carlos') {
        carlosContent.style.display = 'flex';
        thamiresContent.style.display = 'none';
      } else if (conteudo === 'thamires') {
        carlosContent.style.display = 'none';
        thamiresContent.style.display = 'flex';
      }
  }
  