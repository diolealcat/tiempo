export const currentDateWeather  = () => {    

    const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const f = new Date();
      
    MESES[f.getMonth()];
    DIAS[f.getDay()];

    var currentDate = DIAS[f.getDay()]+', '+f.getDay()+' de '+MESES[f.getMonth()]+' '+f.getFullYear();  

    return currentDate;
}