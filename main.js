angular.module('myApp',[]).
	controller('FormController', function($scope) { 
			
			$scope.phoneNumberPattern = (function() {
			   var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
			    return {
			        test: function(value) {
			            if( $scope.requireTel === false ) {
			                return true;
			            }
			            return regexp.test(value);
			        }
			    };
			})();

			$scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
					

		});


$(document).on('ready', function() {
  
});