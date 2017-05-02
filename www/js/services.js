angular.module('app.services', [])

.service('authService', ['$http', function ($http) {
    var authService = {};

    function _updateUserProfile(profileObj) {
        var user = firebase.auth().currentUser;
        if (user != null) {
            user.updateProfile(profileObj).then(function () {
                // Update successful.
            }, function (error) {
                // An error happened.
            });
        }
    }

    function _updateUserEmail(email) {
        var user = firebase.auth().currentUser;
        user.updateEmail(email).then(function () {
            // Update successful.
        }, function (error) {
            // An error happened.
        });
    }

    function _sendVerificationMail() {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function () {
            // Email sent.
        }, function (error) {
            // An error happened.
        });
    }

    function _updatePassword(newPassword) {
        var user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(function () {
            // Update successful.
        }, function (error) {
            // An error happened.
        });
    }

    function _sendPasswordResetMail(emailAddress) {
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
        }, function (error) {
            // An error happened.
        });
    }

    function _reauthenticateUser(credential) {
        var user = firebase.auth().currentUser;
        user.reauthenticate(credential).then(function () {
            // User re-authenticated.
        }, function (error) {
            // An error happened.
        });
    }

    function _createUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    function _signInUser(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    function _signOut() {
        firebase.auth().signOut().then(function () {
        }, function (error) {
        });
    }

    function _googleSignIn(callback) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
        firebase.auth().signInWithPopup(provider).then(function(result){
            callback(result);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    function _facebookSignIn(callback) {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
            callback(result);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
    
    function _verifyAuthToken(callback) {
        firebase.auth().currentUser.getToken(true).then(function(idToken) {
            $http({method:'GET', url:'http://localhost:8080/user/verifyToken/' + idToken}).then(function(response){
                callback(idToken, response);
            });
        });
    }


    authService.create = _createUser;
    authService.reauth = _reauthenticateUser;
    authService.resetPassword = _sendPasswordResetMail;
    authService.updatePassword = _updatePassword;
    authService.verifyMail = _sendVerificationMail;
    authService.updateEmail = _updateUserEmail;
    authService.updateProfile = _updateUserProfile;
    authService.signIn = _signInUser;
    authService.signOut = _signOut;
    authService.googleSignIn = _googleSignIn;
    authService.facebookSignIn = _facebookSignIn;
    authService.verifyToken = _verifyAuthToken;

    return authService;
}])

.service('firebaseApi', ['appvars', function (appvars) {
    var firebaseAPI = {};

    function db() {
        this.databaseObj = window.firebase.database();
        this.dbRoot = appvars.dbRoot;
    };
    
    db.prototype.DB_Append = function (path, data, callback) {
        var newDbEntry = this.databaseObj.ref(this.dbRoot + path).push();
        newDbEntry.set(data, callback);
    }

    db.prototype.DB_Insert = function (path, data, callback) {
        this.databaseObj.ref(this.dbRoot + path).set(data, callback);
    }

    db.prototype.DB_Update = function (path, data, callback) {
        this.databaseObj.ref(this.dbRoot + path).update(data, callback);
    }

    db.prototype.DB_Read = function (path, callback) {
        this.databaseObj.ref(this.dbRoot + path).once("value", callback);
    }

    db.prototype.DB_Watch = function (path, callback) {
        this.databaseObj.ref(this.dbRoot + path).on("value", callback);
    }

    db.prototype.DB_StopWatch = function (path, callback) {
        this.databaseObj.ref(this.dbRoot + path).off("value", callback);
    }
    
    firebaseAPI.data = db;
    
    return firebaseAPI;
}]);