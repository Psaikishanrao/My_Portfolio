const express=require('express')
const app=express()
const cors = require('cors'); 
const connection=require("./config/db")
require('dotenv').config();
const portfolioRoutes=require('./routes/portfolioRoutes');
// const {saveCoursesData} =require('./temp');
const { Intro,About,Experience,Project,Course,Contact}=require('./models/portfolioModel')
app.use(cors());
connection();
const port=process.env.PORT








app.get('/api/about', async (req, res) => {
    try {
      const aboutData = await About.findOne(); 
      if (aboutData) {
        res.json(aboutData);
      } else {
        res.status(404).json({ message: 'About data not found' });
      }
    } catch (error) {
      console.error('Error fetching About data:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  app.get('/api/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  app.get('/api/intro', async (req, res) => {
    try {
      const introData = await Intro.findOne(); 
      if (introData) {
        res.json(introData);
      } else {
        res.status(404).json({ message: 'Intro data not found' });
      }
    } catch (error) {
      console.error('Error fetching Intro data:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  



app.listen(port,()=>{
    console.log(`server running on ${port}`)
})