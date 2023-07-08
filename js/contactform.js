(function () {
    emailjs.init("JMyRvnXrfkHph-60K");
 })();
 const serviceId ="service_4ygu22k";
 const templateId ="template_ohl8ky6";
 const handleSubmit = () => {
    const userName = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;
    if (userName==="") {
        alert("Name is required");
    }
    else if (email==="") {
        alert("email is required");
    }
    else if (message==="") {
        alert("message is required");
    }
    else {
    var params= {
        name: userName,
        email: email,
        message: message,
    };
    emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
        document.querySelector("name").value="";
        document.querySelector("email").value="";
        document.querySelector("message").value="";
        alert("mail has been sent succesfully!");
    })
    .catch ((err) => {
        console.log("An error has been occured");
    });
    }
};