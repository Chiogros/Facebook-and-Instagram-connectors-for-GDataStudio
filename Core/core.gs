var cc = DataStudioApp.createCommunityConnector();

function getSchema(request, rawFields, fieldsToRetrieve) {

  // Check credentials
  checkForValidCredentials(fieldsToRetrieve, request);

  // return fields to retrieve
  var fields = rawFields.build();
  return { schema: fields };
}

function getRequestedFields(request, fields) {

  // Create schema for requested fields
  try {

    requestedFieldIds = request.fields.map(function(field) {
      return field.name;
    });
    
    return fields.forIds(requestedFieldIds);
    
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error requesting fields. ' + e)
      .setText('There was an error requesting fields. File an issue.')
      .throwException();
  }
}

function getConfig() {
  var config = cc.getConfig();
  
  setConfig(config);
  
  config.setDateRangeRequired(false);
  return config.build();
}

function connect(fields, request) {

  var httpResponses = new Array();
  var numberOfFieldsToRetrieve = 10;
  // iterate over fields to retrieve because GDS has a limit URL size
  for (var i = 0 ; i < fields.length ; i += numberOfFieldsToRetrieve) {

    var url = 'https://graph.facebook.com/v11.0/' + request.configParams.object_ID + '?fields=' + fields.slice(i, i + 10) + '&access_token=' + request.configParams.bearer_token;

    // Fetch data
    var httpResponse = UrlFetchApp.fetch(url);
    httpResponses.push(httpResponse);
  }

  return httpResponses;
}
