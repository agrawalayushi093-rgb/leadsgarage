# Figma correction report

Reference: supplied 1920 × 17534 screenshot and linked Figma prototype.

## Files changed in this correction pass
- src/index.css: section-specific dimensions, centered capped containers, typography, spacing, artwork placement, cards, responsive rules, footer overlap.
- src/components/Hero.jsx: slide hook for matching the initial blue background.
- src/components/WhyChooseUs.jsx: render existing card titles/descriptions over the supplied text-free artwork.
- src/components/LeadershipTeam.jsx: retain visible roles, use existing social-image assets, support keyboard focus and mobile social details.

## Sections checked
Navbar, hero, six services, five results cards, quality control, publisher/advertiser, network, team, closing artwork and footer.

## Responsive rules
Desktop uses proportions derived from the 1920px frame, capped above that width. Navigation switches at 1100px; compact desktop navigation applies through 1440px. Main stacked layouts apply below 1024px, partnership/footer adjustments below 768px, results/team adjustments below 640px, and narrow service/hero adjustments below 481px. Footer uses three columns below 1280px and two below 768px. Tablet results copy has a readable font floor.

## Validation
Production build passed. Browser console had no errors or warnings. Checked 1920, 1440, 1366, 1024, 768, 390, 375 and 2560px: no document horizontal overflow, no text beyond viewport edges, no failed image loads. Desktop reference and rendered section screenshots reviewed; mobile and tablet layouts visually reviewed. Rendered desktop page height is approximately 17633px versus reference 17534px; content and working interactions were retained.

## Remaining limits
Exact Figma typography/style metadata and mobile frames were not supplied, so sizing is derived from screenshot proportions and responsive layouts are adapted from desktop. Existing wording was retained even where it differs from the reference. Existing network vector icons remain approximations where matching original artwork is unavailable. This is a close visual match, not a claim of pixel identity.
