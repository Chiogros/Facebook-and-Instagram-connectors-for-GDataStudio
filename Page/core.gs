// see https://developers.facebook.com/docs/graph-api/reference/page
var fields = ['id', 'about', 'access_token', 'ad_campaign', 'affiliation', 'app_id', 'artists_we_like', 'attire', 'awards', 'band_interests', 'bio', 'birthday', 'booking_agent', 'built', 'can_checkin', 'can_post', 'category', 'category_list', 'checkins, company_overview', 'connected_instagram_account', 'contact_address', 'country_page_likes', 'cover', 'culinary_team', 'current_location, delivery_and_pickup_option_info', 'description', 'description_html', 'differently_open_offerings', 'directed_by', 'display_subtext', 'displayed_message_response_time', 'emails', 'engagement', 'fan_count', 'featured_video', 'features', 'followers_count', 'food_styles', 'founded', 'general_info', 'general_manager', 'genre', 'global_brand_page_name','global_brand_root_id','has_transitioned_to_new_page_experience','has_whatsapp_business_number','has_whatsapp_number','hometown','hours','impressum','influences','instagram_business_account','is_always_open','is_chain','is_community_page','is_eligible_for_branded_content','is_messenger_bot_get_started_enabled','is_messenger_platform_bot','is_owned','is_permanently_closed','is_published','is_unclaimed','is_webhooks_subscribed','leadgen_tos_accepted','leadgen_tos_accepting_user','link','members','merchant_review_status','messenger_ads_default_page_welcome_message','messenger_ads_default_quick_replies','messenger_ads_quick_replies_type','mission','mpg','name','name_with_location_descriptor','network','new_like_count','offer_eligible','overall_star_rating','page_token','parking','payment_options','personal_info','personal_interests','pharma_safety_info','phone','place_type','plot_outline','press_contact','price_range','privacy_info_url','produced_by','products','promotion_eligible','promotion_ineligible_reason','public_transit','rating_count','record_label','release_date','restaurant_services','restaurant_specialties','schedule','screenplay_by','season','single_line_address','starring','store_code','store_location_descriptor','store_number','studio','supports_donate_button_in_live_video','talking_about_count','temporary_status','unread_message_count','unread_notif_count','unseen_message_count','username','verification_status','website','were_here_count','whatsapp_number','written_by'];

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
