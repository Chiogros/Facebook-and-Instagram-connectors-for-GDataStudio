var cc = DataStudioApp.createCommunityConnector();

function getFields() {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newMetric()
    .setId('Instagram_Counts_followers_count')
    .setType(types.NUMBER);
  
  fields.newMetric()
    .setId('Instagram_Counts_follows_count')
    .setType(types.NUMBER);
  
  fields.newMetric()
    .setId('Instagram_Counts_media_count')
    .setType(types.NUMBER);
  
  return fields;
}
