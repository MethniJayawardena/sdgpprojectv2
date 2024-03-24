// Import necessary modules and functions for testing
import { register, login } from '../controllers/authController.js';
import User from '../models/User.js'; // Assuming you have a User model

// Mock User.findOne method for testing purposes
jest.mock('../models/User.js', () => ({
  findOne: jest.fn(),
}));

describe('Authentication Controller', () => {
  // Test case for the register function
  describe('register', () => {
    it('should return status 400 if username is already taken', async () => {
      // Mock User.findOne to return a user with existing username
      User.findOne.mockResolvedValueOnce({ username: 'existingUsername' });

      const req = { body: { username: 'existingUsername' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Username already taken' });
    });

    it('should return status 400 if email is already taken', async () => {
      // Mock User.findOne to return a user with existing email
      User.findOne.mockResolvedValueOnce({ email: 'existingEmail@example.com' });

      const req = { body: { email: 'existingEmail@example.com' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Email already taken' });
    });

    // Add more test cases for register function as needed
  });

  // Test case for the login function
  describe('login', () => {
    it('should return status 404 if user is not found', async () => {
      // Mock User.findOne to return null (user not found)
      User.findOne.mockResolvedValueOnce(null);

      const req = { body: { email: 'nonexistent@example.com' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ success: false, message: 'User not found' });
    });

    it('should return status 401 if password is incorrect', async () => {
      // Mock User.findOne to return a user with correct email but incorrect password
      User.findOne.mockResolvedValueOnce({ email: 'existingEmail@example.com', password: 'hashedPassword' });
      // Mock bcrypt.compare to return false (incorrect password)
      bcrypt.compare.mockResolvedValueOnce(false);

      const req = { body: { email: 'existingEmail@example.com', password: 'incorrectPassword' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Incorrect email or password. Please Try Again!' });
    });

    // Add more test cases for login function as needed
  });
});
