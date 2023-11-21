<script>
  import { TYPES } from '../business/_constans';
  import { registrarVenta } from '../business/_methods';

  let cantidad = 1;
  let tipo = TYPES[0];
  let precio = '';

  function guardarRegistro() {
    registrarVenta({cantidad, tipo, precio});
    const path = window.location.href.replace('registrar', '')
    window.location.replace(path);
  }
</script>

<div class="">
  <p class="text-2xl text-white py-5 pr-2">Tipo:</p>
  <select class="rounded-full p-5 text-xl text-center" style="width: 100%;" bind:value={tipo}>
    {#each TYPES as type}
      <option value={type}>{type.toUpperCase()}</option>
    {/each}
  </select>
  <p class="text-2xl text-white py-5 pr-2">Cantidad:</p>
  <div class="rounded-full bg-red-300 flex justify-between text-3xl">
    <button
      disabled={cantidad==1}
      class="p-5 px-11 bg-red-400 hover:bg-red-500 rounded-full disabled:bg-gray-400"
      on:click={() => cantidad--}
      >-</button>
    <p class="mx-5 p-5">{cantidad}</p>
    <button
      class="p-5 px-11 rounded-full bg-red-400 hover:bg-red-500"
      on:click={() => cantidad++}
      >+</button>
  </div>
  <p class="text-2xl text-white py-5">Precio:</p>
  <input type="number" class="rounded-full p-5 pl-8 outline-0 text-xl w-full mb-10" bind:value={precio}>
  <button
    class="rounded-full bg-red-200 text-2xl w-full p-5 mt-10"
    on:click={guardarRegistro}
    >GUARDAR</button>
</div>