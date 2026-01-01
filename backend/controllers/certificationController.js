const certifications = require('../data/certifications');

exports.getCertifications = (req, res) => {
  res.json({
    success: true,
    count: certifications.length,
    data: certifications
  });
};
