import mongoose from "mongoose";
import { Schema } from "mongoose";
const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    img: {
      type: String,
    },
    category: {
      type: String,
      defauly: "general",
    },
    title: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
      require: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
