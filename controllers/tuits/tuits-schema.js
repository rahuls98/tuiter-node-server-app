import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
        topic: String,
        username: String,
        title: String,
        time: String,
        image: String,
        liked: Boolean,
        replies: Number,
        retuits: Number,
        likes: Number,
        handle: String,
        tuit: String,
        dislikes: Number,
        disliked: Boolean,
    },
    { collection: "tuits" }
);
export default schema;
