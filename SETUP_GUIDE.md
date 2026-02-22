# Jeeyo Website - Setup Guide

## 🚀 Quick Start - Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New Repository" (green button)
3. Name it: `jeeyo-website` (or any name you prefer)
4. Make it **Public**
5. Click "Create Repository"

### Step 2: Upload Website Files
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop the `index.html` file
3. Add commit message: "Initial website upload"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. In your repository, click "Settings" (top right)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://YOUR-USERNAME.github.io/jeeyo-website/`

🎉 **That's it!** Your website is now live!

---

## 📊 Set Up Lead Capture (Google Sheets Integration)

### Option A: Google Forms (Easiest)

1. **Create Google Form**
   - Go to [Google Forms](https://forms.google.com)
   - Create a new form with these fields:
     - Name (Short answer)
     - Phone Number (Short answer)
     - Service Required (Dropdown)
     - Message (Paragraph)

2. **Get Form Submission URL**
   - In your form, click "Send" button
   - Click the link icon (<>)
   - Copy the form URL
   - Click "Get pre-filled link"
   - Fill in dummy data and click "Get link"
   - Copy this URL - it contains field IDs

3. **Update website**
   - Open `index.html`
   - Find line with `YOUR_GOOGLE_FORM_ACTION_URL_HERE`
   - Replace with your Google Form action URL
   
### Option B: Google Apps Script (Advanced - Direct to Spreadsheet)

I've created a complete Google Apps Script solution below that sends form data directly to a Google Sheet.

---

## 📝 Google Apps Script Setup (Recommended)

### Step 1: Create Google Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet called "Jeeyo Leads"
3. In Sheet1, add headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Phone`
   - D1: `Service`
   - E1: `Message`

### Step 2: Add Apps Script
1. In your spreadsheet, click "Extensions" → "Apps Script"
2. Delete any existing code
3. Paste the code from `google-apps-script.js` (provided separately)
4. Click "Deploy" → "New deployment"
5. Choose type: "Web app"
6. Settings:
   - Execute as: "Me"
   - Who has access: "Anyone"
7. Click "Deploy"
8. Copy the Web App URL

### Step 3: Update Website
1. Open `index.html`
2. Find the form submission section (around line 750)
3. Replace `YOUR_GOOGLE_FORM_ACTION_URL_HERE` with your Web App URL
4. Commit and push changes to GitHub

---

## 🎨 Customization Guide

### Replace Logo
Currently using text "JEEYO". To add an image logo:

```html
<!-- Find this in index.html (around line 280) -->
<div class="logo">
    JEEYO
    <span>Live Free, Live Long</span>
</div>

<!-- Replace with -->
<div class="logo">
    <img src="jeeyo-logo.png" alt="Jeeyo" style="height: 50px;">
</div>
```

Then upload `jeeyo-logo.png` to your GitHub repository.

### Change Colors
Edit these CSS variables at the top of `index.html` (around line 20):

```css
:root {
    --primary: #2C5F2D;        /* Main green color */
    --primary-light: #97BC62;  /* Light green */
    --accent: #D4A574;         /* Gold accent */
    --text-dark: #2B2B2B;      /* Dark text */
    --bg-cream: #FAF8F3;       /* Background cream */
}
```

### Update Contact Information
All contact info is in the Contact section. Search for:
- Phone numbers: `9073697171`
- Email: `jeeyo.care@gmail.com`
- Address: `DA-129, Street-278`

Replace with your actual information.

---

## 📱 Testing Your Website

### Test Locally
1. Download `index.html`
2. Double-click to open in browser
3. Test all links and form

### Test Form Submission
1. Fill out the contact form
2. Submit
3. Check your Google Sheet for new entry
4. You should also receive email notification (if configured)

---

## 🔧 Troubleshooting

### Website not showing on GitHub Pages
- Wait 5-10 minutes after enabling Pages
- Check repository is Public
- Ensure file is named `index.html` (not `index.html.txt`)

### Form not submitting
- Check Apps Script deployment settings
- Verify "Anyone" has access to Web App
- Check browser console for errors (F12)

### Styling looks wrong
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

---

## 📈 Analytics (Optional)

### Add Google Analytics
1. Create account at [Google Analytics](https://analytics.google.com)
2. Get tracking code
3. Add before `</head>` tag in `index.html`

---

## 🎯 Next Steps

1. ✅ Deploy to GitHub Pages
2. ✅ Set up Google Sheets lead capture
3. ✅ Test form submission
4. ✅ Replace placeholder logo with actual logo
5. ✅ Share website link with customers
6. ✅ Monitor leads in Google Sheets

---

## 📞 Support

If you need help:
- GitHub Pages Docs: https://pages.github.com
- Google Apps Script Docs: https://developers.google.com/apps-script

---

## 🌟 Features Included

✓ Responsive design (mobile-friendly)
✓ Smooth scrolling navigation
✓ Contact form with validation
✓ Google Sheets integration ready
✓ SEO optimized
✓ Fast loading
✓ Professional design
✓ Elderly-friendly large text
✓ Clear call-to-actions
✓ All services listed
✓ Pricing plans displayed
✓ Contact information prominent

**Your website URL:** `https://YOUR-USERNAME.github.io/jeeyo-website/`

Replace `YOUR-USERNAME` with your actual GitHub username!
