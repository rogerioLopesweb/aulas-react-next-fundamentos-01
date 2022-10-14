// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/hello?nome=rogerio&idade=38
export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Teste API',
    metodo: req.method,
    nome : req.query.nome,
    idade : +req.query.idade
  })
}
