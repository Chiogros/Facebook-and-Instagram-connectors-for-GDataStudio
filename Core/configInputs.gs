function setConfig(config) {
  
  config.newInfo()
    .setId('instructions')
    .setText('Some prerequires are needed to retrieve data. See instructions : https://github.com/Chiogros/Facebook-and-Instagram-connectors-for-GDataStudio');
  
  config.newTextInput()
    .setId('bearer_token')
    .setName('Enter Bearer token')
    .setHelpText('https://developers.facebook.com/docs/marketing-apis/overview/authentication#obtain-user-access-token')
    .setPlaceholder('Bearer token');

  config.newTextInput()
    .setId('object_ID')
    .setName('Enter object\'s ID (user, page...)')
    .setHelpText('https://www.facebook.com/help/1503421039731588')
    .setPlaceholder('Object\'s ID');
  
  return config;
}
