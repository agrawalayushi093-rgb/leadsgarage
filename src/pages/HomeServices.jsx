import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';

export default function HomeServices() {
  return (
    <IndustryPageTemplate
      page="homeServices"
      documentTitle="Home Services | Leads Garage"
      eyebrow="Home Services"
      titlePrefix="Connect With Homeowners Looking for the"
      titleHighlight="Right Home Service"
      subtitle="Leadsgarage helps businesses generate quality leads, reach relevant audiences, and create valuable customer opportunities."
      primaryButtonText="Let’s Connect"
      secondaryButtonText="Talk to Our Team"
      heroPhoto="/image/Home Services/Industry photography.png"
      heroCardTitle="Real Homeowners. Real Intent. Real Opportunities."
      heroCardSubtitle="We connect potential customers with the right service providers when they are ready."
      heroFloatingIcon="/image/Home Services/Frame 1000004798.png"
      reachEyebrow="Relevant audiences. Real opportunities."
      reachTitle="Reach More Homeowners. Create More Opportunities."
      reachParagraphs={[
        'Home-service customers often need a solution at the right time and in the right location.',
        'Whether they are looking for a repair, maintenance, installation, renovation, or another home-service solution, reaching the right customer can make all the difference.',
        'At Leadsgarage, we help home-service businesses connect with relevant audiences through quality traffic, lead generation, targeted campaigns, and customer acquisition solutions built around their goals.',
      ]}
      reachPhoto="/image/Home Services/Customer photography.png"
      reachBadge="Local need. Relevant connection."
      metrics={[
        ['+68%', 'Qualified Home Service Leads Generated'],
        ['-33%', 'Lower Cost Per Valid Lead'],
        ['+45%', 'Inbound Call Volume & Conversion'],
        ['+62%', 'Homeowner Reach Across Key Verticals'],
      ]}
      cloudTitle="Home Services Solutions"
      cloudPills={['10K+ Leads Generated', '10+ Growth Partner', '5+ Acquisition Channels', '100% Campaign Monitoring']}
      cloudFolder="Home Services"
      channels={[
        ['Lead Generation', 'Generate relevant opportunities from homeowners searching for home services they need.'],
        ['Inbound Calls', 'Reach customers based on location, audience requirements, and campaign goals.'],
        ['Email & SMS', 'Stay connected with potential customers through targeted messaging and create additional engagement opportunities.'],
      ]}
      qualityTitle="Quality You Can Count On"
      qualityCards={[
        ['Capability symbol.png', 'Quality Leads', 'Connect with homeowners actively looking for the right home-service solutions.'],
        ['Capability symbol (1).png', 'Quality Score', 'Evaluate traffic and leads based on campaign requirements and relevance.'],
        ['Capability symbol (2).png', 'Customer Support', "We're here to help create a smoother path between customer interest and the right service provider."],
        ['Capability symbol (3).png', 'Monitoring', 'Continuously monitor campaign activity and performance to identify opportunities for improvement.'],
      ]}
      whyTitle="Why Leading Home Service Brands Choose Leadsgarage"
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
      ctaTitle={<>Create better<br />opportunities. Grow<br />with confidence.</>}
      ctaBadges={[
        { text: 'Your audience' },
        { text: 'Your goals' },
        { text: 'Your growth strategy' },
      ]}
      ctaArt="/image/Home Services/image 114.png"
      industryCards={null}
    />
  );
}
