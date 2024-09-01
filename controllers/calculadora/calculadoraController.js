const calculadoraController = {
    calcular: (req, res) =>{
        try {
            
            const operacao = req.query.operacao
            const n1 = parseInt(req.query.n1)
            const n2 = parseInt(req.query.n2)
            if(isNaN(n1) || isNaN(n2)){
                return res.status(400).json({message:'valores inválidos, n1 e n2 devem ser numéricos.'})
            }
            
            
            if(operacao === 'soma'){
                return res.status(200).json({message: `o resultado é ${n1 + n2}`})
            }else if(operacao === 'subtracao'){
                return res.status(200).json({message: `o resultado é ${n1 - n2}`})
            }else if(operacao === 'divisao'){
                return res.status(200).json({message: `o resultado é ${n1 / n2}`})
            }else if(operacao === 'multiplicacao'){
                return res.status(200).json({message: `o resultado é ${n1 * n2}`})
            }else if(operacao === 'resto'){
                return res.status(200).json({message: `o resto da operação é ${n1 % n2}`})
            }else if(operacao === 'elevado'){
                return res.status(200).json({message: `o resultado de ${n1} elevado a ${n2} é ${n1 ** n2}`})
            }else{
                return res.status(400).json({message: 'opção de operação inválida'})
            }
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: error})
        }
    }
}

module.exports = calculadoraController