app.controller("HomeController" , [ "$scope" , "emails", function($scope,emails){

  emails.getEmails().then(res=>{
    $scope.allEmails = res.data;

  });
}]);
