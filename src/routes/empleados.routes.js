const express =require('express');
const router = express.Router();

const empleados= require('../controllers/empleados.controllers');

router.get('/', empleados.getEmpleados);
router.post('/', empleados.createEmpleados);
router.get('/:id', empleados.getEmpleado);
router.delete('/:id', empleados.deleteEmpleado);
router.put('/:id', empleados.editEmpleado);



module.exports = router;
