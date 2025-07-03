import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Resource from './models/ResourceModel.js';
import User from './models/UserModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL);
  
  // Use the demo user email from Login.jsx
  const user = await User.findOne({ email: 'test@test.com' });
  
  if (!user) {
    console.log('Demo user not found. Please make sure test@test.com user exists.');
    process.exit(1);
  }
  
  const jsonResources = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url))
  );
  
  const resources = jsonResources.map((resource) => {
    return { ...resource, createdBy: user._id };
  });
  
  // Delete existing resources for this user
  await Resource.deleteMany({ createdBy: user._id });
  
  // Create new mock resources
  await Resource.create(resources);
  
  console.log(`Successfully created ${resources.length} mock resources for user: ${user.email}`);
  process.exit(0);
} catch (error) {
  console.log('Error populating data:', error);
  process.exit(1);
}
