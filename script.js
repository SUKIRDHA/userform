let loc=document.getElementById("location");
let locationData = [
        'Coimbatore',
        'Chennai',
        'Madurai',
      ]
locationData.forEach((b) => {
  console.log(b);
  let option = document.createElement("option");
  option.text=b;
  option.value=b;
  console.log(option);
  loc.appendChild(option);
    }
  );

let states=document.querySelectorAll(".state");
let statename=['TamilNadu','Kerala','Karnataka','Delhi','AndhraPradesh'];
states.forEach((st) => {
   statename.forEach((s) => {
      console.log(s);
      let option = document.createElement("option");
      option.text=s;
      option.value=s;
      console.log(option);
      console.log(s);
      st.appendChild(option);
    }
  );
}
);

let input=document.getElementById("searchInput");
let table=document.getElementById("DataTable");
let rows=table.getElementsByTagName("tr");
let noMatchMessage = document.getElementById("noMatch");
input.addEventListener("input", function() {
  let filter = input.value.toLowerCase();
  let matchFound = false;
  for (let i = 1; i<rows.length;i++){
    let row = rows[i];
    let cells=row.getElementsByTagName("td");
    let found = false;
    for (let j = 0; j<cells.length;j++){
      let cell = cells[j];
      if (cell.textContent.toLowerCase().indexOf(filter) > -1){
        found = true;
        matchFound=true;
        break;
      }
    }
  
if (found) {
      row.style.display = '';
    }
    else {
      row.style.display = "none";
    }
  }
        if (!matchFound) {
        noMatchMessage.style.display = 'block';
    } else {
        noMatchMessage.style.display = '';
    }
  }
);
  

document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phno = document.getElementById("phno").value;
      const age = document.getElementById("age").value;
      const gender=document.querySelector("input[name='gender']:checked")?.value;
      const location=loc.value;
      const stateValues=[];
      document.querySelectorAll(".state").forEach((select) => {
        stateValues.push(select.value);
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
        location:location,
        state:stateValues,
      };

  // if (!name) {
  //       alert("Name is required.");
  //       return;
  //   }

  //   if (!email || !validateEmail(email)) {
  //       alert("Please enter a valid email address.");
  //       return;
  //   }

  //   if (!phno || !validatePhoneNumber(phno)) {
  //       alert("Please enter a valid phone number (10 digits).");
  //       return;
  //   }

  //   if (!age || isNaN(age) || age <= 0 ||age>100) {
  //       alert("Please enter a valid age.");
  //       return;
  //   }
   
  //  if (license.checked)
  //  {
  //       alert("Please select at least one license type.");
  //       return;
  //  }

  //   if (loc.selectedIndex ==0)
  //   {
  //       alert("Please select a location.");
  //       return;
  //     }
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