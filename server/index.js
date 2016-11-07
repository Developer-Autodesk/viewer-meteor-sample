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
                client_id: process.env.FORGE_CLIENT_ID || '<your consumer key>',
                client_secret: process.env.FORGE_CLIENT_SECRET || '<your secret key>',
                grant_type: 'client_credentials',
                scope: 'data:read'
            },

            // If you want to use the Autodesk View & Data API on the staging server, change this url to
            // https://developer-stg.api.autodesk.com
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
