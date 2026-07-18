// public/js/live-updates.js
// En vez de avisar "hay contenido nuevo, reiniciá la página", la app se
// actualiza sola en segundo plano: cada pocos segundos vuelve a pedir los
// datos de la pantalla actual y los redibuja, sin recargar ni perder lo que
// el usuario esté escribiendo en un formulario o modal abierto.

async function initLiveUpdates() {
  setInterval(silentRefreshTick, 6000);
}

function silentRefreshTick() {
  // No interrumpir si hay un modal/formulario abierto (ej. participando de
  // una campaña, completando un pago) — ahí forzar un refresh perdería lo
  // que el usuario está haciendo.
  const modalOpen = document.getElementById('modalRoot') && document.getElementById('modalRoot').children.length > 0;
  if (!modalOpen && typeof window.__vfSilentRefresh === 'function') {
    window.__vfSilentRefresh();
  }
  if (typeof refreshSupportBadgeOnly === 'function') refreshSupportBadgeOnly();
}

initLiveUpdates();
