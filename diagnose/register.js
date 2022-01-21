$(document).ready(function() {
  var fields = ['fname', 'lname', 'dob_day', 'dob_month', 'dob_year', 'city', 'province', 'healthcard', 'doctor']
  var childName = $("#fname").val();

  $("#registration_form").submit(function(event) {
    event.preventDefault();

    for( i=0; i<fields.length; i++ ) {
      var field = fields[i],
          fieldVal = $("#"+field).val();

      if ( fieldVal != '' ) {
        localStorage.setItem((childName + "_" + field), fieldVal);    
      } 
    } 

    // Update number of kids
    localStorage.kids = localStorage.kids + 1 || 1

    document.location.href = "children.html";

    

  });
});