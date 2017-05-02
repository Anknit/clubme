angular.module('app.controllers', [])
  
.controller('dashboardCtrl', ['$scope', '$stateParams', '$location', 'firebaseApi', '$ionicTabsDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location, firebaseApi) {
    var dbObj = new firebaseApi.data();
    $scope.vehicleType = {};
    dbObj.DB_Read('vehicles/vehicleCategories', function(response) {
        $scope.vehicleType = response.val();
    });
    $scope.showVehicleList = function (vehicletype) {
        $location.path('vehicleType/' + vehicletype);
    };

}])
   
.controller('appCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', 'authService', 'appvars', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, authService, appvars) {
    function verifyToken() {
        authService.verifyToken(function(idToken, response) {
            if(response.data && response.data.tokenValid) {
                appvars.auth.token = idToken;
                appvars.auth.phone_verified = response.data.mobile_verified;
                appvars.auth.email_verified = response.data.email_verified;
                window.localStorage.setItem('user_id_token', idToken);
                window.localStorage.setItem('mobile_verified', response.data.mobile_verified);
                window.localStorage.setItem('email_verified', response.data.email_verified);
            } else {
                appvars.auth.isLogin = false;
            }
        });
    }
    $scope.googleSignIn = function () {
        authService.googleSignIn(verifyToken);
    }
    $scope.facebookSignIn = function () {
        authService.facebookSignIn(verifyToken);
    }
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', 'authService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, authService) {
    $scope.signout = authService.signOut;
}])
   
.controller('fAQsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('promotionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('offersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('notificationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('beAVendorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('helpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('rateCardsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('supportCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('serviceHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('searchServiceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
console.log($stateParams);

}])

.controller('vehicleTypeCtrl', ['$scope', '$stateParams', '$location',
function ($scope, $stateParams, $location) {
    $scope.vehicleType = $stateParams.type;
    switch($scope.vehicleType) {
        case 'twowheelers':
            break;
        case 'cars':
            break;
        case 'others':
            break;
        default:
            break;
    }
    var vehicleList = {
        twowheelers: [
            'Motorcycle',
            'Sportsbike',
            'Activa',
            'Scooty',
            'Bullet',
            'Other'
        ], cars: [
            'WagonR',
            'Swift Dzire',
            'Nano',
            'Van',
            'Audi',
            'BMW',
            'Other'
        ], others: [
            'Truck',
            'Bus',
            'Traveller',
            'Auto',
            'Tractor',
            'Tata Ace',
            'Other'
        ]};
    $scope.choice = {};
    $scope.otherVehicle = '';
    $scope.vehicles = vehicleList[$scope.vehicleType];
    $scope.searchService = function () {
        var searchParam = $scope.vehicleType + '/' + $scope.choice.value;
        if($scope.choice.value == 'Other') {
            searchParam = searchParam + '-' + $scope.otherVehicle;
        }
        $location.path('searchService/' + searchParam);
    };
}])