
Template.viewer.onCreated(function(){

    //console.log('viewer template created.')
    Meteor.call('getAccessToken', function (error, result) {
        if (error) {
            console.log(error);
        }
        else {
            var token = result.access_token;
            console.log(token);

            //initialize the viewer
            initViewer(token);

        }

    });

});



var initViewer = function (token) {

    var defaultUrn = 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE2LTAyLTAxLTA5LTM2LTQ1LWtubXRvdnV2azZrc2swc3V0aG9hNDZ4cDJkenEvUm9ib3RBcm0uZHdmeA==';

    if (defaultUrn.indexOf('urn:') !== 0)
        defaultUrn = 'urn:' + defaultUrn;

    function getToken(){
        //sync call
        var token = Meteor.call('getAccessToken');
        console.log(token);
        return token.access_token;
    }

    function initializeViewer(containerId, documentId, role) {
        var viewerContainer = document.getElementById(containerId);
        var viewer = new Autodesk.Viewing.Private.GuiViewer3D(
            viewerContainer);
        viewer.start();

        Autodesk.Viewing.Document.load(documentId,
            function (document) {
                var rootItem = document.getRootItem();
                var geometryItems = Autodesk.Viewing.Document.getSubItemsWithProperties(
                    rootItem,
                    { 'type': 'geometry', 'role': role },
                    true);

                viewer.load(document.getViewablePath(geometryItems[0]));
            },

            // onErrorCallback
            function (msg) {
                console.log("Error loading document: " + msg);
            }
        );

        viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, function(){

            console.log('GEOMETRY_LOADED_EVENT');

            //load extensions
            require(['/extensions/Autodesk.ADN.Viewing.Extension.Basic/Autodesk.ADN.Viewing.Extension.Basic.js'],
                function(){
                viewer.loadExtension('Autodesk.ADN.Viewing.Extension.Basic');
            });

            //load extensions
            require(['/extensions/Autodesk.ADN.Viewing.Extension.DockingPanel/Autodesk.ADN.Viewing.Extension.DockingPanel.js'],
                function(){
                    viewer.loadExtension('Autodesk.ADN.Viewing.Extension.DockingPanel');
                });

            //load extensions
            require(['/extensions/Autodesk.ADN.Viewing.Extension.Workshop/Autodesk.ADN.Viewing.Extension.Workshop.js'],
                function(){
                    viewer.loadExtension('Autodesk.ADN.Viewing.Extension.Workshop');
                });


        });
    }

    function initialize() {
        var options = {
            env: "AutodeskProduction",
            //getAccessToken: getToken,
            //refreshToken: getToken
            accessToken : token
        };

        Autodesk.Viewing.Initializer(options, function () {
            initializeViewer('viewer', defaultUrn, '3d');
        });
    }

    //call
    initialize();


}



