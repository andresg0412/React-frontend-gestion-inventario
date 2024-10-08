import jwt from 'jsonwebtoken';

const SECRET_KEY = 'mysecretkey';

export const signToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username}, SECRET_KEY);
};


export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};