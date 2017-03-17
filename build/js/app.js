(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/doctor.js":1}]},{},[2]);
