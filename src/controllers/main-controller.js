/**
 * 
 */
(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('mainController', mainController);

mainController.$inject = ['$rootScope','$scope','$state'];
/* @ngInject */
function mainController($rootScope,$scope, $state) {
	
	var vm = this;
	vm.title="JerseyRESTfull-NodeJs-AngularJs";
}
})();