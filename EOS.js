// document.addEventListener("DOMContentLoaded", function () {
//   const generateEosEmailButton = document.getElementById("generateEosEmail");
//   const eosEmailOutput = document.getElementById("eosEmailOutput");

document
  .getElementById("generateEosEmail")
  .addEventListener("click", function () {
    const eosTeamName = document.getElementById("eosTeamName").value;
    const eosClientName = document.getElementById("eosClientName").value;
    const reason = document.getElementById("reason").value;
    const eosEffectivityDate =
      document.getElementById("eosEffectivityDate").value;

    const eosEmailContent = `
      Hello, Team ${eosTeamName},<br /><br />

      END OF SERVICE NOTIFICATION:<br /><br />

      <span class="blue">Please confirm that you received this message.</span><br /><br />

      CLIENT:<span class="important"> ${eosClientName}</span><br />
      EFFECTIVITY DATE: ${eosEffectivityDate}<br /><br />

      <span class="confirm">ALL SHIFTS ARE CANCELLED AFTER THIS DATE & TIME.</span><br /><br />

      The client is  ${reason} <br /><br />

      On behalf of TheKey, we thank you for your dedication and commitment in fulfilling your duties.<br /><br />

      Kind regards,
  `;

    document.getElementById("eosEmailOutput").innerHTML = eosEmailContent;
    document.getElementById("copy").style.display = "block";
  });

document.getElementById("copy").addEventListener("click", function () {
  const eosEmailOutput = document.getElementById("eosEmailOutput");
  const range = document.createRange();
  range.selectNodeContents(eosEmailOutput);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    // alert("Email template copied to clipboard.");
  } catch (err) {
    // alert("Unable to copy. Please try again.");
  }

  selection.removeAllRanges();
});

flatpickr(".date-picker", {
  dateFormat: "l F j",
});
