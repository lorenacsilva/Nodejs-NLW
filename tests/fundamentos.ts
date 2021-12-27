
//nomeDaVariavel:tipoDaVariavel

interface Usuario{
    nome: string, email: string, telefone?: string; //"?" define que é um parametro opcional
}

function enviarEmailFundamentos({email, nome, telefone}: Usuario) { //Paramêtro desestruturado 
    console.log(`Olá ${nome} seu e-mail é ${email} e seu telefone é ${telefone}`);
    //
    //
    //
}

enviarEmailFundamentos({
    email:"dani@gmail.com",
    nome: "Dani",
});