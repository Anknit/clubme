angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'side-menu21': {
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardCtrl'
            }
        }
    })

    .state('app', {
        url: '/menuitems',
        templateUrl: 'templates/app.html',
        controller: 'appCtrl'
    })

    .state('app.login', {
        url: '/login',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    })

    .state('signup', {
        url: '/signup',
        authOnly: false,
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
    })

    .state('app.settings', {
        url: '/settings',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/settings.html',
                controller: 'settingsCtrl'
            }
        }
    })

    .state('app.fAQs', {
        url: '/faqs',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/fAQs.html',
                controller: 'fAQsCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            }
        }
    })

    .state('app.payment', {
        url: '/payment',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/payment.html',
                controller: 'paymentCtrl'
            }
        }
    })

    .state('app.promotions', {
        url: '/promotions',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/promotions.html',
                controller: 'promotionsCtrl'
            }
        }
    })

    .state('app.offers', {
        url: '/offers',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/offers.html',
                controller: 'offersCtrl'
            }
        }
    })

    .state('app.notifications', {
        url: '/notifications',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/notifications.html',
                controller: 'notificationsCtrl'
            }
        }
    })

    .state('app.beAVendor', {
        url: '/vendor',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/beAVendor.html',
                controller: 'beAVendorCtrl'
            }
        }
    })

    .state('app.help', {
        url: '/help',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/help.html',
                controller: 'helpCtrl'
            }
        }
    })

    .state('app.about', {
        url: '/about',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/about.html',
                controller: 'aboutCtrl'
            }
        }
    })

    .state('app.rateCards', {
        url: '/ratecards',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/rateCards.html',
                controller: 'rateCardsCtrl'
            }
        }
    })

    .state('app.support', {
        url: '/support',
        authOnly: false,
        views: {
            'side-menu21': {
                templateUrl: 'templates/support.html',
                controller: 'supportCtrl'
            }
        }
    })

    .state('app.serviceHistory', {
        url: '/servicehistory',
        authOnly: true,
        views: {
            'side-menu21': {
                templateUrl: 'templates/serviceHistory.html',
                controller: 'serviceHistoryCtrl'
            }
        }
    })
    
    .state('vehicles', {
        url: '/vehicleType/:type',
        authOnly: true,
        templateUrl: 'templates/vehicleType.html',
        controller: 'vehicleTypeCtrl'
    })
    
    .state('searchService', {
        url: '/searchService/:vehicletype/:vehicle',
        authOnly: true,
        templateUrl: 'templates/searchService.html',
        controller: 'searchServiceCtrl'
    })
    
    $urlRouterProvider.otherwise('/menuitems/dashboard')
});