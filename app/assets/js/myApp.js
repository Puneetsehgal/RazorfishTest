var app = angular.module("myApp",['ngAnimate','ui.router','chart.js']);

app.config(function($stateProvider, $urlRouterProvider, ChartJsProvider){
  /***************************************
  Diagram Colurs
  ****************************************/
  ChartJsProvider.setOptions({
     colours: ['#4daf7b','#e86742','#ebc85e','#f4ede7'],
     responsive: false
   });
     $urlRouterProvider.otherwise("/diagram");
     /***************************************
     View State
     ****************************************/
     $stateProvider
    .state('diagram',{
      url:'/diagram',
      templateUrl : 'views/diagram.html',
      controller  : 'diagramCtrl',
    })
    .state('report',{
      url:'/report',
      templateUrl : 'views/report.html',
      controller  : '',
    });
});
