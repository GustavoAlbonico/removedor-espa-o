$('#btn-submit').on("click", (e) => {
    e.preventDefault();

    const inputValueFormated = $('.container-input input').val().replace(/\s+/g, '');
    $('.container-input input').val('');
    
    if(!inputValueFormated){
        return;
    }

    const li = `
    <li>
        <p class="conteudo-sem-espaco">${inputValueFormated}</p>
        <div class="conteudo-acoes">
            <button class="copiar">
                <i class="fa-regular fa-copy"></i>
            </button>
            <div class="copiar-mensagem hide">
                <span>Conteúdo Copiado!</span>
            </div>
            <button class="remover">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
   `;

   $('#conteudo-list').append(li);
})

$('#conteudo-list').on('click','.remover', (e) => {
    $(e)[0].currentTarget.closest('li').remove();
});

let idTimeout;

$('#conteudo-list').on('click','.copiar', (e) => {
    const liElement = $(e)[0].currentTarget.closest('li');

    const pElementValue = $(liElement).find('.conteudo-sem-espaco').text();
        clearTimeout(idTimeout);

        navigator.clipboard.writeText(pElementValue).then(() => {
            $(liElement).find('.copiar-mensagem').fadeIn('hide');

        idTimeout = setTimeout(() => {
                $(liElement).find('.copiar-mensagem').fadeOut('hide');
            },1500);
        });
});