# Formspree Setup Guide

I've implemented Formspree for your contact form - this sends emails directly to you without requiring users to open their email client.

## Quick Setup (5 minutes):

### 1. Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account (allows 50 submissions/month)
3. Verify your email address

### 2. Create a New Form
1. Click "New Form" in your dashboard
2. Set the form name: "PEMAG Contact Form"
3. Set the email to: `contact@pemaginnovations.org`
4. Copy the form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

### 3. Update the Code
Replace the current endpoint in `client/src/components/contact-section.tsx`:

```javascript
// Change this line (appears twice in the file):
const response = await fetch('https://formspree.io/f/xdkogqpb', {

// To your actual endpoint:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### 4. Deploy
Commit and push the changes - your form will work immediately!

## How It Works:

✅ **User fills form** → Clicks "Send Message"  
✅ **Form submits directly** → No email client needed  
✅ **You get email** → Formatted email to contact@pemaginnovations.org  
✅ **User sees success** → Professional confirmation message  

## Features:

- **Professional emails** with all form data
- **Reply-to** set to sender's email
- **Spam protection** built-in
- **Mobile friendly** 
- **No server required** - works with GitHub Pages
- **Free tier** - 50 submissions/month
- **Upgrade available** - More submissions if needed

## Current Status:

I've temporarily used a demo endpoint. Replace it with your actual Formspree endpoint and you're ready to go!

This is the standard solution used by thousands of professional websites.