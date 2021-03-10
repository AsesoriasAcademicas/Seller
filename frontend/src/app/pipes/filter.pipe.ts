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
      if (post.identificacion.toLowerCase().indexOf(arg.toLowerCase()) > -1 || post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1
      || post.telefono.toLowerCase().indexOf(arg.toLowerCase()) > -1 || post.direccion.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
