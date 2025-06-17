import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    courses: {
      type: Array,
    },
    role: {
      type: String,
      enum: ["student", "tutor"],
      default: "student",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.username) {
    const baseName = this.name.trim().toLowerCase().replace(/\s+/g, "");
    const randomInt = Math.floor(1000 + Math.random() * 9000);
    this.username = `${baseName}_${randomInt}`;

    //checking it the username is already taken
    const existingUsername = await this.constructor.findOne({
      username: this.username,
    });
    if (existingUsername) {
      this.username = `${base}_${Math.floor(
        this.length + 1000 + Math.random() * 9000
      )}`;
    }
  }
  next();
});

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

const User = mongoose.model.User || mongoose.model("User", userSchema);

export default User;
