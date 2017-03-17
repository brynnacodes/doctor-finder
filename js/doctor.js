function Doctor(disease) {
  this.disease = disease;
}

Doctor.prototype.find = function(disease) {
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + disease + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=4e8845222bc6a858d55f09ca29dc833a')
     .then(function(result) {
        for (var i = 0; i < result.data.length; i++) {
          $('.showDoctors').append('<table class="table">' + '<thead>' + '<tr>' + '<th> Name </th>' + '<th> Bio </th>' + '</tr>' + '</thead>' + '<tbody>' + '<tr>' + '<td>' + result.data[i].profile.last_name + ', ' + result.data[i].profile.first_name + ', ' +  result.data[i].profile.title + '</td>' + '<td>' +  result.data[i].profile.bio + '</td>' +  '</tr>' + '</tbody>' + '</table>');
          console.log(result.data[i].profile.first_name);
        }
      })
     .fail(function(error){
        // console.log("fail");
      });
  };

  exports.doctorModule = Doctor;
