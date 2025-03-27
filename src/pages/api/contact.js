import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    // Get form data from request
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'All fields are required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // In a production environment, you would set up a real email service
    // For development, we're using a test account with ethereal.email

    // Create a test account on ethereal.email
    // Note: In production, you would use your own SMTP credentials
    // const testAccount = await nodemailer.createTestAccount();

    // Configure transport
    const transporter = nodemailer.createTransport({
      host: import.meta.env.EMAIL_HOST || 'smtp.ethereal.email',
      port: parseInt(import.meta.env.EMAIL_PORT || '587'),
      secure: import.meta.env.EMAIL_SECURE === 'true',
      auth: {
        user: import.meta.env.EMAIL_USER, // || testAccount.user,
        pass: import.meta.env.EMAIL_PASS, // || testAccount.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: import.meta.env.EMAIL_TO || 'recipient@example.com',
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // In development, log email details instead of sending
    if (import.meta.env.DEV) {
      console.log('Email details:', {
        to: mailOptions.to,
        subject: mailOptions.subject,
        text: mailOptions.text,
      });

      // Return success for development environment
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Message received (development mode)',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Send email in production
    try {
      const info = await transporter.sendMail(mailOptions);

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Message sent successfully',
          // Include messageId for debugging
          messageId: info.messageId,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);

      return new Response(
        JSON.stringify({
          success: false,
          message: 'Failed to send email',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  } catch (error) {
    console.error('API Error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
