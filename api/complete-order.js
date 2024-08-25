// api/complete-order.js

import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://utgmmvofnginuwvzajig.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0Z21tdm9mbmdpbnV3dnphamlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5NTczMzksImV4cCI6MjAzNzUzMzMzOX0.YWH5Ceiz0OI_h8M6wG1M2UsDXM_43i5UdopmYLGO7aE');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { orderId } = req.body;
    if (!orderId) {
        return res.status(400).json({ message: 'Order ID is required' });
    }

    // Notify user (this could be via email, SMS, or a custom notification system)
    console.log(`Order ${orderId} is completed.`);

    return res.status(200).json({ message: 'Notification sent' });
}
