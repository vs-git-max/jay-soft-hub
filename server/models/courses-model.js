const { default: mongoose } = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tutor",
      required: true,
    },
    category: {
      enum: ["web design", "web development", "graphics design", "CAD"],
    },
    rating: {
      type: Number,
      default: 0,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model.Course || mongoose.model("Course", coursesSchema);

export default Course;
