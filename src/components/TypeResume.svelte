<script>
  import { COLORS } from '../business/_constans';

  export let cantidadTotal;
  export let precioTotal;
  export let descripcion;
  export let index;
</script>

<div>
  <p class="text-white text-3xl"><span class={'text-3xl font-bold ' + COLORS[index]}>{cantidadTotal}</span> prendas {descripcion}</p>
  <p class="text-orange-500 mb-5"><span class="text-2xl">{precioTotal}</span> soles</p>
</div>
