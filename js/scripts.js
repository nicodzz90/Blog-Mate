// //seleccion contenido 
// //hay 3 tipos


// //queryselector 
// const heading = document.querySelector('#heading')//0 o 1 elemento 
// // heading.textContent = 'nuevo heading'
// console.log(heading);





// //queryselectorall
// const enlaces = document.querySelectorAll('.navegacion a');
// // enlaces[0].textContent = 'Nuevo texto ';

// //agrega o remueve clases 

// // enlaces[0].classList.add('Nuevo texto '); 
// // enlaces[0].classlist.remove('Nuevo texto ');
// console.log(enlaces);

// //crear un nuevo enlace

// const nuevoenlace = document.createElement('A')

// //AGREGAR HREF
// nuevoenlace.href ='nuevo-enlace.html';

// //agregar texto 

// nuevoenlace.textContent ='nuevo-enlace';

// //agregar la clase 

// nuevoenlace.classList.add('navegacion__enlace');

// //agregarlo al documento 

// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoenlace);

// //eventos 
// console.log(1);

// window.addEventListener('load',function(){//load espera al que javascript y html archivos esten listos 

//     console.log(2);
// })
// window.onload =function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded',function(){ //solo espera por el html ,no espera css ni imagenes
//     console.log(4);
// })

// console.log(5);

//seleccionar elemento y asociarle 
// const btnenviar = document.querySelector('.boton__primario'); //seleccionamos nuestro elemento del html 

// btnenviar.addEventListener('click',function(evento){
//     console.log(evento);
//     evento.preventDefault();//no recarga la pagina ,siempre se usa !!!

//     //validar formulario 


//     console.log('enviando formulario');

// })
//el evento del submit 


//eventos de los input  y textarea 

const datos = {
    nombre:'',
    email:'',
    mensaje:''
}

 const tnombre = document.querySelector('#nombre');
 const email = document.querySelector('#email');
 const mensaje = document.querySelector('#mensaje');
 const formulario = document.querySelector('.formulario');


//  inputnombre.addEventListener('input',function(e){
//      console.log(e.target.value)

//  });
//  inputemail.addEventListener('input',function(e){
//     console.log(e.target.value)

// });
// inputmensaje.addEventListener('input',function(e){
//     console.log(e.target.value)

// });

nombre.addEventListener('input',leertexto);
email.addEventListener('input',leertexto);
mensaje.addEventListener('input',leertexto);
//evento submit

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
   //validar formulario 

   const {nombre,email,mensaje} =datos;
   if (nombre ==='' || email==='' || mensaje===''){
    mostraralerta('Todos los campos son obligatorios')
      
       return;// corta la ejecucion del codigo 
   }
   mostraralerta('Enviando formulario');
  


   //enviar formulario
})


function leertexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

function mostraralerta(mensaje,error=null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

     //que desaparesca  despues de 3 segundo
    setTimeout(() => {
         alerta.remove();
        }, 3000);

}







//muestrar error en pantalla 
// function mostrarerror(mensaje){
//     const error = document.createElement('P');
//     error.textContent=mensaje;
//     error.classList.add('error');
//     formulario.appendChild(error)

//     //que desaparesca  despues de 3 segundo
//     setTimeout(() => {
//         error.remove();
//     }, 3000);
     
    
// };

// function mostrarmensaje(mensaje){
//     const correcto = document.createElement('P');
//     correcto.textContent=mensaje;
//     correcto.classList.add('correcto');
//     formulario.appendChild(correcto)

//     //que desaparesca  despues de 3 segundo
  

//     setTimeout(() => {
       
//         correcto.remove();
//     }, 3000);
     
    
// };



