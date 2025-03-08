const twilio = require('twilio');

const sendSMS = async (phoneNumber, message) => {
    try {
      const client = require('twilio')(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );
  
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
      const messageSent = await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+233${cleanedPhoneNumber.slice(1)}`,
      });
  
      return { success: true, messageSid: messageSent.sid, status: messageSent.status };
    } catch (error) {
      console.error('SMS Sending Error:', error);
  
      if (error.code === 21608) {
        return {
          success: false,
          error: 'Your Twilio trial account cannot send messages to unverified numbers. Please verify the number or upgrade your Twilio account.',
        };
      }
  
      return { success: false, error: error.message };
    }
  };
  
  module.exports = { sendSMS };
  
module.exports = { sendSMS };