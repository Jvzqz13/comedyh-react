import './loadEnv.js'
import { conn } from './db/conn.js'; conn();
import express from 'express'; 
import morgan from 'morgan';
import session from 'express-session';
import bcrypt from 'bcrypt';

// user passport to look for email
import userPassport from './models/users.js';

// Import Passport - manages Auth

import passport from 'passport';

import LocalStrategy from 'passport-local'


const app = express();
const PORT = process.env.PORT || 4000;

// expression-session
app.use(session ({ 
    secret: 'SECRETNOW',
    resave: false,
    saveUninitialized: false,
 }))

 //Use Passport
 app.use(passport.initialize());
 app.use(passport.session());



// serializes User
passport.serializeUser((user, done) => {
    console.log(` ====> Seralized user: ${JSON.stringify(user)}`)
    try{

        return done( null, user.id );
    } catch(err) {
            console.log(err);
    }
})

// Deserializes user
passport.deserializeUser(function(id, done){
    console.log(` ====> DESeralized user: ${JSON.stringify(id)}`)
    try {
            const user = userPassport.findById(id);
            done(null, user)
    } catch (err) {
        console.log(err);
    }

})

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }))

import userRouters from './routes/users.js'
import profileRouter from './routes/profiles.js'
import { parse } from 'dotenv';

app.use('/api/users', userRouters);
app.use('/api/profiles', profileRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API')
})



// Logic for passport
passport.use('local' , new LocalStrategy({passReqToCallback: true},

    async  function( req, username, password, done){
        console.log(`2 ====> ${JSON.stringify(req.body)}` );
             
        const { email  } = req.body;
        
        const userEmail = await userPassport.findOne({email: email})
        console.log(userEmail);

        if(!userEmail){
            return done(null, false)
        }
        const result = await bcrypt.compare(password, userEmail.password)

        if(result){
            done(null, userEmail)
        } else {
            return done('Password or email is incorrect', null)
        }
    }
))
            



app.all('*', async (req, res) =>{
// CATCH ALL ROUTE
    try {
        res.send('404 this page missing')
        
    } catch (error) {
        console.log(error);      
    }
})


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})

