const { Router } = require('express')
const agentes = require('../controller/agentes')

const router = Router()

router.get('/agentes', agentes.agentes)
router.get('/agentes/:uuid', agentes.agentePorUuid)

module.exports = router