Meteor.startup(function () {
    // code to run on server at startup
});


Meteor.methods({

    getAccessToken: function () {

        this.unblock();

        var credentials = {

            credentials: {
                // Replace placeholder below by the Consumer Key and Consumer Secret you got from
                // http://developer.autodesk.com/ for the production server
                client_id: process.env.CONSUMERKEY || '<your consumer key>',
                client_secret: process.env.CONSUMERSECRET || '<your secret key>',
                grant_type: 'client_credentials'
            },

            // If you which to use the Autodesk View & Data API on the staging server, change this url
            BaseUrl: 'https://developer.api.autodesk.com',
            Version: 'v1'
        };


        credentials.AuthenticationURL = credentials.BaseUrl + '/authentication/' + credentials.Version + '/authenticate'

        //must use synchronous mode
        var result = Meteor.http.post(
            credentials.AuthenticationURL,
            {params: credentials.credentials}
        );
        //get the access token object
        return result.data;


    }
})