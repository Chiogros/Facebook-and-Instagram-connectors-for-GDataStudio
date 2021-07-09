function fetchDataFromAPI(requestedFields, request) {
  var rawRows = FacebookCore.fetchDataFromAPI(request, fields);
  
  return responseToRows(requestedFields, rawRows);
}
