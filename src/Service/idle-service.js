let _timeoutId;
let _idleCallback = null;
let _notIdleEvents = [
  "mousedown",
  "mousemove",
  "keypress",
  "scroll",
  "touchstart",
];
const _FIFTEEN_MINUTES_IN_MS = 15 * 60 * 1000;

const IdleService = {
  setIdleCallback(idleCallback) {
    _idleCallback = idleCallback;
  },
  resetIdleTimer(ev) {
    clearTimeout(_timeoutId);
    _timeoutId = setTimeout(_idleCallback, _FIFTEEN_MINUTES_IN_MS);
  },
  registerIdleTimerResets() {
    _notIdleEvents.forEach((event) =>
      document.addEventListener(event, IdleService.resetIdleTimer, true)
    );
  },
  unRegisterIdleResets() {
    clearTimeout(_timeoutId);
    _notIdleEvents.forEach((event) =>
      document.removeEventListener(event, IdleService.resetIdleTimer, true)
    );
  },
};

export default IdleService;
