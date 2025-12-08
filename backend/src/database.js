import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

let db;

export async function initializeDatabase() {
    db = await open({
        filename: './users.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created TIMESTAMP NOT NULL
        )
    `);

    console.log('Users database ready');
}

export async function addUser(username, password) {
    const hash = await bcrypt.hash(password, 10);
    const result = await db.run(
        'INSERT INTO users (username, password, created) VALUES (?, ?, ?)',
        [username, hash, new Date()]
    );
    return { id: result.lastID, username };
}

export async function findUser(username) {
    return await db.get(
        'SELECT * FROM users WHERE username = ?',
        [username]
    );
}

export async function verifyUser(username, password) {
    const user = await findUser(username);
    if (!user) return false;
    
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : false;
}