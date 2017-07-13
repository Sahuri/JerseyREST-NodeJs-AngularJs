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
       // ,'ngMaterial'
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
           }).state('lamps', {
               url: '/',
               templateUrl: 'lamps.html',
               controller: 'lampsController',
               controllerAs: 'vm',
               title: 'Lamps'
           }).state('gates', {
               url: '/',
               templateUrl: 'gates.html',
               controller: 'gatesController',
               controllerAs: 'vm',
               title: 'Gates'
           }).state('doors', {
               url: '/',
               templateUrl: 'doors.html',
               controller: 'doorsController',
               controllerAs: 'vm',
               title: 'Doors'
           }).state('myaccount', {
               url: '/',
               templateUrl: 'my-account.html',
               controller: 'myaccountController',
               controllerAs: 'vm',
               title: 'My Account'
           });
       $urlRouterProvider.otherwise('/');
   }  
    
})();