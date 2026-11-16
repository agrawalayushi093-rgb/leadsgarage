import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';

export default function InsuranceSolutions() {
  return (
    <IndustryPageTemplate
      page="insurance"
      documentTitle="Insurance Solutions | Leads Garage"
      eyebrow="Insurance Solutions"
      titlePrefix={<>Connect With Customers<br />Looking for the Right</>}
      titleHighlight="Insurance Coverage"
      subtitle="Insurance customers compare options, plans, and providers before making a decision. We help you reach people who are actively searching for insurance solutions through quality traffic, lead generation, and high-intent inbound calls."
      primaryButtonText="Let’s Connect"
      secondaryButtonText="Talk to Our Team"
      heroPhoto="/image/Insurance/Industry photography.png"
      heroCardTitle="High-Intent Customers, Stronger Opportunities"
      heroCardSubtitle="We connect potential customers with the right insurance solution experts when they are ready."
      heroFloatingIcon={null}
      reachEyebrow="Relevant audiences. Real opportunities."
      reachTitle="Reach More Relevant Insurance Customers"
      reachParagraphs={[
        "Finding insurance customers is about more than driving traffic. It's about reaching the right audience with the right message at the right time.",
        'Our approach combines targeted customer acquisition with performance-focused marketing to create meaningful opportunities for insurance businesses.',
        'Whether you are looking to generate leads, drive inbound calls, or expand your reach through Email and SMS, we build solutions around your campaign goals and customer acquisition requirements.',
      ]}
      reachPhoto="/image/Insurance/Customer photography.png"
      reachBadge="The right coverage starts with a connection."
      metrics={[
        ['15K+', 'Insurance Leads Generated Daily'],
        ['95%+', 'Leads Match Our Quality Standards'],
        ['250+', 'Insurance Brands We Work With'],
        ['99.2%', 'Average Campaign Quality Score'],
      ]}
      cloudTitle="Performance Marketing Solutions"
      cloudSubtitle="Flexible solutions tailored to your goals and KPIs."
      cloudPills={['Quality-First Approach', 'Transparent & Reliable', 'Scalable Solutions', '250+ Insurance Brands']}
      cloudFolder="Insurance"
      channels={[
        ['Lead Generation', 'Generate relevant customer opportunities from people actively searching for insurance solutions.'],
        ['Inbound Calls', "Connect high-intent customers directly with the right insurance solution experts when they're ready to talk."],
        ['Email & SMS', 'Stay connected with potential customers through targeted Email and SMS campaigns throughout the customer journey.'],
      ]}
      qualityTitle="Service Highlights"
      qualityCards={[
        ['Capability symbol.png', 'Quality Leads', 'Relevant, high-intent leads generated for insurance brands we work with.'],
        ['Capability symbol (1).png', 'Quality Score', 'Traffic and leads evaluated for relevance to meet campaign goals.'],
        ['Capability symbol (2).png', 'Call Support', 'Connect customers with the right experts when they are ready to talk.'],
        ['Capability symbol (3).png', 'Monitoring', 'Ongoing monitoring and optimization for better performance and results.'],
      ]}
      ctaTitle={<>Grow Your Insurance<br />Customer Acquisition</>}
      ctaBadges={[
        { text: 'Insurance' },
        { text: 'Financial' },
        { text: 'Track result in real-time' },
      ]}
      ctaArt="/image/Insurance/image 114.png"
    />
  );
}
