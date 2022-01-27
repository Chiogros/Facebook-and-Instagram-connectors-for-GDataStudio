# Facebook and Instagram connectors for GDataStudio
Google Data Studio connectors to fetch data from Graph API.

## Connectors organization
There is a main connector called `Core` that is common for both Facebook and Instagram (since both use Graph API): it retrieves data, transforms data for GDS and also it sets the authentication method.
Children connectors (Page, Counts, ...) use Core functions and use specific functions they have for their API endpoint.

## How to use them on GDS

### Setup Core connector
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Name it
4. Go to project settings
5. Check `Display appsscript.json manifest file`
6. Take note about Script ID (useful for children connectors)
7. Go back to code window
8. Create files and set code for Core connector

### Setup child connector
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Name it
4. Go to project settings
5. Check `Display appsscript.json manifest file`
7. Go back to code window
8. Create files and set code for the child connector
9. In `appsscript.json`, change `Dependencies` > `Libraries` > `LibraryID` to the Core script ID you took note
10. Deploy it (easiest by going through `Use old editor` button > `Publish` > `Publish from manifest file`)

### Use connectors in GDS
1. Go to [Google Data Studio](https://datastudio.google.com)
2. Create > Data source
3. Search for your deployed child connector
4. Fill credentials
5. Now you can import it in your GDS reports

## Get access token
1. Create a Facebook developer account
2. On your developer portal, create an app
3. Take note about app ID and secret key shown in app settings
4. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer)
5. Add right permissions for your token (you can find which ones are required in `permissions` file in connector's folder)
6. Generate the token
7. Go [here](https://graph.facebook.com/v11.0/oauth/access_token?grant_type=fb_exchange_token&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&fb_exchange_token=TOKEN) by changing `CLIENT_ID`, `CLIENT_SECRET` and `TOKEN` with yours.
8. Fetch the new token, available for 60 days
9. Use this one to fill connector credentials

## How to create a new Facebook or Instagram connector
First, copy Page or Counts connector.

Link to [Instagram API documentation](https://developers.facebook.com/docs/instagram-api/) and to [Facebook global documentation](https://developers.facebook.com/docs), where you can find information for steps below.

Then you have 3 things to change :
1. Change `fields` array that contains all fields to retrieve from API (stick with thoses in steps below)
```javascript
// core.gs
var fields = ['id', 'about', 'access_token', 'ad_campaign', ...];
```
2. Put fetchable fields from API
```javascript
// fields.gs
function getFields(request) {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
    .setId('Facebook_id')
    .setType(types.NUMBER); // BOOLEAN, TEXT, ...

  fields.newDimension()
    .setId('Facebook_FieldName_example')
    .setType(types.NUMBER); // BOOLEAN, TEXT, ...
  
  // put all fetchable fields
  
  return fields;
}
```
3. Handle each data row
```javascript
// dataHandler.gs
function responseToRows(requestedFields, response) {

  var rows = new Array();

  var fields = requestedFields.asArray();
  
  // Filter for requested fields
  fields.forEach(function (field) {
    
    switch (field.getId()) {
        case 'Facebook_id':
          return rows.push(response.id);
        case 'Facebook_FieldName_example':
          return rows.push(response.FieldName_example);
        // put all other cases
        default:
          break;
    }
  });

  return rows.map(function(row) {
    return { values: [row] };
  });
}
```



## If needed
Send me an email at alexandre.bouijoux@gmail.com :)
