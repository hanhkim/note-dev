var loginController = require('../controllers/loginController');
var groupController = require('../controllers/group.controller');
var noteController = require ("../controllers/note.controller");

let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// login routes
router.route('/login')
    .post(loginController.findOne);

router.route('/user') // thao tac cua user hoac admin
    .post(loginController.add)
    // .get(loginController.findAll)
    // .put(loginController.edit)
    // .delete(loginController.delete)

router.route('/group')
    .post(groupController.add)
    .get(groupController.loadAll)
    .put(groupController.update)
    .delete(groupController.delete)

router.route('/note')
    .post(noteController.add) // just id group
    .put(noteController.update) // have id note
    .delete(noteController.delete) // have id note

router.route('/note/:idGroup/:id')
    .get(noteController.loadNote)

router.route('/note/:idGroup')
    .get(noteController.loadAllNote) // load all note in group

module.exports = router;

