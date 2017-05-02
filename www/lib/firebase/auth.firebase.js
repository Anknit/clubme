(function() {
    window.firebase = window.firebase || {};
    window.appvars = window.appvars || {};
    window.appvars.auth =  window.appvars.auth  || {};
    window.appvars.profile =  window.appvars.profile  || [];
    (function(firebase, authVar, profileVar) {
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
                // No user is signed in.
            }
        });        
    })(window.firebase, window.appvars.auth, window.appvars.profile);
})();