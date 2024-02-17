import { Router } from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost)
router.post('/add', addPost);
router.put('/update/:id', updatePost)
router.get('/delete/:id', deletePost)

export default router