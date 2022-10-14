export default function cliente(req, res){
    //valida o methodo desejado e chama a funcao 
    if(req.method === "GET"){
        handlerClienteGet(req, res)
    }else{
        res.status(405).send()
    }
}

function handlerClienteGet(req, res){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade : 33
    })
}