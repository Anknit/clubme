angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives', 'app.services', ])

.value('appvars', {})
.config(function ($ionicConfigProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
})

.run(function ($ionicPlatform, $rootScope, $location, $ionicHistory, $state, $http, appvars) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    window.firebase = window.firebase || {};
    appvars.dbRoot = window.app.ENVIRONMENT + '/' + window.app.DB_VERSION + '/';
    appvars.auth = appvars.auth || {};
    appvars.profile = appvars.profile || [];
    (function (firebase, authVar, profileVar) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                if (user != null) {
                    authVar.isLogin = true;
                    authVar.displayName = user.displayName;
                    authVar.email = user.email;
                    authVar.photoUrl = user.photoURL;
                    authVar.uid = user.uid;
                    user.providerData.forEach(function (profile) {
                        profileVar.push({
                            provider: profile.providerId,
                            providerUID: profile.uid,
                            name: profile.displayName,
                            email: profile.email,
                            photoUrl: profile.photoURL
                        });
                    });
                }
            } else {
                authVar.isLogin = false;
            }
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true,
                historyRoot: true
            });
            $ionicHistory.clearHistory();
            $state.go('app.dashboard');
            $ionicHistory.clearHistory();
        });
    })(window.firebase, appvars.auth, appvars.profile);
    $rootScope.$on('$stateChangeStart', function (event, toState, fromState) {
        if(toState.name == 'app.login' && appvars && appvars.auth && appvars.auth.isLogin) {
            $state.go('app.dashboard');
        }
        else if (toState.authOnly && !appvars.auth.isLogin) {
            $state.go('app.dashboard');
        }
    });

})

.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function ($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag() {
                $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag() {
                $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])