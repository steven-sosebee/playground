const { Schema } = require("mongoose");
const{skillSchema}=require("./skills");
const jobSchema = new Schema({
  jobName: {
    type: String,
    trim: true,
  },
  jobDescription: {
    type: String,
    trim: true,
  },
  jobAchievements:{
    type:[String],
    trim:true,
  },
jobStartDate:{
    type:String,
    trim:true,
},

jobEndDate:{
    type:String,
    trim:true,
},
jobSkills:{
    type: [skillSchema]},

});

module.export = {skillSchema};
