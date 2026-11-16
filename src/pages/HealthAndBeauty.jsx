import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';

export default function HealthAndBeauty() {
  return (
    <IndustryPageTemplate
      page="healthAndBeauty"
      documentTitle="Health & Beauty | Leads Garage"
      eyebrow="Health & Beauty"
      titlePrefix="Connect With Customers Ready to Live Better"
      titleHighlight="Real Results."
      subtitle="Reach consumers who are actively searching for health, beauty, wellness, and personal-care solutions through targeted acquisition and performance-focused marketing."
      primaryButtonText="Let’s Connect"
      secondaryButtonText="Talk to Our Team"
      heroPhoto="/image/Health & Beauty/Rectangle.png"
      heroCardTitle="Better Audiences. Better Engagement. Better Results."
      heroCardSubtitle="We connect potential customers with the right health and beauty brands when they are ready."
      heroFloatingIcon="/image/Health & Beauty/Frame 1000004798.png"
      reachEyebrow="Relevant audiences. Real opportunities."
      reachTitle="Reach More Relevant Health & Beauty Customers"
      reachParagraphs={[
        'Health and beauty consumers seek trustworthy solutions that match their personal lifestyle and wellness goals.',
        'Whether they are looking for premium skincare, wellness supplements, personal care, or aesthetic treatments, reaching engaged buyers drives sustainable brand loyalty.',
        'At Leadsgarage, we deliver high-intent audiences through compliant multi-channel acquisition, targeted marketing campaigns, and verified lead delivery tailored to your brand.',
      ]}
      reachCards={[
        { title: 'Beauty & Skincare', description: 'Connect with customers searching for skincare, personal-care, and beauty solutions.', image: '/image/Health & Beauty/Rectangle (3).png' },
        { title: 'Wellness & Healthy Living', description: 'Reach customers interested in natural wellness, nutrition, weight management, and healthy living.', image: '/image/Health & Beauty/Rectangle (5).png' },
      ]}
      cloudTitle="Performance That Starts With Quality"
      cloudPills={['Quality Lead Generation', 'Targeted Traffic', 'Campaign Monitoring', 'Data & Insights']}
      cloudFolder="Health & Beauty"
      channels={[
        ['Lead Generation', 'Create customer opportunities from people actively searching for health, beauty, wellness, and personal-care products or services.'],
        ['Email & SMS', 'Engage potential customers with targeted messaging and additional opportunities throughout the customer journey.'],
        ['Targeted Acquisition', 'Reach relevant audiences based on your campaign goals, audience requirements, and desired customer profile.'],
      ]}
      whyTitle="Why Leading Health & Beauty Brands Choose Leadsgarage"
      whyParagraphs={[
        'We understand the unique needs of the health and beauty space. Our quality-focused lead generation, campaign monitoring, and multi-channel marketing help brands create stronger customer opportunities and long-term growth.',
        'From natural wellness to skincare and beauty, we deliver compliant, high-quality traffic that drives real engagement and better results.',
      ]}
      benefits={[
        ['Benefit symbol.png', 'Quality-First Approach', 'We focus on relevant audiences and meaningful opportunities.'],
        ['Benefit symbol (1).png', 'Transparent & Reliable', 'Clear communication and ongoing visibility throughout your campaigns.'],
        ['Benefit symbol (2).png', 'Scalable Solutions', 'Flexible solutions that grow as your business grows.'],
      ]}
      ctaTitle={<>Ready to Grow Your<br />Health & Beauty Business?</>}
      ctaBadges={[
        { text: 'Health & Beauty' },
        { text: 'Wellness' },
        { text: 'Track result in real-time' },
      ]}
      ctaArt="/image/Health & Beauty/image 114.png"
    />
  );
}
