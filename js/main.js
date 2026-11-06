// Matis Shop — demo frontend interactions
// Vanilla JS, no build step required.

(function () {
  "use strict";

  /* ---- Cart (demo only, in-memory) ---- */
  var cartCount = 0;
  var cartCountEl = document.getElementById("cartCount");
  var toastEl = document.getElementById("toast");
  var toastTimer = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 1800);
  }

  document.querySelectorAll(".add-to-cart").forEach(function (btn) {
    btn.addEventListener("click", function () {
      cartCount += 1;
      if (cartCountEl) cartCountEl.textContent = String(cartCount);
      var card = btn.closest(".product-card");
      var name = card ? card.querySelector(".product-name").textContent : "Sản phẩm";
      showToast("Đã thêm “" + name + "” vào giỏ hàng");
    });
  });

  /* ---- Live personalization preview ---- */
  var nameInput = document.getElementById("nameInput");
  var previewText = document.getElementById("previewText");

  function updatePreview() {
    if (!nameInput || !previewText) return;
    var value = nameInput.value.trim();
    previewText.textContent = value.length ? value : "Tên của bạn";
  }

  if (nameInput) {
    nameInput.addEventListener("input", updatePreview);
    updatePreview();
  }
})();
