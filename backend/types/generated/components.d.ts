import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    Button_Link: Schema.Attribute.String;
    Button_Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Section_Title: Schema.Attribute.String;
  };
}

export interface SharedBlogsSectionAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_blogs_section_about_uses';
  info: {
    displayName: 'Blogs Section ~ About Us';
  };
  attributes: {
    Section_Title: Schema.Attribute.String;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    Client: Schema.Attribute.String;
    Client_Designation: Schema.Attribute.String;
    Client_Profile: Schema.Attribute.Media<'images' | 'files'>;
    Company_Logo: Schema.Attribute.Media<'images' | 'files'>;
    Feedback: Schema.Attribute.Text;
  };
}

export interface SharedChooseRorhoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_choose_rorho_sections';
  info: {
    displayName: 'Choose Rorho Section';
  };
  attributes: {
    Boxes: Schema.Attribute.Component<'shared.venture-boxes', true>;
    Button_Title: Schema.Attribute.String;
    Button_Url: Schema.Attribute.String;
    Section_Title: Schema.Attribute.String;
    Short_Description: Schema.Attribute.Text;
  };
}

export interface SharedCompaniesCompanyPage extends Struct.ComponentSchema {
  collectionName: 'components_shared_companies_company_pages';
  info: {
    displayName: 'Companies ~ Company Page';
    icon: 'paperPlane';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Short_Description: Schema.Attribute.Text;
    Website_Link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'Contact Form';
  };
  attributes: {
    Left_Float_Image: Schema.Attribute.Media<'images' | 'files'>;
    Right_Float_Image: Schema.Attribute.Media<'images' | 'files'>;
    Section_Title: Schema.Attribute.String;
    Short_Description: Schema.Attribute.Text;
  };
}

export interface SharedFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_sections';
  info: {
    displayName: 'Footer Section';
  };
  attributes: {
    Copyright_Text: Schema.Attribute.String;
    Footer_Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedFounderSectionAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_shared_founder_section_about_uses';
  info: {
    displayName: 'Founder Section ~ About Us';
  };
  attributes: {
    About_Founder: Schema.Attribute.String;
    Profile: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Short_Description: Schema.Attribute.Text;
  };
}

export interface SharedHeaderSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_sections';
  info: {
    displayName: 'Header Section';
  };
  attributes: {
    Button_Title: Schema.Attribute.String;
    Button_Url: Schema.Attribute.String;
    Header_Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedHelpBoxes extends Struct.ComponentSchema {
  collectionName: 'components_shared_help_boxes';
  info: {
    displayName: 'Help Boxes';
  };
  attributes: {
    Box_Title: Schema.Attribute.String;
    Short_Description: Schema.Attribute.String;
  };
}

export interface SharedHelpSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_help_sections';
  info: {
    displayName: 'Help Section';
  };
  attributes: {
    Button_Link: Schema.Attribute.String;
    Button_Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Help_Boxes: Schema.Attribute.Component<'shared.help-boxes', true>;
    Section_Title: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    Hero_Section_Text: Schema.Attribute.String;
    Right_Float_Image: Schema.Attribute.Media<'images' | 'files'>;
    Side_Left_Arrow_Image: Schema.Attribute.Media<'images' | 'files'>;
    Slider: Schema.Attribute.Component<'shared.home-slider', true>;
  };
}

export interface SharedHeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sliders';
  info: {
    displayName: 'Hero Slider';
  };
  attributes: {
    Slide_Text: Schema.Attribute.String;
  };
}

export interface SharedHomeSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_sliders';
  info: {
    displayName: 'Home Slider';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface SharedInnerPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_inner_page_hero_sections';
  info: {
    displayName: 'Inner Page Hero Section';
    icon: 'calendar';
  };
  attributes: {
    Hero_Section_Text: Schema.Attribute.String;
    Left_Float_Image: Schema.Attribute.Media<'images' | 'files'>;
    Right_Float_Image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedInvestmentBoxes extends Struct.ComponentSchema {
  collectionName: 'components_shared_investment_boxes';
  info: {
    displayName: 'Investment Boxes';
  };
  attributes: {
    Box_Image: Schema.Attribute.Media<'images' | 'files'>;
    Box_Title: Schema.Attribute.String & Schema.Attribute.Required;
    Negative_List: Schema.Attribute.Component<'shared.negative-list', true>;
    Positive_List: Schema.Attribute.Component<'shared.positive-list', true>;
  };
}

export interface SharedInvestmentsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_investments_sections';
  info: {
    displayName: 'Investments Section';
  };
  attributes: {
    Boxes: Schema.Attribute.Component<'shared.investment-boxes', true>;
    Button_Title: Schema.Attribute.String;
    Button_Url: Schema.Attribute.String;
    Section_Title: Schema.Attribute.String;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    List_Item: Schema.Attribute.String;
  };
}

export interface SharedListingSectionCompaniesPage
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_listing_section_companies_pages';
  info: {
    displayName: 'Listing Section ~ Companies Page';
  };
  attributes: {
    Section_Title: Schema.Attribute.String;
    Short_Description: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMembers extends Struct.ComponentSchema {
  collectionName: 'components_shared_members';
  info: {
    displayName: 'Members';
    icon: 'user';
  };
  attributes: {
    Member_Info: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
    Profile: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedNegativeList extends Struct.ComponentSchema {
  collectionName: 'components_shared_negative_lists';
  info: {
    displayName: 'Negative List';
  };
  attributes: {
    List_Item: Schema.Attribute.String;
  };
}

export interface SharedOurProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_process_sections';
  info: {
    displayName: 'Our Process Section';
  };
  attributes: {
    Process_Boxes: Schema.Attribute.Component<'shared.process-boxes', true>;
    Process_Lists: Schema.Attribute.Component<'shared.list', true>;
    Section_Title: Schema.Attribute.String;
  };
}

export interface SharedPositiveList extends Struct.ComponentSchema {
  collectionName: 'components_shared_positive_lists';
  info: {
    displayName: 'Positive List';
  };
  attributes: {
    List_Item: Schema.Attribute.String;
  };
}

export interface SharedProcessBoxes extends Struct.ComponentSchema {
  collectionName: 'components_shared_process_boxes';
  info: {
    displayName: 'Process Boxes';
  };
  attributes: {
    Box_Text: Schema.Attribute.String;
    Box_Time: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    Meta_Author: Schema.Attribute.String;
    Meta_Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Meta_Keywords: Schema.Attribute.Text;
    Meta_Title: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface SharedSliderTexts extends Struct.ComponentSchema {
  collectionName: 'components_shared_slider_texts';
  info: {
    displayName: 'Slider Texts';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface SharedTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
  };
  attributes: {
    Client_Reviews: Schema.Attribute.Component<'shared.cards', true>;
    Section_Title: Schema.Attribute.String;
  };
}

export interface SharedVentureBoxes extends Struct.ComponentSchema {
  collectionName: 'components_shared_venture_boxes';
  info: {
    displayName: 'Venture Boxes';
  };
  attributes: {
    Box_Image: Schema.Attribute.Media<'images' | 'files'>;
    Box_Text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-section': SharedAboutSection;
      'shared.blogs-section-about-us': SharedBlogsSectionAboutUs;
      'shared.cards': SharedCards;
      'shared.choose-rorho-section': SharedChooseRorhoSection;
      'shared.companies-company-page': SharedCompaniesCompanyPage;
      'shared.contact-form': SharedContactForm;
      'shared.footer-section': SharedFooterSection;
      'shared.founder-section-about-us': SharedFounderSectionAboutUs;
      'shared.header-section': SharedHeaderSection;
      'shared.help-boxes': SharedHelpBoxes;
      'shared.help-section': SharedHelpSection;
      'shared.hero-section': SharedHeroSection;
      'shared.hero-slider': SharedHeroSlider;
      'shared.home-slider': SharedHomeSlider;
      'shared.inner-page-hero-section': SharedInnerPageHeroSection;
      'shared.investment-boxes': SharedInvestmentBoxes;
      'shared.investments-section': SharedInvestmentsSection;
      'shared.list': SharedList;
      'shared.listing-section-companies-page': SharedListingSectionCompaniesPage;
      'shared.media': SharedMedia;
      'shared.members': SharedMembers;
      'shared.negative-list': SharedNegativeList;
      'shared.our-process-section': SharedOurProcessSection;
      'shared.positive-list': SharedPositiveList;
      'shared.process-boxes': SharedProcessBoxes;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.slider-texts': SharedSliderTexts;
      'shared.testimonial-section': SharedTestimonialSection;
      'shared.venture-boxes': SharedVentureBoxes;
    }
  }
}
