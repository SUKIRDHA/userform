    document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phno = document.getElementById("phno").value;
      const age = document.getElementById("age").value;
      const gender=document.querySelector("input[name='gender']:checked")?.value;
      let locationData = [
        'Coimbatore',
        'Chennai',
        'Madurai',
      ]
   let location = document.getElementById("location").value;
    locationData.forEach((location) => {
        let option = document.createElement("option");
        option.value = location;
        locationData.appendChild(option);
    });
    
      const license = document.querySelectorAll("input[type='checkbox']:checked");
      let licenseValues=[];
      license.forEach(a => {
        licenseValues.push(a.value)
      });
      const user = {
        name: name,
        email: email,
        phno:phno,
        age: age,
        gender:gender,
        license:licenseValues,
        location:location
      };
  if (!name) {
        alert("Name is required.");
        return;
    }

    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phno || !validatePhoneNumber(phno)) {
        alert("Please enter a valid phone number (10 digits).");
        return;
    }

    if (!age || isNaN(age) || age <= 0 ||age>120) {
        alert("Please enter a valid age.");
        return;
    }

     console.log(user)


   let data = JSON.parse(localStorage.getItem("usersData")) || [];
   data.push(user);
    localStorage.setItem("usersData", JSON.stringify(data));
    console.log("Data stored in JSON");
    console.log(data);
    alert("Form submitted successfully!");
    console.log("Form submitted successfully!");
    });

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phno) {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phno);
}
function validatePhoneNumber(phno){
  pattern = /^[6,7,8,9][0-9]{0,9}$/;
  return pattern.test(phno);
}