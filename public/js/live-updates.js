// public/js/live-updates.js
// El panel que el usuario tiene abierto NO se refresca solo — se carga una
// vez al entrar y se queda quieto hasta que el usuario cambie de panel o
// recargue la página (eso ya lo hace cada renderX() al navegar). Los otros
// paneles (los que no está mirando) no se dibujan, así que "actualizarlos"
// de fondo no cambiaría nada visible — solo dejamos un chequeo liviano para
// el contador de mensajes de soporte, que sí es una notificación visible
// aunque el usuario esté en otro panel.
async function initLiveUpdates() {
  setInterval(() => {
    if (typeof refreshSupportBadgeOnly === 'function') refreshSupportBadgeOnly();
  }, 4000);
}
initLiveUpdates();
