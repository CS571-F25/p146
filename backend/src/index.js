import express from 'express';
import { applyRateLimiting, applyLooseCORSPolicy, applyBodyParsing, applyLogging, applyErrorCatching } from './api-middleware.js';
import { initializeDatabase, addUser, verifyUser } from './database.js';

const app = express();
const PORT = 53707; 

await initializeDatabase();

// apply middleware in correct order
applyLooseCORSPolicy(app);
applyRateLimiting(app);
applyBodyParsing(app);
applyLogging(app);

// test endpoint
app.get('/api/hello-world', (req, res) => {
    res.status(200).send({
        msg: "Authentication API is running! :)"
    });
});

// register endpoint
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    
    // validation
    if (!username || !password) {
        return res.status(400).send({ 
            msg: 'Username and password are required' 
        });
    }
    
    try {
        const user = await addUser(username, password);
        res.status(201).send({ 
            msg: 'User created successfully', 
            user: { id: user.id, username: user.username }
        });
    } catch (err) {
        if (err.message.includes('UNIQUE')) {
            return res.status(409).send({ 
                msg: 'Username already exists' 
            });
        }
        console.error(err);
        res.status(500).send({ 
            msg: 'Something went wrong!' 
        });
    }
});

// login endpoint
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).send({ 
            msg: 'Username and password are required' 
        });
    }
    
    try {
        const user = await verifyUser(username, password);
        if (!user) {
            return res.status(401).send({ 
                msg: 'Invalid credentials' 
            });
        }
        res.status(200).send({ 
            msg: 'Login successful', 
            username: user.username 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ 
            msg: 'Something went wrong!' 
        });
    }
});

// logout endpoint
app.post('/api/logout', (req, res) => {
    res.status(200).send({ 
        msg: 'Logged out successfully' 
    });
});

applyErrorCatching(app);

// start server
app.listen(PORT, () => {
    console.log(`Authentication API opened on :${PORT}`);
});