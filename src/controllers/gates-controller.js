/**
 * 
 */
(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('gatesController', gatesController);

    gatesController.$inject = ['$rootScope','$scope','$state'];
/* @ngInject */
function gatesController($rootScope,$scope, $state) {
	
	var vm = this;
	vm.title="JerseyRESTfull-NodeJs-AngularJs";
}
})();