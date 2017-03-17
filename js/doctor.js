function Doctor(disease) {
  this.disease = disease;
}

Doctor.prototype.find = function(disease) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + disease + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=4e8845222bc6a858d55f09ca29dc833a')
     .then(function(result) {
        for (var i = 0; i < result.data.length; i++) {
          $('.showDoctors').append('<tr>' + '<th scope="row">' + [i + 1] + '</th>' + '<td>' + result.data[i].profile.first_name + ' ' + '</td>' + '<td>' + result.data[i].profile.last_name + '</td>' + '<td>' +  result.data[i].profile.bio + '</td>' +  '</tr>');
          console.log(result.data[i].profile.first_name);
        }
      })
     .fail(function(error){
        // console.log("fail");
      });
  };

  exports.doctorModule = Doctor;
