import { Router } from 'express';


// USER SCHEMA FROM MODELS
import User from '../models/users.js'

// PROFILE SCHEMA FROM MODELS
import Profile from '../models/profiles.js'

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


//POST - CREATE USER
router.post('/', async (req, res) => {
    try {
        const create_User = await User.create(req.body);

        // CREATES PROFILE
        await Profile.create({ user_id: create_User._id })

        res.status(201).json(create_User)
        
    } catch (error) {
        console.log(error);
        
    }
} )


// PUT - UPDATE BY ID
router.put('/:id', async(req, res) => {
    try {

        const { id } = req.params;
        const { body } = req;
        
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