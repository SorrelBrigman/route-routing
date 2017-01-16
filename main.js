var app = angular.module("routeRouterApp", ["ngRoute"]);


app.config(($routeProvider)=> {
  $routeProvider
  .when("/"), {
    controller: "MainCtrl",
    templateUrl: "partials/main.html"
  }
  .when("/first"), {
    controller: "FirstHighwayCtrl",
    templateUrl: "partials/firsthighway.html"
  }
  .when("/second"), {
    controller: "SecondHighwayCtrl",
    templateUrl: "partials/secondhighways.html"
  }
})


app.controller("MainCtrl", funciton($scope) {
  $scope.name: ""
  $scope.description: ""
})

app.controller("FirstHighwayCtrl", funciton($scope) {
  $scope.name: ""
  $scope.description: ""
})

app.controller("SecondHighwayCtrl", funciton($scope) {
  $scope.name: ""
  $scope.description: ""
})
