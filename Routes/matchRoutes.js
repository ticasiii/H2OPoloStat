const express = require('express');
const { addMatch, getAllMatches, removeMatch,  updateMatches } = require('../Controllers/matchController');
const router = express.Router();

router.post('/addMatch', addMatch);
router.get('/getAllMatches', getAllMatches);
router.delete('/removeMatch/:id', removeMatch);
router.put('/updateMatches/:id', updateMatches);

module.exports = router;
