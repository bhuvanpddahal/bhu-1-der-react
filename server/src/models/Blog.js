import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: {
        type: [{
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            username: { type: String, required: true },
            comment: { type: String, required: true },
            replies: {
                type: [{
                    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
                    username: { type: String, required: true },
                    reply: { type: String, required: true }
                }],
                default: []
            }
        }],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;