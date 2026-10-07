// Small shared helpers, loaded before support.js by both pages.
// copyText(text) -> Promise<boolean>: Clipboard API when available, else the legacy execCommand route.
window.SITE_UTILS = {
  copyText: function (text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return false; });
    }
    return new Promise(function (resolve) {
      try {
        var t = document.createElement('textarea');
        t.value = text; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(t); t.select();
        var ok = document.execCommand && document.execCommand('copy');
        document.body.removeChild(t); resolve(!!ok);
      } catch (e) { resolve(false); }
    });
  },
};
