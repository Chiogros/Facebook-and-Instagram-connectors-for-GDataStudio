function responseToRows(requestedFields, response) {

  var rows = new Array();

  var fields = requestedFields.asArray();
  
  // Filter for requested fields
  fields.forEach(function (field) {
    
    switch (field.getId()) {
      case 'Instagram_Counts_followers_count':
        rows.push(response.followers_count);
        break;
      case 'Instagram_Counts_follows_count':
        rows.push(response.follows_count);
        break;
      case 'Instagram_Counts_media_count':
        rows.push(response.media_count);
        break;
      default:
        break;
    }
  });

  return rows.map(function(row) {
    return { values: [row] };
  });
  
}
