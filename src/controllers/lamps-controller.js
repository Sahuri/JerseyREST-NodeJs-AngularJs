/**
 * 
 */
(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('lampsController', lampsController);

    lampsController.$inject = ['$rootScope','$scope','$state'];
/* @ngInject */
function lampsController($rootScope,$scope, $state) {
	
	var vm = this;
	vm.title="JerseyRESTfull-NodeJs-AngularJs";
}
})();