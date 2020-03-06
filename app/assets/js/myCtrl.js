  /***************************************
    Main App Controller
    ****************************************/
  app.controller('mainApp', function($scope, $timeout, homeContent) {
    /***************************************
    Getting home.json File data
    ****************************************/
    homeContent.get(function(data) {
      $scope.homeContent = data;
    })
    $scope.isActive = false;
    $scope.mobileNavActive = false;

    /***************************************
    Hamburger Click Function
    ****************************************/
    $scope.mobileNav = function() {
      $scope.ismobileNavActive = !$scope.ismobileNavActive;
    };
    /***************************************
    Check in Subscript Active Toggle function
    ****************************************/
    $scope.expand = function() {
      $scope.isActive = !$scope.isActive;
      $timeout(function() {
        $scope.isActive = false;
      }, 100)
    };
    /***************************************
    Mobile vew Tabs active class toggle
    ****************************************/
    $scope.activeTab = 0;
    $scope.showTabs = function(key) {
      $scope.activeTab = key;
    };
  });
  /***************************************
  diagramCtrl Controller for Chart.js Data
  ****************************************/
  app.controller('diagramCtrl', function($scope, homeContent) {
    $scope.labels = $scope.homeContent.diagram.labels;
    $scope.data = $scope.homeContent.diagram.data;

  })
