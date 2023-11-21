<script>
  import { compartirWhatsApp, exportToCsv } from '../business/_methods';
  let numero = '';
  let borrarDatos = false;

  function handleButttonClicked() {
    compartirWhatsApp(numero, borrarDatos);
    const path = window.location.href.replace('compartir', '')
    window.location.replace(path);
  }
</script>

<div class="py-8 px-4">
  <p class="text-white text-2xl">Número: </p>
  <input type="tel"
    class="rounded-full text-2xl mt-2 block w-full outline-none px-4 py-2" bind:value={numero}>
  <div class="mb-5 mt-2 px-2 py-5">
    <label class="text-xl text-orange-300 font-bold flex items-center">
      <input
        bind:value={borrarDatos}
        type="checkbox"
        class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <p class="ml-3">Borrar registros al compartir</p>
    </label>
  </div>
  <button
    on:click={handleButttonClicked}
    class="bg-red-300 px-4 py-2 rounded-full w-full my-5 text-xl font-bold hover:bg-red-500 disabled:bg-gray-400"
    disabled={numero.length != 9 || !numero.startsWith('9')}>Enviar</button>
  <button
    on:click={exportToCsv}
    class="bg-blue-200 rounded-full px-4 py-2 mt-5 w-full text-xl font-bold">
    Descargar Excel</button>
</div>