function responseToRows(requestedFields, response) {

  var rows = new Array();

  var fields = requestedFields.asArray();
  
  // Filter for requested fields
  fields.forEach(function (field) {
    
    switch (field.getId()) {
      case 'Facebook_Page_id':
        rows.push(response.id);
        break;
      case 'Facebook_Page_about':
        rows.push(response.about);
        break;
      case 'Facebook_Page_access_token':
        rows.push(response.access_token);
        break;
      case 'Facebook_Page_ad_campaign':
        rows.push(response.ad_campaign);
        break;
      case 'Facebook_Page_affiliation':
        rows.push(response.affiliation);  
        break;
      case 'Facebook_Page_app_id':
        rows.push(response.app_id);  
        break;
      case 'Facebook_Page_artists_we_like':
        rows.push(response.artists_we_like);  
        break;
      case 'Facebook_Page_attire':
        rows.push(response.attire);  
        break;
      case 'Facebook_Page_awards':
        rows.push(response.awards);  
        break;
      case 'Facebook_Page_band_interests':
        rows.push(response.band_interests);  
        break;
      case 'Facebook_Page_bio':
        rows.push(response.bio);  
        break;
      case 'Facebook_Page_birthday':
        rows.push(response.birthday);  
        break;
      case 'Facebook_Page_booking_agent':
        rows.push(response.booking_agent);  
        break;
      case 'Facebook_Page_built':
        rows.push(response.built);  
        break;
      case 'Facebook_Page_can_checkin':
        rows.push(response.can_checkin);  
        break;
      case 'Facebook_Page_can_post':
        rows.push(response.can_post);  
        break;
      case 'Facebook_Page_category':
        rows.push(response.category);  
        break;
      case 'Facebook_Page_checkins':
        rows.push(response.checkins);  
        break;
      case 'Facebook_Page_company_overview':
        rows.push(response.company_overview);  
        break;
      case 'Facebook_Page_connected_instagram_account':
        rows.push(response.connected_instagram_account);  
        break;
      case 'Facebook_Page_contact_address':
        rows.push(response.contact_address);  
        break;
      case 'Facebook_Page_country_page_likes':
        rows.push(response.country_page_likes);  
        break;
      case 'Facebook_Page_cover_id':
        rows.push(response.cover.id);  
        break;
      case 'Facebook_Page_cover_source':
        rows.push(response.cover.source);  
        break;
      case 'Facebook_Page_culinary_team':
        rows.push(response.culinary_team);  
        break;
      case 'Facebook_Page_current_location':
        rows.push(response.current_location);  
        break;
      case 'Facebook_Page_delivery_and_pickup_option_info':
        rows.push(response.delivery_and_pickup_option_info);  
        break;
      case 'Facebook_Page_description':
        rows.push(response.description);  
        break;
      case 'Facebook_Page_description_html':
        rows.push(response.description_html);  
        break;
      case 'Facebook_Page_differently_open_offerings':
        rows.push(response.differently_open_offerings);  
        break;
      case 'Facebook_Page_directed_by':
        rows.push(response.directed_by);  
        break;
      case 'Facebook_Page_display_subtext':
        rows.push(response.display_subtext);  
        break;
      case 'Facebook_Page_displayed_message_response_time':
        rows.push(response.displayed_message_response_time);  
        break;
      case 'Facebook_Page_emails':
        rows.push(response.emails);  
        break;
      case 'Facebook_Page_fan_count':
        rows.push(response.fan_count);  
        break;
      case 'Facebook_Page_featured_video':
        rows.push(response.featured_video);  
        break;
      case 'Facebook_Page_features':
        rows.push(response.features);  
        break;
      case 'Facebook_Page_followers_count':
        rows.push(response.followers_count);  
        break;
      case 'Facebook_Page_food_styles':
        rows.push(response.food_styles);  
        break;
      case 'Facebook_Page_founded':
        rows.push(response.founded);  
        break;
      case 'Facebook_Page_general_info':
        rows.push(response.general_info);  
        break;
      case 'Facebook_Page_general_manager':
        rows.push(response.general_manager);  
        break;
      case 'Facebook_Page_genre':
        rows.push(response.genre);  
        break;
      case 'Facebook_Page_global_brand_page_name':
        rows.push(response.global_brand_page_name);  
        break;
      case 'Facebook_Page_global_brand_root_id':
        rows.push(response.global_brand_root_id);  
        break;
      case 'Facebook_Page_has_added_app':
        rows.push(response.has_added_app);  
        break;
      case 'Facebook_Page_has_transitioned_to_new_page_experience':
        rows.push(response.has_transitioned_to_new_page_experience);  
        break;
      case 'Facebook_Page_has_whatsapp_business_number':
        rows.push(response.has_whatsapp_business_number);  
        break;
      case 'Facebook_Page_has_whatsapp_number':
        rows.push(response.has_whatsapp_number);  
        break;
      case 'Facebook_Page_hometown':
        rows.push(response.hometown);  
        break;
      case 'Facebook_Page_hours':
        rows.push(response.hours);  
        break;
      case 'Facebook_Page_impressum':
        rows.push(response.impressum);  
        break;
      case 'Facebook_Page_influences':
        rows.push(response.influences);  
        break;
      case 'Facebook_Page_instagram_business_account':
        rows.push(response.instagram_business_account);  
        break;
      case 'Facebook_Page_is_always_open':
        rows.push(response.is_always_open);  
        break;
      case 'Facebook_Page_is_chain':
        rows.push(response.is_chain);  
        break;
      case 'Facebook_Page_is_community_page':
        rows.push(response.is_community_page);  
        break;
      case 'Facebook_Page_is_eligible_for_branded_content':
        rows.push(response.is_eligible_for_branded_content);  
        break;
      case 'Facebook_Page_is_messenger_bot_get_started_enabled':
        rows.push(response.is_messenger_bot_get_started_enabled);  
        break;
      case 'Facebook_Page_is_messenger_platform_bot':
        rows.push(response.is_messenger_platform_bot);  
        break;
      case 'Facebook_Page_is_owned':
        rows.push(response.is_owned);  
        break;
      case 'Facebook_Page_is_permanently_closed':
        rows.push(response.is_permanently_closed);  
        break;
      case 'Facebook_Page_is_published':
        rows.push(response.is_published);  
        break;
      case 'Facebook_Page_is_unclaimed':
        rows.push(response.is_unclaimed);  
        break;
      case 'Facebook_Page_is_webhooks_subscribed':
        rows.push(response.is_webhooks_subscribed);  
        break;
      case 'Facebook_Page_leadgen_tos_accepted':
        rows.push(response.leadgen_tos_accepted);  
        break;
      case 'Facebook_Page_leadgen_tos_accepting_user':
        rows.push(response.leadgen_tos_accepting_user);  
        break;
      case 'Facebook_Page_link':
        rows.push(response.link);  
        break;
      case 'Facebook_Page_members':
        rows.push(response.members);  
        break;
      case 'Facebook_Page_merchant_review_status':
        rows.push(response.merchant_review_status);  
        break;
      case 'Facebook_Page_messenger_ads_default_page_welcome_message':
        rows.push(response.messenger_ads_default_page_welcome_message);  
        break;
      case 'Facebook_Page_messenger_ads_default_quick_replies':
        rows.push(response.messenger_ads_default_quick_replies);  
        break;
      case 'Facebook_Page_messenger_ads_quick_replies_type':
        rows.push(response.messenger_ads_quick_replies_type);  
        break;
      case 'Facebook_Page_mission':
        rows.push(response.mission);  
        break;
      case 'Facebook_Page_mpg':
        rows.push(response.mpg);  
        break;
      case 'Facebook_Page_name':
        rows.push(response.name);  
        break;
      case 'Facebook_Page_name_with_location_descriptor':
        rows.push(response.name_with_location_descriptor);  
        break;
      case 'Facebook_Page_network':
        rows.push(response.network);  
        break;
      case 'Facebook_Page_new_like_count':
        rows.push(response.new_like_count);  
        break;
      case 'Facebook_Page_offer_eligible':
        rows.push(response.offer_eligible);  
        break;
      case 'Facebook_Page_overall_star_rating':
        rows.push(response.overall_star_rating);  
        break;
      case 'Facebook_Page_page_token':
        rows.push(response.page_token);  
        break;
      case 'Facebook_Page_parking':
        rows.push(response.parking);  
        break;
      case 'Facebook_Page_payment_options':
        rows.push(response.payment_options);  
        break;
      case 'Facebook_Page_personal_info':
        rows.push(response.personal_info);  
        break;
      case 'Facebook_Page_personal_interests':
        rows.push(response.personal_interests);  
        break;
      case 'Facebook_Page_pharma_safety_info':
        rows.push(response.pharma_safety_info);  
        break;
      case 'Facebook_Page_phone':
        rows.push(response.phone);  
        break;
      case 'Facebook_Page_place_type':
        rows.push(response.place_type);  
        break;
      case 'Facebook_Page_plot_outline':
        rows.push(response.plot_outline);  
        break;
      case 'Facebook_Page_press_contact':
        rows.push(response.press_contact);  
        break;
      case 'Facebook_Page_price_range':
        rows.push(response.price_range);  
        break;
      case 'Facebook_Page_privacy_info_url':
        rows.push(response.privacy_info_url);  
        break;
      case 'Facebook_Page_produced_by':
        rows.push(response.produced_by);  
        break;
      case 'Facebook_Page_products':
        rows.push(response.products);  
        break;
      case 'Facebook_Page_promotion_eligible':
        rows.push(response.promotion_eligible);  
        break;
      case 'Facebook_Page_promotion_ineligible_reason':
        rows.push(response.promotion_ineligible_reason);  
        break;
      case 'Facebook_Page_public_transit':
        rows.push(response.public_transit);  
        break;
      case 'Facebook_Page_rating_count':
        rows.push(response.rating_count);  
        break;
      case 'Facebook_Page_record_label':
        rows.push(response.record_label);  
        break;
      case 'Facebook_Page_release_date':
        rows.push(response.release_date);  
        break;
      case 'Facebook_Page_restaurant_services':
        rows.push(response.restaurant_services);  
        break;
      case 'Facebook_Page_restaurant_specialties':
        rows.push(response.restaurant_specialties);  
        break;
      case 'Facebook_Page_schedule':
        rows.push(response.schedule);  
        break;
      case 'Facebook_Page_screenplay_by':
        rows.push(response.screenplay_by);  
        break;
      case 'Facebook_Page_season':
        rows.push(response.season);  
        break;
      case 'Facebook_Page_single_line_address':
        rows.push(response.single_line_address);  
        break;
      case 'Facebook_Page_starring':
        rows.push(response.starring);  
        break;
      case 'Facebook_Page_store_code':
        rows.push(response.store_code);  
        break;
      case 'Facebook_Page_store_location_descriptor':
        rows.push(response.store_location_descriptor);  
        break;
      case 'Facebook_Page_store_number':
        rows.push(response.store_number);  
        break;
      case 'Facebook_Page_studio':
        rows.push(response.studio);  
        break;
      case 'Facebook_Page_supports_donate_button_in_live_video':
        rows.push(response.supports_donate_button_in_live_video);  
        break;
      case 'Facebook_Page_talking_about_count':
        rows.push(response.talking_about_count);  
        break;
      case 'Facebook_Page_temporary_status':
        rows.push(response.temporary_status);  
        break;
      case 'Facebook_Page_unread_message_count':
        rows.push(response.unread_message_count);  
        break;
      case 'Facebook_Page_unread_notif_count':
        rows.push(response.unread_notif_count);  
        break;
      case 'Facebook_Page_unseen_message_count':
        rows.push(response.unseen_message_count);  
        break;
      case 'Facebook_Page_username':
        rows.push(response.username);  
        break;
      case 'Facebook_Page_verification_status':
        rows.push(response.verification_status);  
        break;
      case 'Facebook_Page_website':
        rows.push(response.website);  
        break;
      case 'Facebook_Page_were_here_count':
        rows.push(response.were_here_count);  
        break;
      case 'Facebook_Page_whatsapp_number':
        rows.push(response.whatsapp_number);  
        break;
      case 'Facebook_Page_written_by':
        rows.push(response.written_by);  
        break;
      default:
        break;
    }
  });

  return rows.map(function(row) {
    return { values: [row] };
  });
  
}
