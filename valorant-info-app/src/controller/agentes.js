const axios = require('../utils/axios')
const controller = {}

controller.agentes = async (req, res) => {
    try {
        const agentes = await axios.get('/agents')

        return res.status(200).json({
            codigo: 'Exito',
            mensaje: 'Los datos de los agentes fueron enviados con exito.',
            resultado: agentes.data
        })
    } catch (error) {
        console.log('ERROR-SISTEMA: agentes -> ', error)

        return res.status(500).json({
            codigo: 'Error-Sistema',
            mensaje: 'Hubo un problema al enviar los datos de los agentes.',
            resultado: error
        })
    }
}

controller.agentePorUuid = async (req, res) => {
    const { uuid } = req.params

    try {
        const agente = await axios.get(`/agents/${uuid}`)

        return res.status(200).json({
            codigo: 'Exito',
            mensaje: 'El dato del agente fue enviado con exito.',
            resultado: agente.data
        })
    } catch (error) {
        console.log('ERROR-SISTEMA: agentePorUuid -> ', error)

        return res.status(500).json({
            codigo: 'Error-Sistema',
            mensaje: 'Hubo un problema al enviar el dato del agente.',
            resultado: error
        })
    }
}

module.exports = controller