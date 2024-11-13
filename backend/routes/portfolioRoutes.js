const router=require('express').Router();
const { Intro,About,Experience,Project,Course,Contact}=require('../models/portfolioModel')

router.get('/get-portfolio-data',async(req,res)=>{
    const intro=await Intro.find();
    const about=await About.find();
    const experience=await Experience.find();
    const project=await Project.find();
    const course=await Course.find();
    const contact=await Contact.find();
    res.status(200).json({intro,about,experience,project,course,contact})
})