const mongoose = require('mongoose')
const introSchema = new mongoose.Schema({
  welcomeText: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  caption: { type: String, required: true },
  description: { type: Array, required: true },
})

const aboutSchema = new mongoose.Schema({
  description1: { type: String, required: true },
  description2: { type: String, required: true },
  developer: {
    media: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return typeof value === 'string' && value.startsWith('http');
        },
        message: 'Developer media must be a URL (e.g., an image, video link, json, or svg)',
      },
    },
    mediaType: {
      type: String,
      enum: ['json', 'mp4', 'svg'],
      required: true,
    },
  },
  skills: [
    {
      media: {
        type: String,
        required: true,
        validate: {
          validator: function (value) {
            return typeof value === 'string' && value.startsWith('http');
          },
          message: 'Technology media must be a URL (e.g., an image, video link, json, or glb file)',
        },
      },
      mediaType: {
        type: String,
        enum: ['json', 'mp4', 'lottie_json', 'lottie_file', 'glb'],
        required: true,
      },
      name: { type: String, required: true },
    },
  ],
});




const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  copmany: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [{ 
    type: String, 
    required: true 
  }],
  link: {
    type: String,
    required: true,
  },
  technologies: { 
    type: [String], 
    required: true 
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  media: {
    type: String, 
    required: true,
  },
  mediaType: {
    type: String,
    required: true,
  },
});
// media: {
//   type: String, // Store media URLs as strings
//   required: true,
//   validate: {
//     validator: function (value) {
//       // Validate as URL format
//       return typeof value === 'string' && /^(http|https):\/\/[^ "]+$/.test(value);
//     },
//     message: 'Media must be a valid URL string.',
//   },
// },
// mediaType: {
//   type: String,
//   enum: ['json', 'mp4', 'glb', 'svg'],
//   required: true,
// },

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});


module.exports = {
  Intro: mongoose.model("intro", introSchema),
  About: mongoose.model("about", aboutSchema),
  Experience: mongoose.model("experience", experienceSchema),
  Project: mongoose.model("projects", projectSchema),
  Course: mongoose.model("courses", coursesSchema),
  Contact: mongoose.model("contacts", contactSchema),
};






