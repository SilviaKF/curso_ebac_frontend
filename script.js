
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); 
        
        const textoTarefa = $('#listaTxt').val(); 

        if(textoTarefa.trim() === '') return; 

        const idUnico = 'tarefa_' + Date.now(); 

        
        const novoItem = $(`
            <li>
                <input class="check" type="checkbox" id="${idUnico}"/>
                <label for="${idUnico}">${textoTarefa}</label>
            </li>
        `).hide();

        
        $('ul').append(novoItem);
        novoItem.fadeIn();

        $('#listaTxt').val(''); 
    });

    
    $('ul').on('change', '.check', function(){
        const label = $(this).next('label');
        label.toggleClass('riscado'); 
    });

});
