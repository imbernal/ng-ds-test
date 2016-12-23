app.factory("emails" , ["$http" , function($http){

  function getEmails(){

    return $http.get("https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json");
  }

  return {
    getEmails:getEmails
   }
}]);
