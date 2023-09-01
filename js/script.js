const form = document.querySelector('form');
const exibir = document.querySelector('button');

form.onsubmit = () => false;
exibir.addEventListener('click', () => {
    let dados ={
        'nome' : document.querySelector('#nome').value,
        'cpf' : document.querySelector('#cpf').value,
        'rg' : document.querySelector('#rg').value,
        'dataNasc' : document.querySelector('#dataNasc').value,
        'genero' : document.querySelector('#genero').value,
        'Signo' : document.querySelector('#Signo').value,
        'mae' : document.querySelector('#mae').value,
        'pai' : document.querySelector('#pai').value,
        'email' : document.querySelector('#email').value,
        'senha' : document.querySelector('#senha').value,
        'cep' : document.querySelector('#cep').value,
        'uf' : document.querySelector('#uf').value,
        'cidade' : document.querySelector('#cidade').value,
        'bairro' : document.querySelector('#bairro').value,
        'logradouro' : document.querySelector('#logradouro').value,
        'numero' : document.querySelector('#numero').value,
        'complemento' : document.querySelector('#complemento').value,
        'telefone' : document.querySelector('#telefone').value,
        'celular' : document.querySelector('#celular').value,
        'altura' : document.querySelector('#altura').value,
        'peso' : document.querySelector('#peso').value,
        'tipoSanguineo' : document.querySelector('#tipoSanguineo').value,
        'corFavorita' : document.querySelector('#corFavorita').value
           };
    let result = document.querySelector('#result');

    result.innerHTML =
         'Nome: ' + dados.nome + '.<br/>'
        + 'CPF: ' + dados.cpf + '. <br/>'
        + 'RG: ' + dados.rg + '.<br/>'
        + 'Data Nascimento: ' + dados.dataNasc + '. <br/>'
        + 'Sexo: ' + dados.genero + '. <br/>'
        + 'Signo: ' + dados.Signo + '. <br/>'
        + 'Mâe: ' + dados.mae + '. <br/>'
        + 'Pai: ' + dados.pai + '. <br/>'
        + 'E-mail: ' + dados.email + '. <br/>'
        + 'Senha: ' + dados.senha + '. <br/>'
        + 'CEP: ' + dados.cep + '. <br/>'
        + 'UF: ' + dados.uf + '. <br/>'
        + 'Cidade: ' + dados.cidade + '. <br/>'
        + 'Bairro: ' + dados.bairro + '. <br/>'
        + 'Logradouro: ' + dados.logradouro + '. <br/>'
        + 'Número: ' + dados.numero + '. <br/>'
        + 'Complemento: ' + dados.complemento + '. <br/>'
        + 'Telefone: ' + dados.telefone + '. <br/>'
        + 'Celular: ' + dados.celular + '. <br/>'
        + 'Altura: ' + dados.altura + '. <br/>'
        + 'Peso: ' + dados.peso + '. <br/>'
        + 'Tipo Sanguineo: ' + dados.tipoSanguineo + '. <br/>'
        + 'corFavorita: ' + dados.corFavorita +  '.';
        

});

