import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    }
})

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
