var apiKey = "4e8845222bc6a858d55f09ca29dc833a";

function Doctor(disease) {
  this.disease = disease;
}

Doctor.prototype.find = function(disease, callback) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + disease + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
    callback(result);
    })
   .fail(function(error){
      // console.log("fail");
    });
};

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
