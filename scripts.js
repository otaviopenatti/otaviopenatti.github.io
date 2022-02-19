function swap( id ) {
    var browser = navigator.appName;
    if (browser == "Microsoft Internet Explorer") {
        displayType = ( document.getElementById( id ).style.display == 'none' ) ? 'block' : 'none';
    } else {
        displayType = ( document.getElementById( id ).style.display == 'none' ) ? 'table-row' : 'none';
    }
    document.getElementById( id ).style.display = displayType;

    id_titulo = id + '_link';
    classe = ( document.getElementById( id_titulo ).className == 'abstract_inactive' ) ? 'abstract_active' : 'abstract_inactive';
    document.getElementById( id_titulo ).className = classe;
}

function ValidaForm() {
    if (document.contato.nome.value=='') {
    alert('Preencha o nome!');
    return (false);
    }

    if (!checkMail(document.contato.email.value)) {
    alert('Preencha o e-mail corretamente!');
    return (false);
    }

    if (document.contato.assunto.value=='') {
    alert('Preencha o assunto!');
    return (false);
    }

    if (document.contato.mensagem.value=='') {
    alert('Digite uma mensagem!');
    return (false);
    }


    if (document.contato.lang.value=='en') {
        document.contato.action = "envia_email.php?lang=en";
    } else {
        document.contato.action = "envia_email.php?lang=br";
    }
    return (true);
}

function checkMail(email) {
    var x = email;
    var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(x)) 
        return true;
    else
        return false;
}
