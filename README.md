# Suhrit Padakanti - Personal Website

A modern, responsive single-page portfolio website built with HTML, CSS, and JavaScript featuring a visual skills grid.

## Setup Instructions

### 1. Add Your Resume
- Place your resume file as `resume.pdf` in the root directory
- The resume button will automatically link to this file

### 2. Professional Headshot ✅
Your professional headshot is now included! The About section displays your `Professional Headshot.jpg` image.

If you want to use a different image:
- Replace `Professional Headshot.jpg` with your preferred image
- Update the filename in `index.html` if needed: `<img src="your-image.jpg" alt="Professional headshot of Suhrit">`

### 3. Technology Icons
The skills section now uses **professional SVG logos** for all technologies:
- **Programming Languages**: Python, JavaScript, TypeScript, Java, Swift, C/C++, SQL, HTML/CSS
- **Technologies**: React, Node.js, AWS, Docker, TensorFlow, PyTorch, MongoDB, MySQL, Git

All technology logos are included as SVG files:
- `python-icon.svg`, `javascript-icon.svg`, `typescript-icon.svg`, `java-icon.svg`, `swift-icon.svg`
- `cpp-icon.svg`, `sql-icon.svg`, `html-icon.svg`, `react-icon.svg`, `nodejs-icon.svg` 
- `aws-icon.svg`, `docker-icon.svg`, `tensorflow-icon.svg`, `pytorch-icon.svg`
- `mongodb-icon.svg`, `mysql-icon.svg`, `git-icon.svg`

### 4. Update Content
The website is already populated with your resume information, but you can customize:
- Project descriptions and links
- Contact information
- Social media profiles

## New Features

### Visual Skills Grid
- **Modern card-based layout** with hover animations
- **Separate sections** for Programming Languages and Technologies
- **Responsive design** that works on all devices
- **Color-coded backgrounds** for each technology
- **Easy to customize** - just replace emoji/text with your preferred icons

## Deployment to Vercel

### Method 1: Using Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. In your project directory:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy

### Method 2: Using GitHub + Vercel Dashboard
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Deploy with default settings

### Method 3: Drag and Drop
1. Go to [vercel.com](https://vercel.com)
2. Drag your project folder to the deployment area
3. Your site will be deployed instantly

## File Structure
```
your-website/
├── index.html          # Main website file
├── resume.pdf          # Your resume (add this)
├── headshot.jpg        # Your professional photo (add this)
├── linkedin-icon.svg   # LinkedIn logo (included)
├── github-icon.svg     # GitHub logo (included)
└── README.md          # This file
```

## Features
- Responsive design that works on all devices
- Smooth scrolling navigation with active link highlighting
- Modern visual skills grid with hover animations
- Professional timeline for work experience
- Project showcase with GitHub integration
- Clean contact section with direct email link
- SEO optimized and fast loading

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization Tips
- **Colors**: Change the accent color by replacing `#007bff` throughout the CSS
- **Fonts**: Update the font-family in the body CSS rule
- **Layout**: Modify grid layouts in the skills and projects sections
- **Content**: All text content is easily editable in the HTML 