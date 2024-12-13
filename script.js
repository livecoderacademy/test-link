//Access form
const contactForm = document.querySelector("#contact_form");
const submitBtn = document.querySelector("#submit_btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");
const phoneInput = document.querySelector("#user_phone");
const subjectInput = document.querySelector("#user_subject");

//Get needed data from emailJS
const publicKey = "HsrtqgkYNvq0qwY49";
const serviceID = "service_5szmye8";
const templateID = "template_mm5b4xq";

// Initialize emailJS with publicKey
emailjs.init(publicKey);

//Add submit event to the form

contactForm.addEventListener("submit", e => {
  //prevent form default behaviour
  e.preventDefault();
  //change button text
  submitBtn.innerText = "Just A Moment";
  //Get all input field values
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    subject: subjectInput.value,
    message: messageInput.value
  }

  //sent email(add service,template id and input field values)
  emailjs.send(serviceID, templateID, inputFields).then(() => {
    // change button text
    submitBtn.innerText = "Message  Sent Successfully"
    // clear out all input fields
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";

    //Button Text automatically change after 9seconds for sending message successfully
    const myTimeout = setTimeout(myGreeting, 15000);
    function myGreeting() {
      document.getElementById("submit_btn").innerHTML = "Submit"
    }

  }, (error) => {
    //console log the error
    console.log(error);
    // change button text
    submitBtn.innerText = "Something went Wrong"
  });
});
