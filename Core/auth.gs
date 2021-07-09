function getAuthType() {
  var AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.NONE)
    .build();
}

function isAdminUser() {
  return true;
}

function checkForValidCredentials(fields, request) {

  var httpResponses = connect(fields, request);

  httpResponses.forEach(function(httpResponse) {
    switch (httpResponse.getResponseCode()) {
        case 10:
        // case 200:
          cc.newUserError()
            .setText('It seems that token does not have permission for that action.')
            .throwException();
          break;
        case 4:
        case 17:
          cc.newUserError()
            .setText('You reached maximum requests towards Facebook API. Take a rest.')
            .throwException();
          break;
        case 100:
          cc.newUserError()
            .setText('ID not valid. Ensure that you properly copied it and that you choose the right connector.')
            .throwException();
          break;
        case 190:
          cc.newUserError()
            .setText('Bearer token not valid, maybe it has expired. Reconnect connector with a new one.')
            .throwException();
          break;
        /*default:
          cc.newUserError()
            .setText('Something went wrong, please verify inputs. Error code returned by API: ' + response.getResponseCode())
            .throwException();
          break;*/
      }
  });
  
  // All requests are okay
  return true;
}
