import './loadEnv.js'
import { conn } from './db/conn.js'; conn();
import express from 'express'; 
import morgan from 'morgan';
import session from 'express-session';
import bcrypt, { hash } from 'bcrypt';
import cors from 'cors'
import cookieParser from 'cookie-parser';
// const SECRETN = process.env.SECRETN;
// const SECRETO = process.env.SECRETO;

// import verifyToken from './token/verifyToken.js';
// import jwt from 'jsonwebtoken';

// user passport to look for email
import userPassport from './models/users.js';

// Import Passport - manages Auth

import passport from 'passport';

import LocalStrategy from 'passport-local'

import userRouters from './routes/users.js'
import profileRouter from './routes/profiles.js'

const app = express();
const PORT = process.env.PORT || 4000;


// expression-session
app.use(session ({
    name: "Auth-Sesh", 
    secret: "Comedy",
    resave: false,
    saveUninitialized: false,
    cookie: {secure: 'auto'}
}))

app.use(cookieParser());

//Use Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cors("https://comedytube.netlify.app"))


// serializes User
passport.serializeUser((user, done) => {
    console.log(`Seralized user =>: ${JSON.stringify(user)}`)
    try{
        return done( null, user._id);
    } catch(err) {
            console.log(err);
    }
})

// Deserializes user
passport.deserializeUser(function(id, done){
    console.log(`Deseralized user =>: ${JSON.stringify(id)}`)
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



app.use('/api/users', userRouters);
app.use('/api/profiles', profileRouter);

// app.get('/', verifyToken,  (req, res) => {
//     res.send('Welcome to the API')
// })


app.get('/signedout', (req, res) => {
    res.send('Logged Out of the API')
})



// Logic for passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true
}, 
 async function (email, password, done){
    console.log(` USER=> ${email}, PASSWORD=>${password}` );

    const user = await userPassport.findOne({ email })
    console.log(` EMAIL => ${ user }`);
    
    if(!user){
        return done(null, false)
    } 

    
    const result = await new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) =>{
            if(err) reject(err);
            resolve(res)
        } )
    })
    // const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: "24h" }) //<==token 

    console.log(`RESULT ${ result}`);
    if(result){
        return done(null, user)
    } else {
        return done(' Password or email is incorrect', null)
    }

}
))
            



app.all('*', (req, res) =>{
// CATCH ALL ROUTE
    try {
        res.status(404).send('404 this page missing')
        console.log(`ERROR: ${ req }`);

    } catch (error) {
        console.log(error);      
    }
})


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})

