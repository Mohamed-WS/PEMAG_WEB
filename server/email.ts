import nodemailer from 'nodemailer';
import type { InsertContactSubmission, InsertNewsletterSubscription } from '@shared/schema';

// Create email transporter
const createTransporter = () => {
  // For production, you'll need to configure with your email provider
  // This is a basic setup - you'll need to add your SMTP settings
  return nodemailer.createTransporter({
    // Gmail example (you can use other providers)
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your app password
    },
  });
};

const getServiceLabel = (value: string) => {
  const serviceMap: Record<string, string> = {
    'petroleum-mining': 'Petroleum & Mining Engineering',
    'energy-sustainability': 'Energy & Sustainability',
    'environment-waste': 'Environment and Waste Management',
    'agricultural-systems': 'Agricultural Systems & Tech',
    'software-training': 'Software Training',
    'ai-it': 'Artificial Intelligence and IT'
  };
  return serviceMap[value] || value;
};

export const sendContactNotification = async (submission: InsertContactSubmission) => {
  try {
    const transporter = createTransporter();
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="border-bottom: 3px solid #ff6b35; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: #666; margin: 5px 0 0 0;">PEMAG Innovations Website</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 15px; border-left: 4px solid #ff6b35; padding-left: 15px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #666;">${submission.firstName} ${submission.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; color: #666;">
                  <a href="mailto:${submission.email}" style="color: #1e3a8a; text-decoration: none;">${submission.email}</a>
                </td>
              </tr>
              ${submission.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                <td style="padding: 8px 0; color: #666;">
                  <a href="tel:${submission.phone}" style="color: #1e3a8a; text-decoration: none;">${submission.phone}</a>
                </td>
              </tr>
              ` : ''}
              ${submission.serviceInterest ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Service:</td>
                <td style="padding: 8px 0;">
                  <span style="background-color: #1e3a8a; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px;">
                    ${getServiceLabel(submission.serviceInterest)}
                  </span>
                </td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Date:</td>
                <td style="padding: 8px 0; color: #666;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 25px;">
            <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 15px; border-left: 4px solid #ff6b35; padding-left: 15px;">Message</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35;">
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${submission.message}</p>
            </div>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This email was sent from the PEMAG Innovations contact form at 
              <a href="https://pemaginnovations.org" style="color: #1e3a8a;">pemaginnovations.org</a>
            </p>
          </div>
        </div>
      </div>
    `;

    const textContent = `
New Contact Form Submission - PEMAG Innovations

Contact Information:
- Name: ${submission.firstName} ${submission.lastName}
- Email: ${submission.email}
${submission.phone ? `- Phone: ${submission.phone}` : ''}
${submission.serviceInterest ? `- Service Interest: ${getServiceLabel(submission.serviceInterest)}` : ''}
- Date: ${new Date().toLocaleString()}

Message:
${submission.message}

---
This email was sent from the PEMAG Innovations contact form at pemaginnovations.org
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@pemaginnovations.org',
      to: 'contact@pemaginnovations.org',
      subject: `New Contact Form Submission - ${submission.firstName} ${submission.lastName}`,
      text: textContent,
      html: htmlContent,
      replyTo: submission.email, // Allow direct reply to the person who submitted
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully');
  } catch (error) {
    console.error('Failed to send contact notification email:', error);
    // Don't throw error - we still want to save to database even if email fails
  }
};

export const sendNewsletterNotification = async (subscription: InsertNewsletterSubscription) => {
  try {
    const transporter = createTransporter();
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="border-bottom: 3px solid #ff6b35; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">New Newsletter Subscription</h1>
            <p style="color: #666; margin: 5px 0 0 0;">PEMAG Innovations Website</p>
          </div>
          
          <div style="margin-bottom: 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 80px;">Email:</td>
                <td style="padding: 8px 0; color: #666;">
                  <a href="mailto:${subscription.email}" style="color: #1e3a8a; text-decoration: none;">${subscription.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Date:</td>
                <td style="padding: 8px 0; color: #666;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This email was sent from the PEMAG Innovations newsletter signup at 
              <a href="https://pemaginnovations.org" style="color: #1e3a8a;">pemaginnovations.org</a>
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@pemaginnovations.org',
      to: 'contact@pemaginnovations.org',
      subject: `New Newsletter Subscription - ${subscription.email}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log('Newsletter notification email sent successfully');
  } catch (error) {
    console.error('Failed to send newsletter notification email:', error);
    // Don't throw error - we still want to save to database even if email fails
  }
};