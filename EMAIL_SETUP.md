# Email Setup Guide

Your contact form now sends structured email notifications to `contact@pemaginnovations.org` whenever someone submits the form or subscribes to the newsletter.

## Setup Instructions

### 1. Create a Gmail App Password (Recommended)

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. At the bottom, click "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### 2. Configure Environment Variables

Create a `.env` file in your project root with:

```env
# Database
DATABASE_URL=your_database_url_here

# Email Configuration
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

### 3. Alternative Email Providers

If you don't want to use Gmail, you can modify `server/email.ts` to use other providers:

#### Outlook/Hotmail
```javascript
service: 'hotmail',
auth: {
  user: 'your_email@outlook.com',
  pass: 'your_password'
}
```

#### Custom SMTP
```javascript
host: 'smtp.your-provider.com',
port: 587,
secure: false,
auth: {
  user: 'your_email@domain.com',
  pass: 'your_password'
}
```

## What You'll Receive

### Contact Form Submissions
- **Subject**: "New Contact Form Submission - [Name]"
- **Content**: Beautifully formatted HTML email with:
  - Contact information (name, email, phone)
  - Service interest (if selected)
  - Full message
  - Timestamp
  - Reply-to set to the sender's email

### Newsletter Subscriptions
- **Subject**: "New Newsletter Subscription - [Email]"
- **Content**: Simple notification with email and timestamp

## Features

✅ **Professional HTML formatting**  
✅ **Mobile-friendly design**  
✅ **Direct reply capability**  
✅ **Clickable email and phone links**  
✅ **Service interest badges**  
✅ **Automatic timestamps**  
✅ **Fallback to database if email fails**

## Testing

1. Fill out your contact form on the website
2. Check your `contact@pemaginnovations.org` inbox
3. You should receive a formatted email notification

## Troubleshooting

- **No emails received**: Check your `.env` file configuration
- **Authentication errors**: Ensure you're using an app password, not your regular password
- **Still not working**: Check the server logs for error messages

The system will continue to save submissions to the database even if email sending fails, so you won't lose any leads.