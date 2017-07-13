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
	
	vm.eventHome=function(){
		$('#myNavbar > ul > li').attr('class','');
		$('#home').attr('class','active');
		$state.go('dashboard');
	};
	
	vm.eventLamps=function(){
		$('#myNavbar > ul > li').attr('class','');
		$('#lamps').attr('class','active');
		$state.go('lamps');
	};
	
	vm.eventDoors=function(){
		$('#myNavbar > ul > li').attr('class','');
		$('#doors').attr('class','active');
		$state.go('doors');
	};
	
	vm.eventGates=function(){
		$('#myNavbar > ul > li').attr('class','');
		$('#gates').attr('class','active');
		$state.go('gates');
	};
	
	vm.eventMyAccount=function(){
		$('#myNavbar > ul > li').attr('class','');
		$('#myaccount').attr('class','active');
		$state.go('myaccount');
	};
	
}
})();