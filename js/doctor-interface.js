var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#submit').click(function() {
    var disease = $('#disease').val();
    $('#disease').val("");
    var newDoctor = new Doctor(disease);
    var result = newDoctor.find(disease);
    $('.resultsBanner').text(' Your results for ' + disease + ' are:');
  });
});
