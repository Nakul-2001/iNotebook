const router = require('express').Router();
const Notes = require('../Models/Notes');
const verifyToken = require('./verifyToken');


//get all notes.
router.get('/all',verifyToken,async (req,res)=>{
    try{
        const allNotes = await Notes.find({user:req.user.user._id});
        await res.json(allNotes);
    }
    catch(err){
        res.json(err);
    }
    
})


//add new notes.
router.post('/add',verifyToken,async (req,res)=>{
    console.log(req.body,req.user);
    try{
        const newNote = await Notes.create({
            user:req.user.user._id,
            title:req.body.title,
            description:req.body.description,
            tag:req.body.tag
        })
        
        const savedNote = await newNote.save();
        res.json(savedNote);
    }
    catch(err){
        res.json(err);
    }

});


//update note.
router.put('/update/:id', verifyToken , async (req,res)=>{

    try{
        let currNote = await Notes.findOne({_id:req.params.id});
        !currNote && res.json("Note doesn't exist");
        currNote.user.toString() !== req.user.id && res.json("You are not allowed to do that");
        
        const newNote = {};
        if(req.body.title) newNote.title = req.body.title;
        if(req.body.description) newNote.description = req.body.description;
        if(req.body.tag) newNote.tag = req.body.tag;

        currNote = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
        res.json(currNote);
    }
    catch(err){
        res.json(err);
    }

})

//delete notes.
router.delete('/delete/:id',verifyToken,async (req,res)=>{
    console.log(req.user);
    try{
        const currNote = await Notes.findOne({_id:req.params.id});
        !currNote && res.json("Note doesn't exist");
        req.user.user._id !== currNote.user.toString() && res.json("You are not allowed to do this.");

        await Notes.findByIdAndDelete(req.params.id);
        res.json("Note has been deleted.");
    }
    catch(err){
        res.json(err);
    }

})


module.exports = router;
