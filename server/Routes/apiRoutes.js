const router = require("express").Router();
const user = require('../Controllers/User');
const Notes = require('../Controllers/Notes');

//user APIs
router.post("/Register",user.UserRegistration);
router.post("/Login",user.Login);


//
router.post('/AddNotes',Notes.AddNotes);
router.delete('/DeleteNote/:NoteId',Notes.DeleteNote);
router.get('/GetAllNotes/:UserId',Notes.GetAllNotes);
router.get('/GetSpecificNote/:UserId/:NoteId',Notes.GetSpecificNote);
router.patch('/UpdateNote',Notes.UpdateNote);

module.exports = router;
