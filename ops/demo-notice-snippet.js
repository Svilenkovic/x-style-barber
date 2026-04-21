(function () {
  if (document.querySelector('[data-demo-notice="1"]')) {
    return;
  }

  var notice = document.createElement('div');
  notice.setAttribute('data-demo-notice', '1');
  notice.innerHTML = 'Ovo je DEMO / probna verzija sajta kreirana za prezentaciju klijentu. Projekat nije usao u finalnu realizaciju.';
  notice.style.position = 'fixed';
  notice.style.top = '0';
  notice.style.left = '0';
  notice.style.right = '0';
  notice.style.zIndex = '2147483647';
  notice.style.padding = '10px 14px';
  notice.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Arial, sans-serif';
  notice.style.fontSize = '12px';
  notice.style.lineHeight = '1.4';
  notice.style.textAlign = 'center';
  notice.style.background = '#111';
  notice.style.color = '#f5f5f5';
  notice.style.borderBottom = '1px solid rgba(255,255,255,0.15)';
  document.body.appendChild(notice);
})();
