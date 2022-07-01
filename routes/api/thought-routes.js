const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

router.route('/:userId').post(createThought);
router.route('/:userId').delete(deleteThought);
router.route('/:userId/:thoughtId').post(createReaction);
router.route('/:userId/:thoughtId').delete(deleteReaction);

module.exports = router;