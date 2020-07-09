const CicloPagamento = require("./cicloPagamento")
const tratamentoErro = require('../common/tratamentoErros')

CicloPagamento.methods(["get", "post", "delete", "put", "dispath"])
CicloPagamento.updateOptions({ new: true, runValidators: true }) // Força as atualizações

//Chamando o tratamento de erros depois que executar (PUT e POST)
CicloPagamento.after('post', tratamentoErro).after('put', tratamentoErro)

//Rota retorna quantidade de registros
CicloPagamento.route("count", (req, res, next) => {
  CicloPagamento.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

//Criando uma PIPELINE de AGREGAÇÃO somar todos os CREDITOS E DEBITOS
CicloPagamento.route("summary", (req, res, next) => {
  CicloPagamento.aggregate([{
      $project: {somaCredito: { $sum: "$creditos.valor" }, somaDebito: { $sum: "$debitos.valor" }}
    }, {
      $group: { _id: null, totalCredito: { $sum: "$somaCredito" }, totalDebito: { $sum: "$somaDebito" }}
    }, {
        $project: {_id: 0, totalCredito: 1, totalDebito: 1}
    }]).exec((error, results) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else {
            res.json(results[0] || {totalCredito: 0, totalDebito: 0 })
        }
    })
})

module.exports = CicloPagamento;
