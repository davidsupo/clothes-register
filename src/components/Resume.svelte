<script>
  import { reportePorTipo, obtenerTotal } from '../business/_methods';
  import TypeResume from './TypeResume.svelte';

  let tipos = [];
  let resumentTotal = { cantidadTotal: 0, precioTotal: 0.0 };

  resumentTotal = obtenerTotal();
  tipos = reportePorTipo();
</script>

<h2 class="text-center text-white font-semibold mb-5 pb-5">Resumen de Ventas</h2>
<ul class="text-center">
  {#each tipos as tipo, i (i)}
    <li>
    <TypeResume
      index={i}
      precioTotal={tipo.precioTotal}
      descripcion={tipo.descripcion}
      cantidadTotal={tipo.cantidadTotal}>
    </TypeResume>
    </li>
  {/each}
</ul>
<p class="text-white text-center text-2xl pt-5">Total <span class="text-4xl text-blue-300 font-bold">{resumentTotal.cantidadTotal}</span> prendas vendidas</p>
<p class="text-center text-white text-xl pb-5">corresponde a <span class="text-3xl text-orange-400 font-bold">{resumentTotal.precioTotal}</span> soles.</p>
