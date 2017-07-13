/**
 * 
 */
(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('doorsController', doorsController);

    doorsController.$inject = ['$rootScope','$scope','$state'];
/* @ngInject */
function doorsController($rootScope,$scope, $state) {
	
	var vm = this;
	vm.title="JerseyRESTfull-NodeJs-AngularJs";
}
})();