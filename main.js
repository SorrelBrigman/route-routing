

var app = angular.module("routeRouterApp", ["ngRoute"]);


app.config(($routeProvider) => {
  $routeProvider
  .when("/", {
    controller: "MainCtrl",
    templateUrl: "partials/main.html"
  })
  .when("/first", {
    controller: "FirstHighwayCtrl",
    templateUrl: "partials/firsthighway.html"
  })
  .when("/second", {
    controller: "SecondHighwayCtrl",
    templateUrl: "partials/secondhighway.html"
  }).otherwise({redirectTo: '/'})
})


app.controller("MainCtrl", function($scope) {
  $scope.image = "http://www.9hdw.com/uploads/images/original/2013-06/3549_beautiful-highway-photos.jpg",
  $scope.name = "A famouse Highway to Learn About",
  $scope.description = "There are all sorts of interesting facts about highways.  Learn more by checking out our other highways."
})

app.controller("FirstHighwayCtrl", function($scope) {
  $scope.image = "http://cdn-image.travelandleisure.com/sites/default/files/styles/tnl_redesign_article_landing_page/public/highway-101.jpg?itok=WsmsTXeE",
  $scope.name = "The 101",
  $scope.description = "U.S. Route 101, or U.S. Highway 101 (US 101) is a north–south United States Numbered Highway that runs through the states of California, Oregon, and Washington, on the West Coast of the United States. It is also known as El Camino Real (The Royal Road) where its route along the southern and central California coast approximates the old trail which linked the Spanish missions, pueblos, and presidios. It merges at some points with California State Route 1 (SR 1)."
})

app.controller("SecondHighwayCtrl", function($scope) {
  $scope.image = "http://antebellumtrail.org/wp-content/uploads/2014/08/antebellum-bike.jpg",
  $scope.name = "The Antebellum Trail",
  $scope.description = "The Antebellum Trail is a 100 mile trek through seven historic communities that escaped Sherman’s burning march through Georgia. You can spend your days on Georgia’s Antebellum Trail enjoying history, shopping and dining."
})
