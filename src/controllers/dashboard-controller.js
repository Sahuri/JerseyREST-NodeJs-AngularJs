/**
 * 
 */
(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$rootScope','$scope','$state'];
/* @ngInject */
function dashboardController($rootScope,$scope, $state) {
	
	var vm = this;
	vm.title="JerseyRESTfull-NodeJs-AngularJs";
}
})();