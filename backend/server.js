import './loadEnv.js'
import { conn } from './db/conn.js'; conn();
import express from 'express'; 
import morgan from 'morgan';
import bcrypt from 'bcrypt';

// user passport to look for email
import userPassport from './models/users.js';

// Import Passport - manages Auth
import passport  from 'passport';
import LocalStrategy from 'passport-local'

// cookieSession 
import cookieSession from 'cookie-session';



const app = express();
const PORT = process.env.PORT || 4000;


// Secret code from .env for cookie session
const  SECRETNOW = process.env.SECRETN;
const  SECRETOLD = process.env.SECRETO;

// cookie to help (passport)
app.use(cookieSession({
    name:'comedy-Auth',
    keys:[ SECRETNOW, SECRETOLD ],
    maxAge: 60 * 60 *24
}))

import userRouters from './routes/users.js'
import profileRouter from './routes/profiles.js'

//Use Passport
app.use(passport.initialize());
app.use(passport.session());

// serializes User
passport.serializeUser((user, done) => {
    console.log(`6767676767 Seralized user: ${JSON.stringify(user)}`)
    return done( null, user.id );
})

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }))

app.use('/api/users', userRouters);
app.use('/api/profiles', profileRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the API')
})






// Logic for passport
passport.use('local', new LocalStrategy({passReqToCallback: true},

    // username will be refering to the email we're verifying
    async (res, username, password, done) => {

        try {


            console.log( `1 -Local Strategy ${ JSON.stringify(username) }` );
        //finds email in db
        const email = await userPassport.findOne({username})
        
        if(!email) {
            return done(null, false)
        }
        const result = await new Promise ((resolve, reject) => {
            bcrypt.compare(password, email.password , (err, res) => {
                if(err) reject(err);
                resolve(res)

            } )

        console.log(`result : ${result}`);
        console.log(`user from db ${JSON.stringify(email)}`);
        return done(null, { id: "test" })
        }
        )
            
        } catch (error) {
            console.log(error);
            
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

