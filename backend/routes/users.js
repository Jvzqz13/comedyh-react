import { Router } from 'express';

// USER SCHEMA FROM MODELS
import User from '../models/users.js'

// PROFILE SCHEMA FROM MODELS
import Profile from '../models/profiles.js'

import bcryt from 'bcrypt';

import passport from 'passport';


const router = new Router();

// GET - ALL USERS
router.get('/', async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
})


// GET - USER BY ID
router.get('/:id', async( req, res) => {

    try {
        const user_id = await User.findById(req.params.id)
 
        if(!user_id) return res.status(404).json({msg: "User Not Found"})
        else res.status(200).json(user_id)
    } catch (error) {
        console.log(error);        
    }
})

//GET - USER BY USERNAME
router.get('/username/:username', async (req, res) => {
    try {
        const username = await User.find({username: req.params.username})

        if(!username) return res.status(404).json({msg: "Username Not Found"})
        else res.status(200).json(username)
        
    } catch (error) {
        console.log(error);
        
    }
})


//POST - CREATE USER / REGISTER
router.post('/register', async (req, res) => {
    try {

        const { email } = req.body;

        let create_User = await User.findOne({ email })
        if(create_User) return res.status(400).send("User already registered")
        

        create_User = await User.create(req.body);

        // CREATES PROFILE
        await Profile.create({ user_id: create_User._id })

        res.status(201).json(create_User)
        
    } catch (error) {
        console.log(error);
        
    }
} )






// POST - SIGN IN
router.post('/signin',
passport.authenticate('local', { failureRedirect:'/signin'}),
function(req, res){
        console.log(`1 - Login Handler ${JSON.stringify(req.body)}`);
        res.redirect('/')
    }
)





//POST - LOG OUT
router.post('/logout', async (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/signedout')
    })
})






// PUT - UPDATE BY ID
router.put('/:id', async(req, res) => {
    try {

        const { id } = req.params;
        const { body } = req;
        const { password } = req.body;

        const hashedPassword = await bcryt.hash(password, 10);
        req.body.password = hashedPassword;

        const update_user = await User.findByIdAndUpdate( id, body, {new: true});
        res.json({update_user})
        
    } catch (error) {
        console.log(error);
        
    }
})

// DELETE BY ID
router.delete('/:id', async(req, res) => {
    try {

        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        res.json ({ msg: 'User Deleted'  })
        
    } catch (error) {
        console.log(error);
        
    }
})







export default router;