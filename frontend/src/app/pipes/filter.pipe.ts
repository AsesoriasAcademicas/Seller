import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

/**
 * 
 * Los pipes son una herramienta de Angular que nos permite transformar visualmente la información
 * Angular CLI nos permite generar la estructura de un pipe -> ng g pipe filter
 * Mediante el anterior comando podremos crear nuestros propios pipes
 * 
 */
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any{
    if (arg === '' || arg.length < 3) return value;
    var resultPosts = [];
    for (var post of value) {
      if (typeof post.identificacion !== 'undefined' && post.identificacion.toLowerCase().indexOf(arg.toLowerCase()) > -1 || typeof post.nombre !== 'undefined' && post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || typeof post.telefono !== 'undefined' && post.telefono.toLowerCase().indexOf(arg.toLowerCase()) > -1 || typeof post.direccion !== 'undefined' && post.direccion.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      } else if(typeof post.codigo !== 'undefined' && post.codigo.toLowerCase().indexOf(arg.toLowerCase()) > -1 || typeof post.nombre !== 'undefined' && post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || typeof post.detalle !== 'undefined' && post.detalle.toLowerCase().indexOf(arg.toLowerCase()) > -1 || typeof post.cantidad !== 'undefined' && post.cantidad.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1
      || typeof post.precioUnitario !== 'undefined' && post.precioUnitario.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1 || typeof post.tipoVenta !== 'undefined' && post.tipoVenta.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
