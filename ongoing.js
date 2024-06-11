// document.addEventListener("DOMContentLoaded", function () {
//   // Initialize flatpickr for the date input
//   flatpickr("#fillInDates", {
//     mode: "multiple",
//     dateFormat: "Y-m-d",
//     onChange: function (selectedDates, dateStr, instance) {
//       const formattedDates = selectedDates.map((date) =>
//         date.toLocaleDateString("en-US", {
//           weekday: "long",
//           month: "long",
//           day: "numeric",
//         })
//       );
//       document.getElementById("fillInDates").value = formattedDates.join(", ");
//     },
//   });

//   // Populate time dropdowns with time slots
//   function populateTimeDropdown(dropdownId) {
//     const dropdown = document.getElementById(dropdownId);
//     for (let hour = 0; hour < 12; hour++) {
//       for (let minute = 0; minute < 60; minute += 30) {
//         const time = `${String(hour).padStart(2, "0")}:${String(
//           minute
//         ).padStart(2, "0")}`;
//         const option = document.createElement("option");
//         option.value = time;
//         option.text = time;
//         dropdown.appendChild(option);
//       }
//     }
//   }

//   populateTimeDropdown("startTime");
//   populateTimeDropdown("endTime");

// Generate confirmation message
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
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const caseManager = document.getElementById("caseManager").value;

    const message = `
        <p>Hi <span class="recipient">${recipient}</span>,</p> 

         <p>This is a confirmation of the On-Going <span class="shiftDetails">${shiftDetails}</span> shift you have accepted. Thank you for accepting the shift.</p>

        <p>Below are the details:<br>

        <span class="confirm"><strong>Please email back ASAP to confirm/acknowledge acceptance of the shift assigned.</span>

        <span class="important"><strong>PLEASE DO NOT LEAVE THE CLIENT ALONE. PLEASE WAIT FOR THE NEXT PERSON TO ARRIVE. ALWAYS BE ON TIME FOR YOUR SHIFT.</strong></span></p>

        <p><strong>Name of Client:</strong> <span class="clientName">${clientName} <br></span>

        <span class="confirm"><strong>PLEASE CHECK THE ADDRESS AND TRAVEL TIME BEFORE YOUR FIRST SHIFT.</strong><br></span>

        <span class="addressAndTravelTime">${addressAndTravelTime}</span></p>

        <p ><span class="n""><strong>Notes:</strong></span> <span class="notes">${notes}</span></p>

        <p><strong>FILL IN DATES:</strong> <span class="fillInDates">${fillInDates}<br></span>

        <strong>TIME:</strong> <span class="time">${startTime} - ${endTime}</span></p>

        

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
        4.  FOR OVERNIGHT AWAKE SHIFTS – Paid hourly: <span class="confirm">Need to STAY AWAKE for the
           duration of the shift to monitor the client's condition.</span>

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
// });

// Initialize Flatpickr
flatpickr("#fillInDates", {
  mode: "multiple",
  dateFormat: "l, F j",
});

function populateTimeSlots() {
  const timeSlots = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  const startTimeSelect = document.getElementById("startTime");
  const endTimeSelect = document.getElementById("endTime");

  timeSlots.forEach((time) => {
    const startOption = document.createElement("option");
    startOption.value = time;
    startOption.textContent = time;
    startTimeSelect.appendChild(startOption);

    const endOption = document.createElement("option");
    endOption.value = time;
    endOption.textContent = time;
    endTimeSelect.appendChild(endOption);
  });
}

populateTimeSlots();
