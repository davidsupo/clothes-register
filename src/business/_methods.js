/** import */
import { DATA_BASE, TYPES } from "./_constans";

const obtenerRegistros = () => {
  const rawRegistros = localStorage.getItem(DATA_BASE);
  if (rawRegistros) {
    return JSON.parse(rawRegistros);
  }
  return [];
}

const guardarRegistros = (registros) => {
  localStorage.setItem(DATA_BASE, JSON.stringify(registros))
}
export const registrarVenta = ({cantidad, tipo, precio}) => {
  const datos = obtenerRegistros();
  datos.push({
    cantidad,
    tipo,
    precio: parseFloat(precio),
    fecha: new Date()
  });
  guardarRegistros(datos);
}

export const reportePorTipo = () => {
  const data = obtenerRegistros();
  return TYPES.map(type => {
    let typeReport = { descripcion: type };
    typeReport.registros = data
      .filter(item => item.tipo === type);
    typeReport.cantidadTotal = typeReport.registros
      .map(item => item.cantidad)
      .reduce((a, b) => a + b, 0);
    typeReport.precioTotal = typeReport.registros
      .map(item => parseFloat(item.precio))
      .reduce((a, b) => a + b, 0.0);
    return typeReport
  });
}

export const obtenerTotal = () => {
  const data = obtenerRegistros();
  return {
    cantidadTotal: data
      .map(item => item.cantidad)
      .reduce((a, b) => a + b, 0),
    precioTotal: data
      .map(item => parseFloat(item.precio))
      .reduce((a, b) => a + b, 0.0)
  }
}

export const compartirWhatsApp = (numero, borrarDatos) => {
  const reporteTotal = obtenerTotal();
  const reporteDetallado = reportePorTipo();

  let mensajeReporte = 'Hola, este es el reporte:%0A%0A';
  reporteDetallado.forEach(reporte => {
    mensajeReporte += '------------------------------------%0A';
    mensajeReporte += `Categoria: *${reporte.descripcion.toUpperCase()}*%0A`
    mensajeReporte += `Prendas vendidas: *${reporte.cantidadTotal}*%0A`
    mensajeReporte += `Recaudado: *${reporte.precioTotal} soles*%0A%0A`
  });
  mensajeReporte += `Total de prendas vendidas: *${reporteTotal.cantidadTotal}*%0A`;
  mensajeReporte += `Total recaudado: *${reporteTotal.precioTotal} soles*`;

  window.open(`https://wa.me/${numero}?text=${mensajeReporte}`, '_blank');

  if (borrarDatos) {
    localStorage.removeItem(DATA_BASE);
  }
}


export const exportToCsv = () =>  {
  const data = obtenerRegistros();
  let csvString = '';
  csvString = 'tipo,cantidad,precio\r\n';
  data.forEach(rowItem => {
    csvString += rowItem.tipo + ','
              + rowItem.cantidad + ','
              + rowItem.precio + '\r\n';
  });
  csvString = "data:application/csv," + encodeURIComponent(csvString);
 var x = document.createElement("a");
 x.setAttribute("href", csvString );
 x.setAttribute("download","resumen_registros.csv");
 document.body.appendChild(x);
 x.click();
 x.remove();
}