const router = require('express').Router();
const { addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller')

router.route('/:userId').post(addThought);
router.route('/:userId').delete(removeThought);
router.route('/:userId/:thoughtId').post(addReaction);
router.route('/:userId/:thoughtId').delete(removeReaction);

module.exports = router;