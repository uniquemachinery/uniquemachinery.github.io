document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("[data-inquiry-form]");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    /*
      TODO: Replace this front-end redirect with a production integration.
      Good portable options include Formspree, Resend, Netlify Forms,
      WordPress SMTP, or a custom API endpoint on the final hosting stack.
    */
    window.location.href = "/thank-you/";
  });
});
