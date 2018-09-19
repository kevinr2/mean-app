const Empleado= require('../models/empleados');
const empleadosCtrl = {};

empleadosCtrl.getEmpleados = async (req, res) =>{
    const empleados = await Empleado.find();
    res.json(empleados);
}
empleadosCtrl.createEmpleados = async (req, res) =>{
   const empleado = new Empleado({
        nombre: req.body.nombre,
        posicion:req.body.posicion,
        oficina: req.body.oficina,
        salario: req.body.salario

   });
   console.log(empleado);
   await empleado.save();
   res.json({
       'status':'empleado guardado'
   });
}
empleadosCtrl.getEmpleado= async (req, res) =>{
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
}
empleadosCtrl.editEmpleado = async (req, res) =>{
    const {id} = req.params;
    const empleado ={
        nombre: req.body.nombre,
        posicion:req.body.posicion,
        oficina: req.body.oficina,
        salario: req.body.salario
    };
    await Empleado.findByIdAndUpdate(id, {$set:empleado},{new:true});
    res.json({status: 'empleado actualizado'});
}

empleadosCtrl.deleteEmpleado = async (req, res) =>{
    await Empleado.findByIdAndRemove(req.params.id);
    res.json({status: 'empleado eliminado'});
}


module.exports =empleadosCtrl;