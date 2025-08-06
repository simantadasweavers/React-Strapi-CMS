import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    Button_Link: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
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
    Slider: Schema.Attribute.Component<'shared.slider-texts', true>;
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
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
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
    files: Schema.Attribute.Media<'images', true>;
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
      'shared.cards': SharedCards;
      'shared.choose-rorho-section': SharedChooseRorhoSection;
      'shared.help-boxes': SharedHelpBoxes;
      'shared.help-section': SharedHelpSection;
      'shared.hero-section': SharedHeroSection;
      'shared.investment-boxes': SharedInvestmentBoxes;
      'shared.investments-section': SharedInvestmentsSection;
      'shared.list': SharedList;
      'shared.media': SharedMedia;
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
