    function calcularDiferenciaFechas(fechaInicio, fechaFin) {
        let diferenciaAnios = 0;
        let diferenciaMeses = 0;
        let diferenciaDias = 0;

        // Copiar la fecha de inicio y fin a variables nuevas,
        // ya que las fechas originales se van a modificar
        let fechaInicioAux = new Date(fechaFin.getTime());
        let fechaFinAux = new Date(fechaInicio.getTime());
        console.log(fechaInicioAux);
        console.log(fechaFinAux);
        console.log(fechaInicioAux > fechaFinAux);

        // Mientras la fecha de inicio sea mayor a la de fin,
        // se va restando un año a la fecha de inicio
        while (fechaInicioAux > fechaFinAux) {
            fechaInicioAux.setFullYear(fechaInicioAux.getFullYear() - 1);
            if (fechaInicioAux > fechaFinAux) {
                diferenciaAnios++;
            }else{
                fechaInicioAux.setFullYear(fechaInicioAux.getFullYear() + 1);
                break;
            }
        }
    
        // Mientras la fecha de inicio sea mayor a la de fin,
        // se va restando un mes a la fecha de inicio
        while (fechaInicioAux > fechaFinAux) {
        fechaInicioAux.setMonth(fechaInicioAux.getMonth() - 1);
        if (fechaInicioAux > fechaFinAux) {
                diferenciaMeses++;
        }else{
            fechaInicioAux.setMonth(fechaInicioAux.getMonth() + 1);
            break;
        }
        }
    
        // Mientras la fecha de inicio sea mayor a la de fin,
        // se va restando un día a la fecha de inicio
        while (fechaInicioAux > fechaFinAux) {
        fechaInicioAux.setDate(fechaInicioAux.getDate() - 1);
        diferenciaDias++;
        }
        
        let a = {
            anios: diferenciaAnios,
            meses: diferenciaMeses,
            dias: diferenciaDias}
        // Devolver la diferencia en años, meses y días
        return a;
    }

    // Ejemplo de uso
    const fechaInicio = new Date(2022, 1, 27); // 1 de noviembre de 2022
    const fechaFin = new Date(2022, 5, 31); // 15 de mayo de 2025
    
    const diferencia = calcularDiferenciaFechas(fechaInicio, fechaFin);
    console.log(`La diferencia es de ${diferencia.anios} años, ${diferencia.meses} meses y ${diferencia.dias} días.`);
    // La salida en consola sería: La diferencia es de 2 años, 6 meses y 14 días.