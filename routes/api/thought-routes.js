const router = require('express').Router();
const { addThought, removeThought } = require('../../controllers/thought-controller')

// /api/Thoughts/<pizzaId>
router.route('/:userId').post(addThought);

// /api/Thoughts/<pizzaId>/<ThoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;