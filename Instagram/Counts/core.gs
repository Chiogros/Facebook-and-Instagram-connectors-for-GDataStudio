// see https://developers.facebook.com/docs/instagram-api/guides/business-discovery#getting-an-account-s-follower---media-count
var fields = ['followers_count','follows_count','media_count'];

function getSchema(request) {
  return FacebookCore.getSchema(request, getFields(), fields);
}

function getData(request) {

  // Create schema for requested fields
  var requestedFields = getRequestedFields(request);

  // Get rows
  var rows = fetchDataFromAPI(requestedFields, request);

  return {
    schema: requestedFields.build(),
    rows: rows
  };
}

function getRequestedFields(request) {
  return FacebookCore.getRequestedFields(request, getFields());
}

function getConfig(request) {
  return FacebookCore.getConfig();
}

function isAdminUser() {
  return FacebookCore.isAdminUser();
}

/*function isAuthValid() {
  return FacebookCore.isAuthValid();
}*/
