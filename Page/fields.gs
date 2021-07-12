var cc = DataStudioApp.createCommunityConnector();

function getFields() {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
    .setId('Facebook_Page_id')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_about')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_access_token')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_ad_campaign')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_affiliation')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_app_id')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_artists_we_like')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_attire')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_awards')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_band_interests')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_bio')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_birthday')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_booking_agent')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_built')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_can_checkin')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_can_post')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_category')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_checkins')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_company_overview')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_connected_instagram_account')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_contact_address')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_country_page_likes')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_cover_id')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_cover_source')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_culinary_team')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_current_location')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_delivery_and_pickup_option_info')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_description')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_description_html')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_differently_open_offerings')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_directed_by')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_display_subtext')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_displayed_message_response_time')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_emails')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_fan_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_featured_video')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_features')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_followers_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_food_styles')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_founded')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_general_info')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_general_manager')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_genre')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_global_brand_page_name')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_global_brand_root_id')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_has_added_app')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_has_transitioned_to_new_page_experience')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_has_whatsapp_business_number')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_has_whatsapp_number')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_hometown')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_hours')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_impressum')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_influences')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_instagram_business_account')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_is_always_open')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_is_chain')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_is_community_page')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_is_eligible_for_branded_content')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_is_messenger_bot_get_started_enabled')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_is_messenger_platform_bot')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_is_owned')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_is_permanently_closed')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_is_published')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_is_unclaimed')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_is_webhooks_subscribed')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_leadgen_tos_accepted')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_leadgen_tos_accepting_user')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_link')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_members')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_merchant_review_status')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_messenger_ads_default_page_welcome_message')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_messenger_ads_default_quick_replies')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_messenger_ads_quick_replies_type')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_mission')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_mpg')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_name')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_name_with_location_descriptor')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_network')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_new_like_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_offer_eligible')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_overall_star_rating')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_page_token')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_parking')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_payment_options')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_personal_info')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_personal_interests')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_pharma_safety_info')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_phone')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_place_type')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_plot_outline')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_press_contact')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_price_range')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_privacy_info_url')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_produced_by')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_products')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_promotion_eligible')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_promotion_ineligible_reason')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_public_transit')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_rating_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_record_label')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_release_date')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_restaurant_services')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_restaurant_specialties')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_schedule')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_screenplay_by')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_season')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_single_line_address')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_starring')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_store_code')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_store_location_descriptor')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_store_number')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_studio')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_supports_donate_button_in_live_video')
    .setType(types.BOOLEAN);
  
  fields.newDimension()
    .setId('Facebook_Page_talking_about_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_temporary_status')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_unread_message_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_unread_notif_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_unseen_message_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_username')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_verification_status')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_website')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_were_here_count')
    .setType(types.NUMBER);
  
  fields.newDimension()
    .setId('Facebook_Page_whatsapp_number')
    .setType(types.TEXT);
  
  fields.newDimension()
    .setId('Facebook_Page_written_by')
    .setType(types.TEXT);
  
  return fields;
}
