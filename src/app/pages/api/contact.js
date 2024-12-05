import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('Request received:', req.body); // Log request body for debugging
        const { email, subject, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: email,
                to: process.env.RECEIVER_EMAIL,
                subject: subject || 'No Subject',
                text: message,
            });

            console.log('Email sent successfully');
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
