// function getSelectedFields() {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     const selectedFields = Array.from(checkboxes)
//         .filter(checkbox => checkbox.checked)
//         .map(checkbox => checkbox.value);

//     if (selectedFields.length <= 0 && document.querySelectorAll('input') ) {
//         alert("Please fill in all the required fields.");
//     } 
// }

function validateAndSubmit() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const date = document.getElementById('date').value;
    const country = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;


    // checkboxes group required
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedFields = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    if (firstName && lastName && date && country && gender && profession  && email && number) {
        // All fields are filled, show the popup
        document.getElementById('popupfirstName').textContent = firstName;
        document.getElementById('popuplastName').textContent = lastName;
        document.getElementById('popupdate').textContent = date;
        document.getElementById('popupcountry').textContent = country;
        document.getElementById('popupGender').textContent = gender;
        document.getElementById('popupprofession').textContent = profession;
        document.getElementById('popupEmail').textContent = email;     
        document.getElementById('popupnumber').textContent = number;

        document.getElementById('popup').style.display = 'block';
        document.getElementById('form').reset();
    }

    else if (selectedFields.length <= 0  ) {
        alert("Please fill in all the required fields.");
    } 
     else {
        alert("Please fill in all the required fields.");
    }
    
    

    
}


function resetForm() {
    document.getElementById('form').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    // document.getElementsByClassName('forms').reset();
}
