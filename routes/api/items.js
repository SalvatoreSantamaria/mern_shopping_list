const express = require('express');
const router = express.Router();

// Item Model to make queries
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1 })
    .then(items => res.json(items))
});

module.exports = router;