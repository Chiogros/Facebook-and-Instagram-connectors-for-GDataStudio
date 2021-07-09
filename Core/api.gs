function fetchDataFromAPI(request, fields) {

  // will contains all fetched rows
  var parsedResponses = new Object();

  try {

    // Fetch data
    var httpResponses = connect(fields, request);
    
    httpResponses.forEach(function(httpResponse) {
      
      var parsedHttpResponse = JSON.parse(httpResponse);

      for (const [key, value] of Object.entries(parsedHttpResponse)) {
        parsedResponses[key] = value;
      }
      
    });
    
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error fetching data from API. ' + e)
      .setText('There was an error communicating with Facebook. Try again later.')
      .throwException();
  }

  return parsedResponses;
}
