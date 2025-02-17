import mongoose from "mongoose";
import { Schema } from "mongoose";
const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
