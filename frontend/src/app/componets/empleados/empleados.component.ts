import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../modelos/empleado';

declare var M:any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor( private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmleados();
  }
  addEmpleado(form: NgForm){
    if(form.value._id){
      this.empleadoService.putEmpleado(form.value).subscribe(res =>{
        console.log(res);
        this.resetFrom(form);
        M.toast({html:'Empleado editado exitosamente'});
        this.getEmleados();
      });
    }else{
    this.empleadoService.postEmpleados(form.value).subscribe(res=>{
      this.resetFrom(form);
      M.toast({html:'Empleado guardado exitosamente'});
      this.getEmleados();
    });
  }
  }
  getEmleados(){
    this.empleadoService.getEmpleados().subscribe(res =>{
      this.empleadoService.Empleado =res as Empleado[];
      console.log(res);
    });
  }
  editEmpleado(Empleado: Empleado){
    this.empleadoService.seleccionEmpleado= Empleado;
  }
  ElimiEmpleado(_id:string){
      if(confirm('desea eliminar los datos seleccionados')){
        this.empleadoService.deleteEmpleado(_id).subscribe(res =>{
          console.log(res);
          this.getEmleados();
          M.toast({html:'Empleado a sido eliminado'});
        });
      }
  }
  resetFrom(form?: NgForm){
    if(form){
      form.reset();
      this.empleadoService.seleccionEmpleado = new Empleado();
      
    }
  }

}
