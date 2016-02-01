///////////////////////////////////////////////////////////////////////////////
// Basic viewer extension
// by Philippe Leefsma, October 2014
//
//

//   Usage example:

    // // Let's load the Basic extension
    // var options = {
        
    //     //no options needed for this sample.

    // };
    // viewer.loadExtension('Autodesk.ADN.Viewing.Extension.Basic',options);



///////////////////////////////////////////////////////////////////////////////
AutodeskNamespace("Autodesk.ADN.Viewing.Extension");

Autodesk.ADN.Viewing.Extension.Basic = function (viewer, options) {

    Autodesk.Viewing.Extension.call(this, viewer, options);

    var _self = this;

    _self.load = function () {

        console.log('Autodesk.ADN.Viewing.Extension.Basic loaded');
        return true;
    };

    _self.unload = function () {

        console.log('Autodesk.ADN.Viewing.Extension.Basic unloaded');
        return true;
    };


    Autodesk.Viewing.Viewer3D.prototype.turnOff = function(dbIds){

        var node ;

        if (Array.isArray(dbIds)) {
            for (var i = 0; i < dbIds.length; i++) {
                var id = dbIds[i];

                node = viewer.model.getData(). instanceTree.dbIdToNode[id];
                //hide the node completedly
                viewer.impl.visibilityManager.setNodeOff(node, true);

            }
            
        }
        else
        {
            node = viewer.model.getData(). instanceTree.dbIdToNode[dbIds];
            //hide the node completedly
            viewer.impl.visibilityManager.setNodeOff(node, true);
         
        }

        
        
      
    };

    Autodesk.Viewing.Viewer3D.prototype.turnOn = function(dbIds) {

        var node ;

       if (Array.isArray(dbIds)) {
            for (var i = 0; i < dbIds.length; i++) {
                var id = dbIds[i];

                node = viewer.model.getData(). instanceTree.dbIdToNode[id];
                //show the node
                viewer.impl.visibilityManager.setNodeOff(node, false);
            }
            
        }
        else
        {
            node = viewer.model.getData(). instanceTree.dbIdToNode[dbIds];
            //show the node
            viewer.impl.visibilityManager.setNodeOff(node, false);

        }

    };
};

Autodesk.ADN.Viewing.Extension.Basic.prototype =
    Object.create(Autodesk.Viewing.Extension.prototype);

Autodesk.ADN.Viewing.Extension.Basic.prototype.constructor =
    Autodesk.ADN.Viewing.Extension.Basic;

Autodesk.Viewing.theExtensionManager.registerExtension(
    'Autodesk.ADN.Viewing.Extension.Basic',
    Autodesk.ADN.Viewing.Extension.Basic);

