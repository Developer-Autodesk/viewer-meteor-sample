# viewer-meteor-sample

[![Node.js](https://img.shields.io/badge/Node.js-4.4.3-blue.svg)](https://nodejs.org/)
[![Meteor](https://img.shields.io/badge/Meteor-1.4-blue.svg)](https://meteor.com/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

# Description

This sample demonstrates how to embed the Forge viewer into a Meteor application.

Please refer to these blog posts for more detailed information:

- [Using the Forge viewer with Meteor](http://adndevblog.typepad.com/cloud_and_mobile/2016/01/using-view-and-data-api-with-meteor.html)
- [Using the Forge viewer with Meteor &ndash; Part 2](http://adndevblog.typepad.com/cloud_and_mobile/2016/01/using-view-and-data-api-with-meteorpart-2.html)

# Setup

For using this sample, you need an Autodesk developer credentials. Visit the [Forge Developer Portal](https://developer.autodesk.com), sign up for an account, then [create an app](https://developer.autodesk.com/myapps/create). For this new app, use **http://localhost:3000/api/forge/callback/oauth** as Callback URL, although is not used on 2-legged flow. Finally take note of the **Client ID** and **Client Secret**.

### Run locally

Install [NodeJS](https://nodejs.org).

Install [Meteor](https://www.meteor.com/install)

Clone this project or download it. It's recommended to install [GitHub desktop](https://desktop.github.com/). To clone it via command line, use the following (**Terminal** on MacOSX/Linux, **Git Shell** on Windows):

    git clone https://github.com/Developer-Autodesk/viewer-meteor-sample

The URN is hardcoded on this sample, for demonstration only, therefore you'll need to place a new URN at the [viewer.js, line 26](https://github.com/Developer-Autodesk/viewer-meteor-sample/blob/master/client/viewer/viewer.js#L26). 

To run it, install the required packages, set the enviroment variables with your client ID & secret and finally start it. Via command line, navigate to the folder where this repository was cloned and use the following:

Mac OSX/Linux (Terminal)

    meteor npm install
    export FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    export FORGE_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    meteor

Windows (use **Node.js command line** from Start menu)

    meteor npm install
    set FORGE_CLIENT_ID=<<YOUR CLIENT ID FROM DEVELOPER PORTAL>>
    set FORGE_CLIENT_SECRET=<<YOUR CLIENT SECRET>>
    meteor

Open the browser: [http://localhost:3000](http://localhost:3000).

# Known Issues

This sample demonstrate how to integrate with Meteor and don't have all Viewer & Model Derivative API features. Please use only to understand how Viewer can be integrated with Meteor. For more complete information, refer to other samples or the [documentation](http://developer.autodesk.com).

# License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.

## Written by

Originally by Daniel Du (Forge Partner Development)

Updated by Augusto Goncalves (Forge Partner Development)

http://forge.autodesk.com