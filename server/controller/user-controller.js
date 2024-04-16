import user from '../models/user-schema.js'

export const userSignUp = async (request, response) => {
    try {
        
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}