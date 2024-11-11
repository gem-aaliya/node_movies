const express=require('express');
const router=express.Router();
router.route('/')
.get(getAllMovies)
.post(addMovies)

router.route('/:id')
.get(getAllMovies)
.post(addMovies)

module.exports=router;
