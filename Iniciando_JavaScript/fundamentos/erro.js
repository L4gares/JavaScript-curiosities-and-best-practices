// comandos para tratar mensagens de erros e afins

function tratarErroElancar(erro){
    //throw new Error("Mensagem do erro") // retorna uma mensagem no console
    //throw 10 // retorna qualquer coisa
    throw { // retorna o erro com mais detalhe (em um objeto)
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
   try{ //trata o erro
    console.log(obj.name.toUpperCase() + '!!!')
   } catch(e){
    tratarErroElancar(e)
   }finally{
    console.log('final') //sempre sera executado
   }
}

const obj = { name: 'Roberto'}

imprimirNome(obj)