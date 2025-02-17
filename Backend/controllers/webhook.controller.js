import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!");
  }

  const payload = JSON.stringify(req.body);
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    return res.status(400).json({
      message: "Webhook verification failed!",
    });
  }

  try {
    const { id, username, email_addresses, profile_image_url } = evt.data;
    const email =
      email_addresses && email_addresses[0]
        ? email_addresses[0].email_address
        : null;

    if (evt.type === "user.created" || evt.type === "user.updated") {
      if (email) {
        await User.findOneAndUpdate(
          { clerkUserId: id },
          {
            username: username || email,
            email: email,
            img: profile_image_url,
          },
          { new: true, upsert: true } // Create user if not found
        );
      }
    }

    if (evt.type === "user.deleted") {
      const deletedUser = await User.findOneAndDelete({ clerkUserId: id });

      if (deletedUser) {
        await Post.deleteMany({ user: deletedUser._id });
        await Comment.deleteMany({ user: deletedUser._id });
      }
    }

    return res.status(200).json({
      message: "Webhook received",
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({
        message: "Duplicate key error",
      });
    }
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
