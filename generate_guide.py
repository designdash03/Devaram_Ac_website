import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib import colors
from reportlab.lib.units import cm, inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle, Image
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# Register fonts
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
pdfmetrics.registerFont(TTFont('Calibri', '/usr/share/fonts/truetype/english/calibri-regular.ttf'))
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')
registerFontFamily('Calibri', normal='Calibri', bold='Calibri')

# Output
pdf_filename = "/home/z/my-project/download/AC_Mechanic_Website_Pricing_Hosting_SEO_Guide.pdf"
os.makedirs("/home/z/my-project/download", exist_ok=True)

doc = SimpleDocTemplate(
    pdf_filename,
    pagesize=A4,
    title="AC Mechanic Website - Pricing, Hosting & SEO Guide",
    author="Z.ai",
    creator="Z.ai",
    subject="Complete guide for pricing, hosting, and SEO for an AC mechanic business website",
    leftMargin=2*cm,
    rightMargin=2*cm,
    topMargin=2.5*cm,
    bottomMargin=2.5*cm,
)

# Colors
DARK_BLUE = colors.HexColor('#1F4E79')
LIGHT_BLUE = colors.HexColor('#D6E4F0')
ACCENT_BLUE = colors.HexColor('#2980B9')
LIGHT_GRAY = colors.HexColor('#F5F5F5')
DARK_TEXT = colors.HexColor('#1A1A2E')

# Styles
cover_title = ParagraphStyle(
    name='CoverTitle', fontName='Times New Roman', fontSize=36, leading=44,
    alignment=TA_CENTER, spaceAfter=20, textColor=DARK_BLUE
)
cover_subtitle = ParagraphStyle(
    name='CoverSubtitle', fontName='Times New Roman', fontSize=18, leading=26,
    alignment=TA_CENTER, spaceAfter=12, textColor=colors.HexColor('#34495E')
)
cover_author = ParagraphStyle(
    name='CoverAuthor', fontName='Times New Roman', fontSize=14, leading=22,
    alignment=TA_CENTER, spaceAfter=8, textColor=colors.HexColor('#555555')
)
h1_style = ParagraphStyle(
    name='H1', fontName='Times New Roman', fontSize=22, leading=28,
    alignment=TA_LEFT, spaceBefore=18, spaceAfter=12, textColor=DARK_BLUE
)
h2_style = ParagraphStyle(
    name='H2', fontName='Times New Roman', fontSize=16, leading=22,
    alignment=TA_LEFT, spaceBefore=14, spaceAfter=8, textColor=DARK_BLUE
)
h3_style = ParagraphStyle(
    name='H3', fontName='Times New Roman', fontSize=13, leading=18,
    alignment=TA_LEFT, spaceBefore=10, spaceAfter=6, textColor=colors.HexColor('#2C3E50')
)
body_style = ParagraphStyle(
    name='Body', fontName='Times New Roman', fontSize=11, leading=17,
    alignment=TA_JUSTIFY, spaceBefore=0, spaceAfter=6
)
bullet_style = ParagraphStyle(
    name='Bullet', fontName='Times New Roman', fontSize=11, leading=17,
    alignment=TA_LEFT, spaceBefore=2, spaceAfter=2, leftIndent=20, bulletIndent=8
)
header_cell = ParagraphStyle(
    name='HeaderCell', fontName='Times New Roman', fontSize=10.5,
    textColor=colors.white, alignment=TA_CENTER, leading=14
)
cell_style = ParagraphStyle(
    name='Cell', fontName='Times New Roman', fontSize=10,
    textColor=colors.black, alignment=TA_CENTER, leading=14
)
cell_left = ParagraphStyle(
    name='CellLeft', fontName='Times New Roman', fontSize=10,
    textColor=colors.black, alignment=TA_LEFT, leading=14
)
caption_style = ParagraphStyle(
    name='Caption', fontName='Times New Roman', fontSize=9,
    alignment=TA_CENTER, textColor=colors.HexColor('#666666'), spaceBefore=4, spaceAfter=6
)
highlight_style = ParagraphStyle(
    name='Highlight', fontName='Times New Roman', fontSize=11, leading=17,
    alignment=TA_LEFT, spaceBefore=4, spaceAfter=4, leftIndent=15,
    borderColor=ACCENT_BLUE, borderWidth=2, borderPadding=8,
    backColor=colors.HexColor('#EBF5FB')
)

story = []

# ============ COVER PAGE ============
story.append(Spacer(1, 100))
story.append(Paragraph('<b>AC Mechanic Website</b>', cover_title))
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Pricing, Hosting & SEO</b>', cover_title))
story.append(Spacer(1, 24))
story.append(Paragraph('Complete Business Guide for Freelance Web Developers', cover_subtitle))
story.append(Spacer(1, 48))

# Decorative line
line_data = [['']]
line_table = Table(line_data, colWidths=[300])
line_table.setStyle(TableStyle([
    ('LINEBELOW', (0,0), (-1,-1), 2, ACCENT_BLUE),
]))
story.append(line_table)

story.append(Spacer(1, 36))
story.append(Paragraph('How to Price, Build, Host, and Optimize', cover_author))
story.append(Paragraph('a Website for Your AC Mechanic Client', cover_author))
story.append(Spacer(1, 60))
story.append(Paragraph('Prepared by Z.ai | March 2026', cover_author))
story.append(PageBreak())

# ============ SECTION 1: PRICING ============
story.append(Paragraph('<b>1. How Much Should You Charge?</b>', h1_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Pricing a website for a local business like an AC mechanic service requires careful consideration of '
    'several factors including your skill level, the complexity of the project, the client\'s budget, and '
    'the market rates in your area. A well-built website is an investment for the business owner, as it can '
    'generate significant leads and revenue over time. Below, we break down the pricing into clear tiers '
    'so you can confidently present options to your client and close the deal at a rate that reflects the '
    'value you deliver.',
    body_style
))

story.append(Paragraph('<b>1.1 Pricing Tiers Breakdown</b>', h2_style))
story.append(Spacer(1, 12))

# Pricing Table
pricing_data = [
    [
        Paragraph('<b>Feature</b>', header_cell),
        Paragraph('<b>Basic</b>', header_cell),
        Paragraph('<b>Standard</b>', header_cell),
        Paragraph('<b>Premium</b>', header_cell),
    ],
    [
        Paragraph('Price Range', cell_left),
        Paragraph('$200 - $500', cell_style),
        Paragraph('$500 - $1,500', cell_style),
        Paragraph('$1,500 - $3,500', cell_style),
    ],
    [
        Paragraph('Number of Pages', cell_left),
        Paragraph('3 - 4 pages', cell_style),
        Paragraph('5 - 7 pages', cell_style),
        Paragraph('8+ pages', cell_style),
    ],
    [
        Paragraph('Design Type', cell_left),
        Paragraph('Template-based', cell_style),
        Paragraph('Customized template', cell_style),
        Paragraph('Fully custom design', cell_style),
    ],
    [
        Paragraph('Mobile Responsive', cell_left),
        Paragraph('Yes', cell_style),
        Paragraph('Yes', cell_style),
        Paragraph('Yes', cell_style),
    ],
    [
        Paragraph('WhatsApp / Call Button', cell_left),
        Paragraph('Yes', cell_style),
        Paragraph('Yes', cell_style),
        Paragraph('Yes', cell_style),
    ],
    [
        Paragraph('Google Maps', cell_left),
        Paragraph('Basic embed', cell_style),
        Paragraph('Custom styled', cell_style),
        Paragraph('Custom + directions', cell_style),
    ],
    [
        Paragraph('SEO Setup', cell_left),
        Paragraph('Basic meta tags', cell_style),
        Paragraph('Full on-page SEO', cell_style),
        Paragraph('Full SEO + schema', cell_style),
    ],
    [
        Paragraph('Contact Form', cell_left),
        Paragraph('Basic form', cell_style),
        Paragraph('Styled + email', cell_style),
        Paragraph('Advanced + CRM', cell_style),
    ],
    [
        Paragraph('Delivery Time', cell_left),
        Paragraph('3 - 5 days', cell_style),
        Paragraph('7 - 14 days', cell_style),
        Paragraph('3 - 4 weeks', cell_style),
    ],
    [
        Paragraph('Revisions', cell_left),
        Paragraph('2 revisions', cell_style),
        Paragraph('5 revisions', cell_style),
        Paragraph('Unlimited', cell_style),
    ],
    [
        Paragraph('Hosting Setup', cell_left),
        Paragraph('Not included', cell_style),
        Paragraph('Included', cell_style),
        Paragraph('Included + 1yr free', cell_style),
    ],
]

pricing_table = Table(pricing_data, colWidths=[120, 100, 110, 120])
row_colors = [colors.white, LIGHT_GRAY]
table_style_list = [
    ('BACKGROUND', (0, 0), (-1, 0), DARK_BLUE),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CCCCCC')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]
for i in range(1, len(pricing_data)):
    table_style_list.append(('BACKGROUND', (0, i), (-1, i), row_colors[(i - 1) % 2]))
pricing_table.setStyle(TableStyle(table_style_list))
story.append(pricing_table)
story.append(Spacer(1, 6))
story.append(Paragraph('<b>Table 1.</b> Website Pricing Tiers for AC Mechanic Business', caption_style))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>1.2 Recommended Price for This Project</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'For a complete AC mechanic website with all the features your client needs (Home, About, Services, '
    'Contact pages with Call Now button, WhatsApp integration, Google Maps, customer reviews, and full '
    'SEO), the recommended price range is between <b>$500 and $1,500 (approximately 40,000 to 1,20,000 INR)</b>. '
    'This falls into the Standard tier and provides excellent value for both you and the client. The client '
    'gets a professional, conversion-optimized website that can generate thousands of dollars in service '
    'revenue over its lifetime.',
    body_style
))

story.append(Paragraph(
    'Here is a detailed breakdown of how you can justify the pricing to your client. A well-optimized AC '
    'mechanic website typically generates 20 to 50 new customer inquiries per month in a competitive city. '
    'Even if only 30% of those inquiries convert into paying customers, and each service call is worth an '
    'average of $50 to $200, the website can potentially generate $300 to $3,000 per month in new revenue. '
    'This means the website pays for itself within the first 1 to 3 months of operation, making it one of '
    'the most cost-effective marketing investments a local service business can make.',
    body_style
))

story.append(Paragraph('<b>1.3 Additional Revenue Opportunities</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Beyond the initial website build, there are several ways to create recurring revenue from this client '
    'relationship. These additional services can significantly increase your total project value over time '
    'and transform a one-time project into a long-term partnership that benefits both parties.',
    body_style
))

revenue_items = [
    '<b>Monthly Maintenance:</b> Charge $20-$100/month for hosting, backups, security updates, content changes, and performance monitoring. Most local businesses prefer this hands-off approach.',
    '<b>SEO Services:</b> Charge $100-$500/month for ongoing SEO including keyword optimization, blog content creation, Google Business Profile management, and monthly analytics reports.',
    '<b>Google Ads Management:</b> Charge $100-$300/month + ad spend for managing Google Ads campaigns targeting local customers searching for AC repair services.',
    '<b>Content Updates:</b> Charge $25-$75 per hour for adding new services, updating testimonials, or creating seasonal promotional banners.',
    '<b>Domain & Hosting Renewal:</b> Markup domain registration ($15-$20/year) and hosting ($50-$120/year) costs for convenience.',
]
for item in revenue_items:
    story.append(Paragraph(item, bullet_style, bulletText='\xe2\x80\xa2'))

story.append(Spacer(1, 18))

# ============ SECTION 2: HOSTING ============
story.append(Paragraph('<b>2. How to Host the Website</b>', h1_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Hosting is a critical decision that affects your website\'s speed, reliability, and security. For a local '
    'business website like an AC mechanic service, you need reliable hosting that ensures the site is always '
    'accessible to potential customers. Even a few minutes of downtime during peak business hours could mean '
    'lost customers and revenue. Below is a comprehensive guide to choosing and setting up hosting for your '
    'client\'s website.',
    body_style
))

story.append(Paragraph('<b>2.1 Hosting Options Comparison</b>', h2_style))
story.append(Spacer(1, 12))

# Hosting Table
hosting_data = [
    [
        Paragraph('<b>Hosting Type</b>', header_cell),
        Paragraph('<b>Best For</b>', header_cell),
        Paragraph('<b>Cost/Year</b>', header_cell),
        Paragraph('<b>Speed</b>', header_cell),
        Paragraph('<b>Ease of Use</b>', header_cell),
    ],
    [
        Paragraph('Shared Hosting', cell_left),
        Paragraph('Small business', cell_style),
        Paragraph('$30 - $100', cell_style),
        Paragraph('Good', cell_style),
        Paragraph('Very Easy', cell_style),
    ],
    [
        Paragraph('VPS Hosting', cell_left),
        Paragraph('Growing business', cell_style),
        Paragraph('$100 - $300', cell_style),
        Paragraph('Very Good', cell_style),
        Paragraph('Moderate', cell_style),
    ],
    [
        Paragraph('Cloud Hosting', cell_left),
        Paragraph('Scalable needs', cell_style),
        Paragraph('$60 - $250', cell_style),
        Paragraph('Excellent', cell_style),
        Paragraph('Easy', cell_style),
    ],
    [
        Paragraph('Vercel / Netlify', cell_left),
        Paragraph('Next.js / React', cell_style),
        Paragraph('Free - $150', cell_style),
        Paragraph('Excellent', cell_style),
        Paragraph('Very Easy', cell_style),
    ],
    [
        Paragraph('Dedicated Server', cell_left),
        Paragraph('Large operations', cell_style),
        Paragraph('$500 - $2,000', cell_style),
        Paragraph('Excellent', cell_style),
        Paragraph('Complex', cell_style),
    ],
]

hosting_table = Table(hosting_data, colWidths=[100, 95, 85, 80, 90])
table_style_list2 = [
    ('BACKGROUND', (0, 0), (-1, 0), DARK_BLUE),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CCCCCC')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]
for i in range(1, len(hosting_data)):
    table_style_list2.append(('BACKGROUND', (0, i), (-1, i), row_colors[(i - 1) % 2]))
hosting_table.setStyle(TableStyle(table_style_list2))
story.append(hosting_table)
story.append(Spacer(1, 6))
story.append(Paragraph('<b>Table 2.</b> Hosting Options Comparison', caption_style))
story.append(Spacer(1, 18))

story.append(Paragraph('<b>2.2 Recommended Hosting Providers</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'For an AC mechanic website built with Next.js or a similar modern framework, the following hosting '
    'providers are highly recommended based on performance, reliability, pricing, and ease of deployment. '
    'Each of these providers offers unique advantages depending on your technical expertise and the '
    'specific requirements of the project.',
    body_style
))

providers = [
    ('<b>Vercel (Recommended for Next.js):</b> Free tier is generous and perfect for starting. Deploy with a single command. Automatic HTTPS, global CDN, and edge functions. Pro plan at $20/month provides custom domains, analytics, and priority support. This is the easiest option for deploying a Next.js website and is the platform the framework was originally designed for.',),
    ('<b>Netlify:</b> Similar to Vercel with excellent free tier. Drag-and-drop deployment for static sites. Free SSL, form handling, and serverless functions. Starter plan at $19/month includes more build minutes and bandwidth. Netlify is particularly well-suited for static and JAMstack websites.',),
    ('<b>Hostinger:</b> Very affordable shared hosting starting at $2/month. Good for WordPress or traditional websites. Includes free domain for the first year, SSL certificate, and one-click WordPress installation. Business plan at $4/month includes more resources and daily backups.',),
    ('<b>Cloudways:</b> Managed cloud hosting starting at $14/month. Choose from DigitalOcean, AWS, or Google Cloud as the backend. Excellent performance with built-in caching and CDN. Perfect for developers who want cloud performance without the complexity of server management.',),
    ('<b>DigitalOcean App Platform:</b> Simple PaaS starting at $5/month. Deploy directly from GitHub. Auto-scaling and managed databases available. Good for developers comfortable with cloud infrastructure who want more control over the deployment environment.',),
]
for item in providers:
    story.append(Paragraph(item[0], bullet_style, bulletText='\xe2\x80\xa2'))

story.append(Spacer(1, 12))

story.append(Paragraph('<b>2.3 Step-by-Step Hosting Setup</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Here is a practical, step-by-step guide to hosting your AC mechanic website on Vercel, which is the '
    'recommended platform for Next.js projects. This process can be completed in under 30 minutes even if '
    'you are new to Vercel, and the entire deployment is free for standard business websites.',
    body_style
))

steps = [
    '<b>Step 1 - Buy a Domain:</b> Purchase a domain name from Namecheap ($9/year), GoDaddy ($12/year), or Google Domains ($12/year). Choose a professional domain like "coolairpro.com" or "acrepairchennai.com". Keep it short, memorable, and relevant to the business.',
    '<b>Step 2 - Create Vercel Account:</b> Sign up for free at vercel.com using your GitHub or email. Vercel offers a generous free tier that includes 100GB bandwidth, SSL certificates, and unlimited deployments.',
    '<b>Step 3 - Connect GitHub Repository:</b> Push your website code to a GitHub repository. In Vercel, click "New Project" and import your repository. Vercel will automatically detect the Next.js framework and configure the build settings.',
    '<b>Step 4 - Configure Domain:</b> In Vercel project settings, add your custom domain. Update the DNS records at your domain registrar to point to Vercel\'s nameservers. SSL certificate is automatically provisioned.',
    '<b>Step 5 - Deploy and Test:</b> Click "Deploy" and wait for the build to complete (usually 1-3 minutes). Test all pages, forms, and features on the live URL. Set up monitoring and alerts for any downtime.',
    '<b>Step 6 - Hand Over to Client:</b> Transfer domain ownership or keep it in your account. Provide the client with admin access to Vercel (if desired), login credentials, and a brief document explaining how to make basic content updates.',
]
for step in steps:
    story.append(Paragraph(step, bullet_style, bulletText='\xe2\x80\xa2'))

story.append(Spacer(1, 18))

# ============ SECTION 3: SEO ============
story.append(Paragraph('<b>3. Search Engine Optimization (SEO) Guide</b>', h1_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'SEO is the most important long-term strategy for a local service business website. Unlike paid advertising '
    'that stops generating leads the moment you stop paying, SEO builds a sustainable stream of organic traffic '
    'that compounds over time. For an AC mechanic business, effective SEO means appearing at the top of Google '
    'search results when potential customers search for terms like "AC repair near me" or "AC installation '
    'Chennai". This section covers everything you need to know to make the website search-engine friendly and '
    'competitive in local search results.',
    body_style
))

story.append(Paragraph('<b>3.1 On-Page SEO Checklist</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'On-page SEO refers to the optimizations you make directly on the website pages to improve their search '
    'engine rankings. These are the foundational elements that every page on the AC mechanic website should '
    'have properly configured. Implementing these elements correctly from the start gives the website a '
    'significant advantage over competitors who neglect basic SEO practices.',
    body_style
))

seo_items = [
    '<b>Title Tags:</b> Each page should have a unique, descriptive title tag under 60 characters. Format: "Primary Keyword | Business Name | Location". Example: "AC Repair Chennai | CoolAir Pro | Fast Service". Include the most important keyword at the beginning of the title.',
    '<b>Meta Descriptions:</b> Write compelling descriptions under 160 characters that include target keywords and a call-to-action. These appear in search results and directly influence click-through rates. Example: "Expert AC repair in Chennai. Same-day service, honest pricing. Call now for free estimate!"',
    '<b>Header Tags (H1-H6):</b> Use only one H1 per page containing the primary keyword. Use H2 and H3 tags for subheadings with secondary keywords. This creates a clear content hierarchy that search engines can easily understand and index.',
    '<b>Image Optimization:</b> Compress all images (use WebP format when possible). Add descriptive alt tags to every image. Example: alt="AC technician repairing Daikin split AC in Chennai". This helps images appear in Google Image search.',
    '<b>URL Structure:</b> Use clean, keyword-rich URLs. Example: coolairpro.com/ac-repair-chennai instead of coolairpro.com/service?id=3. Keep URLs short, descriptive, and hyphen-separated.',
    '<b>Internal Linking:</b> Link between related pages on the website. For example, link from the services page to the contact page. This helps search engines discover and understand the relationship between pages.',
    '<b>Mobile-Friendly Design:</b> Google uses mobile-first indexing, meaning it evaluates the mobile version of your site first. Ensure the website is fully responsive and passes Google\'s Mobile-Friendly Test tool.',
    '<b>Page Speed:</b> Aim for a loading time under 3 seconds. Use Google PageSpeed Insights to identify performance issues. Compress images, minify CSS/JS, enable browser caching, and use a CDN for optimal loading times.',
]
for item in seo_items:
    story.append(Paragraph(item, bullet_style, bulletText='\xe2\x80\xa2'))

story.append(Spacer(1, 12))

story.append(Paragraph('<b>3.2 Local SEO Strategy</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Local SEO is especially critical for service businesses like AC mechanics because customers almost always '
    'search for services in their specific area. When someone searches "AC repair near me" or "AC mechanic '
    'in Anna Nagar", Google shows local business listings at the top of the search results. Optimizing for '
    'these local searches can dramatically increase the number of qualified leads coming to the website. '
    'The following strategies will help the AC mechanic business dominate local search results.',
    body_style
))

local_seo = [
    '<b>Google Business Profile:</b> Create and fully optimize a Google Business Profile (formerly Google My Business). This is free and is the single most important local SEO factor. Add accurate business name, address, phone number, business hours, service areas, photos, and service categories. Regularly post updates and respond to all customer reviews.',
    '<b>NAP Consistency:</b> Ensure the business Name, Address, and Phone number (NAP) are identical across the website, Google Business Profile, social media profiles, and all online directories. Even small inconsistencies (like "St." vs "Street") can hurt local rankings.',
    '<b>Local Keywords:</b> Target location-specific keywords throughout the website content. Examples include "AC repair in Chennai", "AC mechanic Anna Nagar", "AC gas refill Velachery", and "AC installation near me". Create dedicated service area pages if the business serves multiple neighborhoods.',
    '<b>Online Reviews:</b> Encourage satisfied customers to leave reviews on Google. Respond professionally to all reviews, both positive and negative. Aim for at least 50+ reviews with a 4.5+ star rating. Reviews are one of the top factors in local search rankings and significantly influence potential customers.',
    '<b>Local Citations:</b> List the business on local directories including JustDial, Sulekha, Yelp, Yellow Pages, and industry-specific directories. Ensure NAP consistency across all listings. Quality citations from reputable directories improve local search visibility.',
    '<b>Schema Markup:</b> Implement LocalBusiness and HVACBusiness structured data (JSON-LD format) in the website code. This helps search engines understand the business information and can result in rich snippets in search results, including star ratings, business hours, and service types.',
]
for item in local_seo:
    story.append(Paragraph(item, bullet_style, bulletText='\xe2\x80\xa2'))

story.append(Spacer(1, 12))

story.append(Paragraph('<b>3.3 Content Strategy for Ongoing SEO</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Creating high-quality, relevant content is one of the most effective long-term SEO strategies. Regularly '
    'publishing blog posts and articles about AC-related topics helps the website rank for a wider range of '
    'keywords and positions the business as an authority in the AC service industry. Here are content ideas '
    'that will attract organic traffic and convert visitors into customers.',
    body_style
))

content_ideas = [
    '<b>Blog Posts (Monthly):</b> Write 2-4 blog posts per month on topics like "5 Signs Your AC Needs Repair", "How to Choose the Right AC for Your Room", "AC Maintenance Tips for Summer", and "R32 vs R410A Gas - Which is Better?". Each post should be 800-1500 words with relevant keywords naturally integrated.',
    '<b>FAQ Section:</b> Create a comprehensive FAQ page answering common customer questions. Use FAQ schema markup so Google may display these questions directly in search results. This increases visibility and provides immediate answers to potential customers.',
    '<b>Seasonal Content:</b> Create special pages or blog posts for seasonal AC needs. Examples: "Summer AC Preparation Guide" (March-April), "Winter AC Maintenance Tips" (October-November), and "Festival Season AC Offers" (as applicable).',
    '<b>Video Content:</b> Short videos showing AC repair tips, maintenance demonstrations, and customer testimonials can be embedded on the website and shared on YouTube. Videos increase time-on-page metrics and can rank in both Google and YouTube search results.',
    '<b>Before/After Case Studies:</b> Showcase successful repair jobs with photos and brief descriptions. This builds trust with potential customers and provides unique, valuable content that competitors are unlikely to replicate.',
]
for item in content_ideas:
    story.append(Paragraph(item, bullet_style, bulletText='\xe2\x80\xa2'))

story.append(Spacer(1, 12))

story.append(Paragraph('<b>3.4 Technical SEO Essentials</b>', h2_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Technical SEO ensures that search engines can effectively crawl, index, and render the website. Without '
    'proper technical SEO, even the best content may not rank well in search results. These technical elements '
    'form the backbone of a search-engine friendly website and should be implemented during the initial build '
    'rather than as an afterthought.',
    body_style
))

tech_seo = [
    '<b>Sitemap.xml:</b> Generate and submit a sitemap to Google Search Console. This helps search engines discover all pages on the website quickly and understand the site structure. Update the sitemap automatically whenever new pages are added.',
    '<b>Robots.txt:</b> Create a robots.txt file to guide search engine crawlers. Allow access to all public pages and block access to admin or API paths. This ensures efficient crawling of the website content.',
    '<b>SSL Certificate (HTTPS):</b> Ensure the website uses HTTPS. Google considers HTTPS as a ranking signal, and browsers show security warnings for non-HTTPS sites. Vercel and most hosting providers include free SSL certificates.',
    '<b>Core Web Vitals:</b> Optimize for Google\'s Core Web Vitals metrics: Largest Contentful Paint (LCP under 2.5s), First Input Delay (FID under 100ms), and Cumulative Layout Shift (CLS under 0.1). These metrics directly impact search rankings.',
    '<b>Canonical Tags:</b> Add canonical tags to prevent duplicate content issues. This is especially important if the website has multiple URLs that serve the same content, such as with or without "www" prefix.',
    '<b>Google Search Console:</b> Set up Google Search Console and monitor indexing status, search performance, and fix any crawl errors. This free tool provides invaluable insights into how Google sees and ranks the website.',
]
for item in tech_seo:
    story.append(Paragraph(item, bullet_style, bulletText='\xe2\x80\xa2'))

story.append(Spacer(1, 18))

# ============ SECTION 4: QUICK START CHECKLIST ============
story.append(Paragraph('<b>4. Quick Start Checklist</b>', h1_style))
story.append(Spacer(1, 6))

story.append(Paragraph(
    'Use this comprehensive checklist to ensure nothing is missed during the website creation and launch process. '
    'Following this checklist systematically will help you deliver a professional website that meets all the '
    'requirements discussed in this guide. Check off each item as you complete it to maintain organized progress '
    'throughout the project lifecycle.',
    body_style
))

checklist_data = [
    [
        Paragraph('<b>Phase</b>', header_cell),
        Paragraph('<b>Task</b>', header_cell),
        Paragraph('<b>Status</b>', header_cell),
    ],
    [Paragraph('Planning', cell_left), Paragraph('Gather client requirements and brand assets', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Planning', cell_left), Paragraph('Register domain name', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Design', cell_left), Paragraph('Create wireframe and get approval', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Design', cell_left), Paragraph('Design color scheme and typography', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Development', cell_left), Paragraph('Build Home page with hero and CTAs', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Development', cell_left), Paragraph('Build About page with trust factors', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Development', cell_left), Paragraph('Build Services page with pricing', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Development', cell_left), Paragraph('Build Contact page with form and map', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Development', cell_left), Paragraph('Add floating Call and WhatsApp buttons', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Development', cell_left), Paragraph('Add customer testimonials section', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('SEO', cell_left), Paragraph('Set up meta tags for all pages', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('SEO', cell_left), Paragraph('Add schema markup (JSON-LD)', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('SEO', cell_left), Paragraph('Create sitemap.xml', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('SEO', cell_left), Paragraph('Create robots.txt', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('SEO', cell_left), Paragraph('Optimize images with alt tags', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Launch', cell_left), Paragraph('Test on multiple devices and browsers', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Launch', cell_left), Paragraph('Deploy to hosting (Vercel recommended)', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Launch', cell_left), Paragraph('Connect custom domain with SSL', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Launch', cell_left), Paragraph('Submit to Google Search Console', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Post-Launch', cell_left), Paragraph('Set up Google Business Profile', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Post-Launch', cell_left), Paragraph('Create social media profiles', cell_left), Paragraph('[ ]', cell_style)],
    [Paragraph('Post-Launch', cell_left), Paragraph('Submit to local directories', cell_left), Paragraph('[ ]', cell_style)],
]

checklist_table = Table(checklist_data, colWidths=[85, 300, 60])
table_style_list3 = [
    ('BACKGROUND', (0, 0), (-1, 0), DARK_BLUE),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CCCCCC')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 6),
    ('RIGHTPADDING', (0, 0), (-1, -1), 6),
    ('TOPPADDING', (0, 0), (-1, -1), 5),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
]
for i in range(1, len(checklist_data)):
    table_style_list3.append(('BACKGROUND', (0, i), (-1, i), row_colors[(i - 1) % 2]))
checklist_table.setStyle(TableStyle(table_style_list3))
story.append(Spacer(1, 12))
story.append(checklist_table)
story.append(Spacer(1, 6))
story.append(Paragraph('<b>Table 3.</b> Complete Website Launch Checklist', caption_style))

# Build PDF
doc.build(story)
print("PDF generated successfully!")
print(f"Output: {pdf_filename}")
