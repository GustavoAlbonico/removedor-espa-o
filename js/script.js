
$('#btn-submit').on("click", (e) => {
    e.preventDefault();

    const inputValueFormated = $('.container-input input').val().replace(/\s+/g, '');
    $('.container-input input').val('');
    
    if(!inputValueFormated){
        return;
    }

    $('#conteudo-list').children().removeClass('last-add');

    const li = `
    <li class="last-add">
        <p class="conteudo-sem-espaco">${inputValueFormated}</p>
        <div class="conteudo-acoes">
            <button class="copiar" title="Copiar">
                <i class="fa-regular fa-copy"></i>
            </button>
            <div id="div-drop-shadow">
                <div class="copiar-mensagem hide">
                    <span>Conteúdo Copiado!</span>
                </div>
            </div>
            <button class="remover" title="Remover">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
   `;

   $('#conteudo-list').prepend(li);
})

$('#conteudo-list').on('click','.remover', (e) => {
    $(e)[0].currentTarget.closest('li').remove();
});

let idTimeout;
let lastLiElement;

$('#conteudo-list').on('click','.copiar', (e) => {
    const liElement = $(e)[0].currentTarget.closest('li');

    if(lastLiElement == liElement){
        clearTimeout(idTimeout);
    }
    
    lastLiElement = liElement;

    const pElementValue = $(liElement).find('.conteudo-sem-espaco').text();

        navigator.clipboard.writeText(pElementValue).then(() => {
            $(liElement).find('.copiar-mensagem').fadeIn('hide');

        idTimeout = setTimeout(() => {
                $(liElement).find('.copiar-mensagem').fadeOut('hide');
            },1500);
        });
});