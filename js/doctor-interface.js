var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#submit').click(function() {
    var disease = $('#disease').val();
    $('#disease').val("");
    var newDoctor = new Doctor(disease);
    var result = newDoctor.find(disease, function(result) {
      $('.showDoctors').text("");
      for (var i = 0; i < result.data.length; i++) {
        $('.showDoctors').append('<tr>' + '<th scope="row">' + [i + 1] + '</th>' + '<td>' + result.data[i].profile.first_name + ' ' + '</td>' + '<td>' + result.data[i].profile.last_name + '</td>' + '<td>' +  result.data[i].profile.bio + '</td>' +  '</tr>');
      }
     });
    $('.resultsBanner').text(' Your results for ' + disease + ' are:');
  });
});
