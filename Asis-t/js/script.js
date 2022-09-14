function fechaHora(){
    var hoy = new Date();
    
    /* SE ESTABLECEN LOS DÍAS DE LA SEMANA Y LOS MESES */
    var nombresDias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    /* SE OBTIENEN EL DIA, EL NUMERO, EL MES Y EL AÑO*/
    var diaNumero = hoy.getDate();
    var dia = hoy.getDay();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();
    
    /* OBTENER LA HORA, LOS MINUTOS Y LOS SEGUNDOS */
    var hora = hoy.getHours() % 12 ;
    var minutos = hoy.getMinutes();
    var segundos = hoy.getSeconds();

    /* AYUDA A RELLENAR CON UN 0 CUANDO LOS DIGITOS SEAN DE UNO SOLO */
    minutos = ('0' + minutos).slice(-2);
    segundos = ('0' + segundos).slice(-2);

    /* SE DETERMINA SI ES AM O PM, ES UNA CONDICIÓN */
    var jornada = hora <= 12 ? 'PM' : 'AM';

    var fechaCompleta = hora + ' : ' + minutos + ' : ' + segundos + ' ' +jornada + ' ' + nombresDias[dia]+ ' ' +diaNumero+ ' ' +meses[mes]+ ' ' +año;
   
    document.getElementById('date').innerHTML = fechaCompleta;
}

fechaHora();

setInterval(fechaHora, 1000);


    





 
/*
    Resultado: Monday, January 27, 2020, UTC
*/