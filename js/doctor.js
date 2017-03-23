var apiKey = require('./../.env').apiKey;

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

  exports.doctorModule = Doctor;
