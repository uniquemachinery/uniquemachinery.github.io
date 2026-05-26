document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("[data-inquiry-form]");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var data = new FormData(form);
    var submitButton = form.querySelector("button[type='submit']");
    var message = [
      "Hello, I am interested in Unique Machinery.",
      "Name: " + clean(data.get("name")),
      "Email: " + clean(data.get("email")),
      "WhatsApp: " + clean(data.get("whatsapp")),
      "Country: " + clean(data.get("country")),
      "Product: " + clean(data.get("Product Interested In")),
      "Required Capacity: " + clean(data.get("Required Capacity")),
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
    var statusText = document.querySelector("[data-form-status]");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
    if (whatsappLink) whatsappLink.href = whatsappUrl;
    if (emailLink) emailLink.href = mailtoUrl;
    if (preview) preview.textContent = message;

    fetch("https://formsubmit.co/ajax/Miameng@zibounique.com", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: data
    }).then(function (response) {
      if (!response.ok) throw new Error("Form service returned an error.");
      return response.json();
    }).then(function () {
      showResult("Your inquiry has been sent to our email. A WhatsApp message is also ready if you want to contact us faster.");
      form.reset();
    }).catch(function () {
      showResult("Your inquiry message is ready. If the email service is not available, please send it via WhatsApp or email below.");
    }).finally(function () {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit Inquiry";
      }
    });

    function showResult(text) {
      if (statusText) statusText.textContent = text;
      if (result) {
        result.hidden = false;
        result.focus();
      }
      window.open(whatsappUrl, "_blank", "noopener");
    }
  });

  function clean(value) {
    value = String(value || "").trim();
    return value || "Not provided";
  }
});
