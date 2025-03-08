const validatePhoneMiddleware = (req, res, next) => {
    const { phoneNumber } = req.body;
  
    // Remove all non-digit characters
    const cleanedPhone = phoneNumber.replace(/\D/g, '');
  
    // Validate phone number
    const validPrefixes = ['020', '024', '050', '054', '055', '059', '053'];
  
    if (
      cleanedPhone.length !== 10 ||
      !validPrefixes.includes(cleanedPhone.slice(0, 3))
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number format. Must be 10 digits with valid prefix.'
      });
    }
  
    next();
  };
  
  module.exports = {
    validatePhoneMiddleware
  };