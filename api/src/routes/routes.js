const express = require ('express')
const router = express.Router();

const clientescontroller = require('../controllers/cadastro/clientescontroller');
const medicamentoscontroller = require('../controllers/cadastro/medicamentoscontroller')
const cid10controller = require('../controllers/cadastro/cid10controller')
const prescricoescontroller = require('../controllers/atendimento/prescricoescontroller')
const lmescontroller = require('../controllers/atendimento/lmescontroller') 

router.post('/clientes', clientescontroller.Insert);
router.get('/clientes', clientescontroller.SearchAll);
router.get('/clientes/:id', clientescontroller.SearchOne);
router.put('/clientes/:id', clientescontroller.Update);
router.delete('/clientes/:id', clientescontroller.Delete);

router.post('/medicamentos', medicamentoscontroller.Insert);
router.get('/medicamentos', medicamentoscontroller.SearchAll);
router.get('/medicamentos/shrink', medicamentoscontroller.SearchAllShrink);
router.get('/medicamentos/:id', medicamentoscontroller.SearchOne);
router.put('/medicamentos/:id', medicamentoscontroller.Update);
router.delete('/medicamentos/:id', medicamentoscontroller.Delete);

router.get('/cid10', cid10controller.SearchAll);
router.get('/cid10/:id', cid10controller.SearchOne);

router.post('/prescricoes/:idcliente', prescricoescontroller.Insert);
router.get('/prescricoes/:idcliente', prescricoescontroller.SearchAll);
router.get('/prescricoes/:idcliente/:id', prescricoescontroller.SearchOne);
router.put('/prescricoes/:idcliente/:id', prescricoescontroller.Update);
router.delete('/prescricoes/:idcliente/:id', prescricoescontroller.Delete);

router.post('/lmes/:idcliente', lmescontroller.Insert);
router.get('/lmes/:idcliente', lmescontroller.SearchAll);
router.get('/lmes/:idcliente/:id', lmescontroller.SearchOne);
router.put('/lmes/:idcliente/:id', lmescontroller.Update);
router.delete('/lmes/:idcliente/:id', lmescontroller.Delete);

module.exports = router;