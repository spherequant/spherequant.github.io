The goal is to make your public-facing spherequant.github.io site feel like a seamless extension of your high-quality product—reflecting the same professional, data-dense, and modern aesthetic seen in your CompanyHistoryPage component.
Here is the step-by-step plan to achieve that.
Strategy: Centralize Your Design System
The most critical step is to stop using inline <style> blocks on individual pages and create a central, site-wide stylesheet. This ensures consistency, simplifies maintenance, and is the standard practice for professional web development. In a Jekyll site, this is typically handled in the _sass or assets/css directory.
Step 1: Create a Central Brand Stylesheet
First, we'll create a new file to define all the core elements of your brand's visual identity: colors, typography, and spacing. This acts as the single source of truth for your design.
I'll create the content for this file. You should create a new file at _sass/_brand.scss (or a similar path in your theme's structure) and add the following code.
SCSS
// _sass/_brand.scss

// -----------------------------------------------------------------------------
// SphereQuant Brand Identity
// -----------------------------------------------------------------------------

// 1. Color Palette
// Inspired by your application's dark, functional theme.
$brand-background: #111827; // Dark Blue-Gray
$brand-card-bg: #1F2937;    // Lighter component background
$brand-border: #374151;     // Muted border color

$brand-text-primary: #E5E7EB;   // Main text (bright off-white)
$brand-text-secondary: #9CA3AF; // Muted/secondary text
$brand-text-headings: #FFFFFF;  // Pure white for headings

$brand-accent: #0089E8;      // The primary blue from your app
$brand-accent-positive: #22c55e; // Green for positive values
$brand-accent-negative: #ef4444; // Red for negative values

// 2. Typography
// Using a modern, readable sans-serif font stack.
// You can add a Google Font import in your main layout file, e.g., for "Inter".
$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
$font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;

// 3. Spacing & Sizing
$spacing-unit: 0.25rem; // e.g., 4px
$border-radius: 0.5rem; // 8px
Show full code block
Step 2: Integrate and Overhaul the Main Stylesheet
Next, you'll need to edit your main stylesheet (likely style.scss or main.scss) to import and use these new brand variables. This involves:
1.
Importing the _brand.scss file at the top.
2.
Replacing existing theme colors and fonts with your new $brand-* variables.
This will instantly apply the dark theme and new color scheme across your entire site—headers, footers, links, and body text will all update.
Step 3: Redesign Core Layouts (Header, Footer)
Your site's layouts (in the _layouts folder) and includes (in _includes) define the header, navigation, and footer. These need to be updated to match the new minimalist and professional aesthetic.
•
Header/Navigation: Simplify it. A clean header with your logo (or just "SphereQuant") and simple navigation links (Home, Research, FAQ, Login) works best.
•
Footer: A minimal footer with copyright info and links to key pages or social profiles.
Step 4: Overhaul the Homepage
Your homepage is your digital storefront. It should immediately communicate your value proposition. I would recommend transforming it from a simple page into a compelling landing page with the following sections:
1.
Hero Section: A strong, clear headline like "Institutional-Grade Infrastructure for Quantitative Researchers." with a brief sub-headline.
2.
"Show, Don't Tell" Section: Feature a high-quality screenshot or a short video of your CompanyHistoryPage in action. This is far more powerful than words.
3.
"Who We Are For": A section that speaks directly to your target audience (e.g., "Built for independent practitioners and emerging funds who prioritize process over hype."). This borrows from the direct tone of your FAQ.
4.
Core Offerings: Clearly delineate your two main services: the educational/consulting program and the bespoke consulting services.
5.
Call to Action (CTA): A clear, prominent button like "Request a Consultation" or "Learn About the Program".
Step 5: Refactor Content Pages
Finally, with the global styles in place, you can go back to pages like faq.md and remove the entire <style> block. The page will automatically inherit the new, consistent styling from your central stylesheet, making your content files clean and focused purely on the content itself.
By following these steps, you'll systematically transform your entire public site to be a powerful and on-brand reflection of the quality and seriousness of your work.