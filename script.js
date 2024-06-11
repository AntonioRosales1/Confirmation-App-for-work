let fillInShiftsMessage = "";

document
  .getElementById("fillInShiftsButton")
  .addEventListener("click", function () {
    fillInShiftsMessage =
      "THESE ARE FILL IN SHIFTS ONLY FOR THE DATES SPECIFIED ABOVE.";
    updateFillInShiftsMessage();
  });

document.getElementById("onGoingButton").addEventListener("click", function () {
  fillInShiftsMessage =
    "THIS IS AN ONGOING SCHEDULE WHICH MEANS THAT THIS WILL BE YOUR REGULAR SCHEDULE EVERY WEEK.";
  updateFillInShiftsMessage();
});

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const recipient = document.getElementById("recipient").value;
    const shiftDetails = document.getElementById("shiftDetails").value;
    const clientName = document.getElementById("clientName").value;
    const addressAndTravelTime = document.getElementById(
      "addressAndTravelTime"
    ).value;
    const notes = document.getElementById("notes").value;
    const fillInDates = document.getElementById("fillInDates").value;
    const time = document.getElementById("time").value;
    const caseManager = document.getElementById("caseManager").value;

    const message = `
        <p>Hi <span class="recipient">${recipient}</span>,</p> 

        <p>This is a Confirmation of the <span class="shiftDetails">${shiftDetails}</span> you have accepted. Thank you for accepting the shift.  </p>

        <p>Below are the details:<br>

        <span class="confirm"><strong>Please email back ASAP to confirm/acknowledge acceptance of the shift assigned.</span>

        <span class="important"><strong>PLEASE DO NOT LEAVE THE CLIENT ALONE. PLEASE WAIT FOR THE NEXT PERSON TO ARRIVE. ALWAYS BE ON TIME FOR YOUR SHIFT.</strong></span></p>

        <p><strong>Name of Client:</strong> <span class="clientName">${clientName} <br></span>

        <span class="confirm"><strong>PLEASE CHECK THE ADDRESS AND TRAVEL TIME BEFORE YOUR FIRST SHIFT.</strong><br></span>

        <span class="addressAndTravelTime">${addressAndTravelTime}</span></p>

        <p ><span class="n""><strong>Notes:</strong></span> <span class="notes">${notes}</span></p>

        <p><strong>FILL IN DATES:</strong> <span class="fillInDates">${fillInDates}<br></span>

        <strong>TIME:</strong> <span class="time">${time}</span></p>

        <p class="confirm" id="fillInShiftsMessage">${fillInShiftsMessage}</p>

        <p><span class="imp"><strong>IMPORTANT:</strong></span> PLEASE DO NOT BRING YOUR PERSONAL ELECTRONICS (LAPTOP, TABLET, IPAD). ALSO PLEASE KEEP IN MIND TO NEVER BE ON SOCIAL MEDIA OR LIVE-STREAMING.</p>

        <p><span class="blue">Please refer to the ATTACHMENT for SYNOPSIS or CARE PLAN.</span><br>

        Reminders: <strong class="confirm">ALWAYS BE ON TIME.</strong><br>

        1. Please read the attachments thoroughly before your shift.<br>
        2. CLOCK IN AND CLOCK OUT, use CAREGIVER APP.<br>

        &nbsp;<span class="n">Make sure that you have Downloaded the CAREGIVER APP in your phone.</span><br>

        &nbsp;Please call the office 778-279-3634 if you are running late before the shift &nbsp;starts.<br>

        <span class="confirm"><strong>PLEASE REFRAIN FROM USING YOUR CELL PHONE WHILE ON A SHIFT.</strong></span><br>

        3. For Care related issues, please call or email the Case Manager<br>

        <span class="caseManager">${caseManager}</span><br>

        <p class="clear">Clear Care Notification is an auto-generated REMINDER of a shift scheduled for the next day. DO NOT REPLY or leave messages. Call the Office: 778-279-3634.</p>

        <p>Thank you again and best of luck on your shift.<br>
        Please email us back to confirm that you got this email.</p>
    `;

    document.getElementById("templateOutput").innerHTML = message;
    document.getElementById("copyButton").style.display = "block";
  });

document.getElementById("copyButton").addEventListener("click", function () {
  const templateOutput = document.getElementById("templateOutput");
  const range = document.createRange();
  range.selectNodeContents(templateOutput);
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

function updateFillInShiftsMessage() {
  document.getElementById("fillInShiftsMessage").innerText =
    fillInShiftsMessage;
}
