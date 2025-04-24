
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault(); // Impede o recarregamento da página

        const textoTarefa = $('#listaTxt').val(); // Pega o valor digitado

        if(textoTarefa.trim() === '') return; // Evita adicionar tarefas vazias

        const idUnico = 'tarefa_' + Date.now(); // Cria um ID único para o checkbox

        // Cria o item da lista com checkbox e label
        const novoItem = $(`
            <li>
                <input class="check" type="checkbox" id="${idUnico}"/>
                <label for="${idUnico}">${textoTarefa}</label>
            </li>
        `).hide();

        // Adiciona o item à lista e mostra com efeito
        $('ul').append(novoItem);
        novoItem.fadeIn();

        $('#listaTxt').val(''); // Limpa o input
    });

    // Evento para riscar/desriscar a tarefa quando clicar no checkbox
    $('ul').on('change', '.check', function(){
        const label = $(this).next('label');
        label.toggleClass('riscado'); // Alterna a classe "riscado"
    });

});