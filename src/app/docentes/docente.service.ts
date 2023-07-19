import { Injectable } from '@angular/core';
import { IDocente } from '../docente';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  filteredDocentes: IDocente[]=[];
  public docentes:IDocente[]=[];

constructor(private http:HttpClient) { }

getDocentes():Observable<IDocente[]>{
  return this.http.get<IDocente[]>('http://localhost:3000/docentes').pipe(map((res:any)=>res.data))
}

saveDocente(docente:IDocente){
  return this.http.post<IDocente[]>('http://localhost:3000/docente/',docente);
}

deleteDocente(id:any){
  return this.http.delete<IDocente[]>('http://localhost:3000/docente/'+id);
}

updateDocente(id:number, docente:IDocente){
  return this.http.put<IDocente[]>('http://localhost:3000/docente/'+id,docente);
}

searchDocente(id:any){
  return timer(1000).pipe(switchMap(()=>{
    return this.http.get<any>('http://localhost:4200/existedocente/'+id)
    .pipe(map((res:any)=>res.data));
  }))
}

}
