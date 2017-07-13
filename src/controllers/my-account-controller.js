/**
 * 
 */
(function () {
    'use strict';
    
    angular
    .module('app')
    .controller('myaccountController', myaccountController);

    myaccountController.$inject = ['$rootScope','$scope','$state'];
/* @ngInject */
function myaccountController($rootScope,$scope, $state) {
	
	var vm = this;
	vm.title="JerseyRESTfull-NodeJs-AngularJs";
}
})();