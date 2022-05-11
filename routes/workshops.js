// Handles /api/workshops/*
const router = require( 'express' ).Router();
const workshopsCtrl = require( '../controllers/workshops' );
const Model = require('../models/Workshop');

router.get( '/', workshopsCtrl.getWorkshops );

router.post('/post', async (req, res) => {
    console.log("Request",req.body);
    const data = new Model({
        what: req.body.what,
        who: req.body.who,
        when: req.body.when,
        cost: req.body.cost,
        included: req.body.included,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.what} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})



module.exports = router;