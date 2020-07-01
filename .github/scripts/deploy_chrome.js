require('dotenv').config();

const deploy = async () => {
  const webStore = require('chrome-webstore-upload')({
    extensionId: process.env.extensionId,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    refreshToken: process.env.refreshToken,
  });

  const fs = require('fs');

  const myZipFile = fs.createReadStream('./packaged/chrome.zip');

  await webStore.fetchToken().then(async (token) => {
    // Token is a string
    await webStore.uploadExisting(myZipFile, token).then((res) => {
      console.log(res);
      // Response is a Resource Representation
      // https://developer.chrome.com/webstore/webstore_api/items#resource
    });
    const target = 'default'; // optional. Can also be 'trustedTesters'

    await webStore
      .publish(token)
      .then((res) => {
        console.log(res);
        // Response is documented here:
        // https://developer.chrome.com/webstore/webstore_api/items/publish
      })
      .catch((err) => console.log(err));
  });
};

deploy();
