document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("[data-inquiry-form]");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var data = new FormData(form);
    var message = [
      "Hello, I am interested in Unique Machinery.",
      "Name: " + clean(data.get("name")),
      "Email: " + clean(data.get("email")),
      "WhatsApp: " + clean(data.get("whatsapp")),
      "Country: " + clean(data.get("country")),
      "Product: " + clean(data.get("product")),
      "Required Capacity: " + clean(data.get("capacity")),
      "Message: " + clean(data.get("message"))
    ].join("\n");

    var whatsappUrl = "https://wa.me/8613058068287?text=" + encodeURIComponent(message);
    var mailtoUrl = "mailto:Miameng@zibounique.com?subject=" +
      encodeURIComponent("Food Processing Machinery Inquiry") +
      "&body=" + encodeURIComponent(message);
    var result = document.querySelector("[data-inquiry-result]");
    var whatsappLink = document.querySelector("[data-whatsapp-result]");
    var emailLink = document.querySelector("[data-email-result]");
    var preview = document.querySelector("[data-message-preview]");

    if (whatsappLink) whatsappLink.href = whatsappUrl;
    if (emailLink) emailLink.href = mailtoUrl;
    if (preview) preview.textContent = message;
    if (result) {
      result.hidden = false;
      result.focus();
    }

    window.open(whatsappUrl, "_blank", "noopener");
  });

  function clean(value) {
    value = String(value || "").trim();
    return value || "Not provided";
  }
});
