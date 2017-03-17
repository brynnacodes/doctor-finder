var Doctor = require('./../js/doctor.js').doctorModule;

// function display(disease) {
//   $('.showDoctors').append(callback);
// }

$(document).ready(function() {
  $('#submit').click(function() {
    var disease = $('#disease').val();
    // $('#disease').val("");
    var newDoctor = new Doctor(disease);
    var result = newDoctor.find(disease);
    // console.log(result);
  });
});
