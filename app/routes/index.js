let express = require("express");

const chatPdfController = require('../controllers/chatPdf.controller.js');

const router = express.Router();

router.route('/pdf-chat').post(chatPdfController.getPdfChat);

module.exports = router;