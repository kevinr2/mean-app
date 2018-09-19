import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  seleccionEmpleado: Empleado;
  Empleado:Empleado[];
  readonly  Url_api='http://localhost:3000/api/empleados'; 

  constructor(private http :HttpClient) { 
    this.seleccionEmpleado= new Empleado();
  }
  getEmpleados(){
    return this.http.get(this.Url_api);
  }
  postEmpleados(Empleado:Empleado){
    return this.http.post(this.Url_api, Empleado);
  }
  putEmpleado(Empleado:Empleado){
    return this.http.put(this.Url_api + `/${Empleado._id}`, Empleado);
  }
  deleteEmpleado(_id:String){
    return this.http.delete(this.Url_api +`/${_id}`);
  }
}
