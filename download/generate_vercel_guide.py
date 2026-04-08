from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib import colors
from reportlab.lib.units import cm, inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
import os

pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')

pdf_filename = "/home/z/my-project/download/Vercel_Deployment_Guide_Deva_AC.pdf"
doc = SimpleDocTemplate(
    pdf_filename, pagesize=A4,
    title="Vercel Deployment Guide - Deva AC Website",
    author="Z.ai", creator="Z.ai",
    subject="Step by step guide to host Deva AC website on Vercel",
    leftMargin=2*cm, rightMargin=2*cm, topMargin=2*cm, bottomMargin=2*cm
)

TABLE_HEADER_COLOR = colors.HexColor('#0284c7')
TABLE_HEADER_TEXT = colors.white
TABLE_ROW_ODD = colors.HexColor('#f0f9ff')

cover_title = ParagraphStyle('CoverTitle', fontName='Times New Roman', fontSize=36, leading=44, alignment=TA_CENTER, spaceAfter=24)
cover_sub = ParagraphStyle('CoverSub', fontName='Times New Roman', fontSize=16, leading=22, alignment=TA_CENTER, spaceAfter=12, textColor=colors.HexColor('#0369a1'))
cover_info = ParagraphStyle('CoverInfo', fontName='Times New Roman', fontSize=12, leading=18, alignment=TA_CENTER, spaceAfter=8, textColor=colors.HexColor('#475569'))

h1_style = ParagraphStyle('H1', fontName='Times New Roman', fontSize=22, leading=28, spaceBefore=18, spaceAfter=12, textColor=colors.HexColor('#0c4a6e'))
h2_style = ParagraphStyle('H2', fontName='Times New Roman', fontSize=16, leading=22, spaceBefore=14, spaceAfter=8, textColor=colors.HexColor('#0369a1'))
body_style = ParagraphStyle('Body', fontName='Times New Roman', fontSize=11, leading=18, alignment=TA_LEFT, spaceAfter=8)
step_style = ParagraphStyle('Step', fontName='Times New Roman', fontSize=11, leading=18, alignment=TA_LEFT, spaceAfter=6, leftIndent=12)
code_style = ParagraphStyle('Code', fontName='Times New Roman', fontSize=10, leading=16, alignment=TA_LEFT, spaceAfter=4, leftIndent=24, backColor=colors.HexColor('#f1f5f9'), borderColor=colors.HexColor('#e2e8f0'), borderWidth=1, borderPadding=6)
note_style = ParagraphStyle('Note', fontName='Times New Roman', fontSize=10, leading=16, alignment=TA_LEFT, spaceAfter=8, leftIndent=12, textColor=colors.HexColor('#b45309'), backColor=colors.HexColor('#fffbeb'), borderPadding=8)

header_cell = ParagraphStyle('HeaderCell', fontName='Times New Roman', fontSize=10, textColor=colors.white, alignment=TA_CENTER)
body_cell = ParagraphStyle('BodyCell', fontName='Times New Roman', fontSize=10, alignment=TA_LEFT)
body_cell_c = ParagraphStyle('BodyCellC', fontName='Times New Roman', fontSize=10, alignment=TA_CENTER)

story = []

# Cover Page
story.append(Spacer(1, 120))
story.append(Paragraph('<b>Vercel Deployment Guide</b>', cover_title))
story.append(Spacer(1, 24))
story.append(Paragraph('<b>Deva Air Conditioning Repair and Service</b>', cover_sub))
story.append(Paragraph('devaaairconditioning.com', cover_sub))
story.append(Spacer(1, 48))
story.append(Paragraph('Complete step-by-step instructions to host your AC mechanic website on Vercel for free', cover_info))
story.append(Spacer(1, 12))
story.append(Paragraph('Includes: GitHub setup, Vercel deployment, custom domain, and media file hosting', cover_info))
story.append(Spacer(1, 60))
story.append(Paragraph('Phone: +91 72009 79643', cover_info))
story.append(Paragraph('Email: devaramramasamy93@gmail.com', cover_info))
story.append(PageBreak())

# Step 1
story.append(Paragraph('<b>Step 1: Create a GitHub Account</b>', h1_style))
story.append(Paragraph('GitHub is required to upload your code. Vercel connects to GitHub to deploy your website automatically. If you already have a GitHub account, skip this step.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>1.1</b> Open your browser and go to: <b>https://github.com/signup</b>', step_style))
story.append(Paragraph('<b>1.2</b> Enter your email, create a password, and choose a username (example: deva-ac-service)', step_style))
story.append(Paragraph('<b>1.3</b> Verify your email by clicking the link sent to your inbox', step_style))
story.append(Paragraph('<b>1.4</b> Your GitHub account is now ready', step_style))
story.append(Spacer(1, 8))
story.append(Paragraph('<b>Note:</b> Write down your GitHub username and password. You will need them later.', note_style))

# Step 2
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Step 2: Create a New GitHub Repository</b>', h1_style))
story.append(Paragraph('A repository (repo) is a folder on GitHub where your website code will be stored. This is how Vercel will access your code.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>2.1</b> Go to <b>https://github.com/new</b> after logging in', step_style))
story.append(Paragraph('<b>2.2</b> Fill in the form:', step_style))
story.append(Spacer(1, 4))

t1_data = [
    [Paragraph('<b>Field</b>', header_cell), Paragraph('<b>What to Enter</b>', header_cell)],
    [Paragraph('Repository name', body_cell), Paragraph('deva-ac-website', body_cell)],
    [Paragraph('Description', body_cell), Paragraph('Deva Air Conditioning Repair and Service Website', body_cell)],
    [Paragraph('Visibility', body_cell), Paragraph('Choose <b>Public</b> (free on Vercel)', body_cell)],
    [Paragraph('Add a README', body_cell), Paragraph('Do NOT check this box', body_cell)],
    [Paragraph('Add .gitignore', body_cell), Paragraph('Choose <b>Node</b> from dropdown', body_cell)],
]
t1 = Table(t1_data, colWidths=[3.5*cm, 13*cm])
t1.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), TABLE_HEADER_COLOR),
    ('TEXTCOLOR', (0,0), (-1,0), TABLE_HEADER_TEXT),
    ('BACKGROUND', (0,2), (-1,2), TABLE_ROW_ODD),
    ('BACKGROUND', (0,4), (-1,4), TABLE_ROW_ODD),
    ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
]))
story.append(t1)
story.append(Spacer(1, 6))
story.append(Paragraph('<b>2.3</b> Click the green <b>Create repository</b> button', step_style))
story.append(Paragraph('<b>2.4</b> You will see an empty repository page. Keep this browser tab open.', step_style))

# Step 3
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Step 3: Install Git on Your PC</b>', h1_style))
story.append(Paragraph('Git is the tool that uploads your code from your computer to GitHub. It is required for deployment.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>3.1</b> Go to <b>https://git-scm.com/download/win</b>', step_style))
story.append(Paragraph('<b>3.2</b> Click <b>Click here to download</b> (64-bit Git for Windows Setup)', step_style))
story.append(Paragraph('<b>3.3</b> Run the downloaded installer (.exe file)', step_style))
story.append(Paragraph('<b>3.4</b> Click <b>Next, Next, Next, Install, Finish</b> (keep all default settings)', step_style))
story.append(Paragraph('<b>3.5</b> Restart your computer after installation', step_style))

# Step 4
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Step 4: Upload Your Code to GitHub</b>', h1_style))
story.append(Paragraph('Now you will upload the website code from your computer to the GitHub repository you created.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>4.1</b> Download the deployment zip from: <b>https://files.catbox.moe/6zt71w.zip</b>', step_style))
story.append(Paragraph('<b>4.2</b> Extract the zip to <b>C:\\DevaAC</b> folder on your PC (use right-click Extract All)', step_style))
story.append(Paragraph('<b>4.3</b> Copy all your 12 media files into <b>C:\\DevaAC\\public\\Images\\</b> folder', step_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>4.4</b> Open <b>PowerShell</b> in the DevaAC folder:', step_style))
story.append(Paragraph('Right-click inside the folder window, select "Open in Terminal" or "Open in PowerShell"', step_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>4.5</b> Run these commands one by one:', step_style))
story.append(Spacer(1, 4))
story.append(Paragraph('git init', code_style))
story.append(Paragraph('git add .', code_style))
story.append(Paragraph('git commit -m "Deva AC website initial commit"', code_style))
story.append(Spacer(1, 4))
story.append(Paragraph('<b>4.6</b> Now connect to your GitHub repository (replace YOUR-USERNAME):', step_style))
story.append(Paragraph('git remote add origin https://github.com/YOUR-USERNAME/deva-ac-website.git', code_style))
story.append(Paragraph('git branch -M main', code_style))
story.append(Paragraph('git push -u origin main', code_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>4.7</b> GitHub will ask you to log in. Enter your GitHub username and password.', step_style))
story.append(Paragraph('<b>Important:</b> For password, you need a <b>Personal Access Token</b>. Create one at: <b>https://github.com/settings/tokens</b> (click "Generate new token (classic)", check "repo", generate, copy the token, use it as password)', note_style))

# Step 5
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Step 5: Deploy to Vercel</b>', h1_style))
story.append(Paragraph('Vercel is a free hosting platform that will make your website live on the internet. Anyone can access it via a URL.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>5.1</b> Go to <b>https://vercel.com/signup</b>', step_style))
story.append(Paragraph('<b>5.2</b> Click <b>Continue with GitHub</b> and log in with your GitHub account', step_style))
story.append(Paragraph('<b>5.3</b> After login, you will see the Vercel dashboard. Click <b>Add New > Project</b>', step_style))
story.append(Paragraph('<b>5.4</b> You will see your <b>deva-ac-website</b> repository listed. Click <b>Import</b>', step_style))
story.append(Paragraph('<b>5.5</b> On the Configure Project page, keep all default settings:', step_style))
story.append(Spacer(1, 4))

t2_data = [
    [Paragraph('<b>Setting</b>', header_cell), Paragraph('<b>Value</b>', header_cell)],
    [Paragraph('Framework Preset', body_cell), Paragraph('Next.js (auto-detected)', body_cell)],
    [Paragraph('Build Command', body_cell), Paragraph('next build', body_cell)],
    [Paragraph('Output Directory', body_cell), Paragraph('.next', body_cell)],
    [Paragraph('Install Command', body_cell), Paragraph('npm install', body_cell)],
    [Paragraph('Node.js Version', body_cell), Paragraph('18.x or 20.x', body_cell)],
]
t2 = Table(t2_data, colWidths=[4.5*cm, 12*cm])
t2.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), TABLE_HEADER_COLOR),
    ('TEXTCOLOR', (0,0), (-1,0), TABLE_HEADER_TEXT),
    ('BACKGROUND', (0,2), (-1,2), TABLE_ROW_ODD),
    ('BACKGROUND', (0,4), (-1,4), TABLE_ROW_ODD),
    ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
]))
story.append(t2)
story.append(Spacer(1, 6))
story.append(Paragraph('<b>5.6</b> Click the <b>Deploy</b> button', step_style))
story.append(Paragraph('<b>5.7</b> Wait 2-3 minutes. You will see a rocket animation. When it says "Congratulations!", your website is live!', step_style))
story.append(Paragraph('<b>5.8</b> Vercel will give you a URL like: <b>https://deva-ac-website-xxxx.vercel.app</b>', step_style))
story.append(Spacer(1, 8))
story.append(Paragraph('<b>Your website is now LIVE on the internet!</b> Anyone can visit the URL and see your AC service website.', note_style))

# Step 6
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Step 6: Add Your Custom Domain (Optional)</b>', h1_style))
story.append(Paragraph('If you purchased a domain like devaaairconditioning.com, you can connect it to Vercel so visitors see your professional domain instead of the vercel.app URL.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>6.1</b> In Vercel dashboard, click on your project', step_style))
story.append(Paragraph('<b>6.2</b> Go to <b>Settings > Domains</b>', step_style))
story.append(Paragraph('<b>6.3</b> Type your domain: <b>devaaairconditioning.com</b> and click Add', step_style))
story.append(Paragraph('<b>6.4</b> Vercel will show you DNS records to add. Go to your domain provider (GoDaddy, Namecheap, etc.)', step_style))
story.append(Paragraph('<b>6.5</b> Add these DNS records in your domain provider:', step_style))
story.append(Spacer(1, 4))

t3_data = [
    [Paragraph('<b>Type</b>', header_cell), Paragraph('<b>Name</b>', header_cell), Paragraph('<b>Value</b>', header_cell)],
    [Paragraph('A', body_cell_c), Paragraph('@', body_cell_c), Paragraph('76.76.21.21', body_cell_c)],
    [Paragraph('CNAME', body_cell_c), Paragraph('www', body_cell_c), Paragraph('cname.vercel-dns.com', body_cell_c)],
]
t3 = Table(t3_data, colWidths=[3*cm, 4*cm, 9.5*cm])
t3.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), TABLE_HEADER_COLOR),
    ('TEXTCOLOR', (0,0), (-1,0), TABLE_HEADER_TEXT),
    ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
]))
story.append(t3)
story.append(Spacer(1, 6))
story.append(Paragraph('<b>6.6</b> Wait 10-30 minutes for DNS to propagate. Your domain will start working.', step_style))
story.append(Paragraph('<b>6.7</b> Vercel will automatically provide free SSL (HTTPS) for your domain.', step_style))

# Step 7
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Step 7: Add Your Media Files (Videos and Images)</b>', h1_style))
story.append(Paragraph('Your media files (videos and images) are too large for GitHub (max 100MB per file). You have two options to host them:', body_style))
story.append(Spacer(1, 8))
story.append(Paragraph('<b>Option A: Use Vercel Public Folder (Easiest)</b>', h2_style))
story.append(Paragraph('Vercel allows files up to 100MB in the public folder. Since your individual videos are under 100MB, this works. Simply copy your 12 files into the public/Images/ folder and push to GitHub. The files will deploy automatically.', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('The 12 files to place in public/Images/:', step_style))
story.append(Paragraph('Ac-Service-Video-1.mp4, Ac-Service-Video-2.mp4, Ac-Service_video-3.mp4, Ac-Installation-video-1.mp4, Ac-Installation-video.mp4, Ac-Installation-video-3.mp4, Ac-Gas-filling-image-1.jpeg, Ac-Gas-filling-image-2.jpeg, Ac-Gas-filling-video-1.mp4, Ac-Cleaning-video-1.mp4, Ac-Cleaning-video-2.mp4, Ac-Cleaning-video-3.mp4', code_style))
story.append(Spacer(1, 8))
story.append(Paragraph('<b>Option B: Use Cloudinary (For Large Files)</b>', h2_style))
story.append(Paragraph('If your videos are over 100MB or you want faster loading, use Cloudinary (free). Go to https://cloudinary.com, create a free account, upload your videos, and replace the file paths in FeaturedServices.tsx with the Cloudinary URLs.', body_style))

# Step 8
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Step 8: Update Your Website Later</b>', h1_style))
story.append(Paragraph('Whenever you want to make changes to your website (text, images, services, etc.), follow these steps:', body_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>8.1</b> Open your project folder (C:\\DevaAC) in VS Code', step_style))
story.append(Paragraph('<b>8.2</b> Make your changes to the code', step_style))
story.append(Paragraph('<b>8.3</b> Open PowerShell and run:', step_style))
story.append(Paragraph('git add .', code_style))
story.append(Paragraph('git commit -m "updated website"', code_style))
story.append(Paragraph('git push', code_style))
story.append(Spacer(1, 6))
story.append(Paragraph('<b>8.4</b> Vercel will <b>automatically detect</b> your changes and redeploy within 1-2 minutes!', step_style))
story.append(Paragraph('No need to manually deploy again. Every time you push to GitHub, Vercel rebuilds automatically.', note_style))

# Troubleshooting
story.append(Spacer(1, 12))
story.append(Paragraph('<b>Troubleshooting Common Issues</b>', h1_style))
story.append(Spacer(1, 6))

t4_data = [
    [Paragraph('<b>Problem</b>', header_cell), Paragraph('<b>Solution</b>', header_cell)],
    [Paragraph('Build fails on Vercel', body_cell), Paragraph('Check Vercel > Deployments > click failed build > read error log. Most common: missing dependency or syntax error.', body_cell)],
    [Paragraph('Videos/images not showing', body_cell), Paragraph('Make sure files are in public/Images/ folder. Check file names match exactly (case-sensitive).', body_cell)],
    [Paragraph('Website shows old version', body_cell), Paragraph('Go to Vercel dashboard > Deployments > click "..." > Redeploy. Or push a new commit to GitHub.', body_cell)],
    [Paragraph('Custom domain not working', body_cell), Paragraph('DNS propagation takes 10-30 min. Check DNS records are correct. Use https://dnschecker.org to verify.', body_cell)],
    [Paragraph('Git push rejected', body_cell), Paragraph('Run "git pull origin main" first, then try push again.', body_cell)],
]
t4 = Table(t4_data, colWidths=[4.5*cm, 12*cm])
t4.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), TABLE_HEADER_COLOR),
    ('TEXTCOLOR', (0,0), (-1,0), TABLE_HEADER_TEXT),
    ('BACKGROUND', (0,2), (-1,2), TABLE_ROW_ODD),
    ('BACKGROUND', (0,4), (-1,4), TABLE_ROW_ODD),
    ('GRID', (0,0), (-1,-1), 0.5, colors.grey),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 8),
    ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ('TOPPADDING', (0,0), (-1,-1), 6),
    ('BOTTOMPADDING', (0,0), (-1,-1), 6),
]))
story.append(t4)

# Summary
story.append(Spacer(1, 18))
story.append(Paragraph('<b>Quick Summary</b>', h1_style))
story.append(Spacer(1, 6))
story.append(Paragraph('1. Create GitHub account and repository (deva-ac-website)', step_style))
story.append(Paragraph('2. Install Git on your Windows PC', step_style))
story.append(Paragraph('3. Download project zip, extract, add media files to public/Images/', step_style))
story.append(Paragraph('4. Push code to GitHub using git commands', step_style))
story.append(Paragraph('5. Go to Vercel.com, import from GitHub, click Deploy', step_style))
story.append(Paragraph('6. Your website is live! Add custom domain if needed', step_style))
story.append(Paragraph('7. Future updates: just edit code and git push - auto deploys!', step_style))

doc.build(story)
print("PDF created at:", pdf_filename)
