import { Router } from 'express';

// PROFILE SCHEMA FROM MODELS
import Profiles from '../models/profiles.js'

const router = new Router(); 


// GET ALL PROFILES
router.get('/', async ( req, res ) => {
    const profiles = await Profiles.find({}).populate({path:'user_id'});
    res.json(profiles)

})

//GET PROFILE BY ID
router.get('/:id', async (req, res) => {
    const profile_id = await Profiles.findById(req.params.id);
    
    if(!profile_id) return res.status(404).json({ msg: 'Profile Not Found' })
    else res.status(200).json(profile_id)
})

export default router;