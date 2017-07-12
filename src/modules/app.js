/**
 * 
 */

(function () {
    'use strict';
    var app = angular.module('app', [
        'ui.router'
        //,'nemLogging'
        //,'uiGmapgoogle-maps'
        //,'ui.bootstrap'
        //, 'ngMap'
        //,'ngProgress'
        //,'socialLogin'
        //,'angular-jinqjs'
        //,'app.component'
        //,'app.services'
        ,'ngMaterial'
        //,'cl.paging'
        //, 'ngSanitize'
        ]);
    
    app.config(routeConfig);
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfig($stateProvider, $urlRouterProvider) {
       $stateProvider
           .state('dashboard', {
               url: '/',
               templateUrl: 'dashboard.html',
               controller: 'dashboardController',
               controllerAs: 'vm',
               title: 'Dashboard'
           });
       /*$urlRouterProvider.otherwise('/');*/
   }  
    
})();