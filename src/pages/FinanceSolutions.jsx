import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';

export default function FinanceSolutions() {
  return (
    <IndustryPageTemplate
      page="finance"
      documentTitle="Finance Solutions | Leads Garage"
      eyebrow="Finance Solutions"
      titlePrefix="Connect With Customers Looking for the"
      titleHighlight="Right Financial Solutions"
      subtitle="Reach consumers actively searching for financial products and services through targeted customer acquisition, quality lead generation, and performance-focused campaigns."
      primaryButtonText="Let’s Connect"
      secondaryButtonText="Talk to Our Team"
      heroPhoto="/image/Finance/industry-photography.png"
      heroCardTitle="Quality Customers. Trusted Results. Real Growth."
      heroCardSubtitle="We connect potential customers with the right financial solutions when they are ready."
      heroFloatingIcon="/image/Finance/Frame 1000004800.png"
      reachEyebrow="Relevant audiences. Real opportunities."
      reachTitle="Reach More Relevant Finance Customers"
      reachParagraphs={[
        'Financial customers are often researching their options before making an important decision.',
        'Reaching them at the right moment can make a significant difference.',
        'At Leadsgarage, we help finance businesses connect with relevant audiences through targeted acquisition and quality-focused lead generation. Our approach is built around your campaign requirements, audience, location, and performance goals.',
      ]}
      reachCards={[
        { title: 'Relevant Audience', image: '/image/Finance/Audience portrait.png' },
        { title: 'Smarter Connections', image: '/image/Finance/Audience portrait (1).png' },
      ]}
      cloudTitle="Quality Data. Better Opportunities."
      cloudPills={['Quality-Focused Leads', 'Quality Monitoring', 'Data & Attribution', 'Dedicated Support']}
      cloudFolder="Finance"
      channels={[
        ['Lead Generation', 'Reach consumers actively researching loans, financial assistance, credit, debt solutions, and other financial products.'],
        ['Email & SMS', 'Engage potential customers through targeted messaging and create additional opportunities throughout the customer journey.'],
      ]}
      qualityTitle="Quality You Can Count On"
      qualityCards={[
        ['Capability symbol.png', 'Quality Leads', 'Connect with homeowners actively looking for the right home-service solutions.'],
        ['Capability symbol (1).png', 'Quality Score', 'Evaluate traffic and leads based on campaign requirements and relevance.'],
        ['Capability symbol (2).png', 'Customer Support', "We're here to help create a smoother path between customer interest and the right service provider."],
        ['Capability symbol (3).png', 'Monitoring', 'Continuously monitor campaign activity and performance to identify opportunities for improvement.'],
      ]}
      whyTitle="Why Leading Finance Brands Choose Leadsgarage"
      whyParagraphs={[
        'Home-service marketing is highly competitive, and reaching customers at the right moment matters.',
        'Leadsgarage combines targeted acquisition, quality-focused lead generation, and performance-driven marketing to help businesses build a more reliable path to customer growth.',
        'We focus on understanding your campaign requirements and connecting you with audiences that are more relevant to the services you provide. Our goal is to create valuable opportunities—not simply increase traffic volume.',
      ]}
      benefits={[
        ['Benefit symbol.png', 'Quality-First Approach', 'We focus on relevant audiences and meaningful opportunities.'],
        ['Benefit symbol (1).png', 'Transparent & Reliable', 'Clear communication and ongoing visibility throughout the campaign.'],
        ['Benefit symbol (2).png', 'Scalable Solutions', 'Flexible solutions that can grow as your business grows.'],
      ]}
      ctaTitle={<>Ready to Grow Your<br />Finance Business?</>}
      ctaBadges={[
        { text: 'Financial' },
        { text: 'Banking' },
        { text: 'Track result in real-time' },
      ]}
      ctaArt="/image/Finance/image 114.png"
    />
  );
}
