import express from 'express';
import { Costume } from '../models/costumeModel.js';

const router = express.Router();

// Route for Save a new Costume
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.dance ||
            !request.body.color ||
            !request.body.location ||
            !request.body.quantity
        ) {
            return response.status(400).send({
                message: 'Send all required fields: dance, color, location, quantity',
            });
        }
        const newCostume = {
            dance: request.body.title,
            color: request.body.color,
            location: request.body.location,
            quantity: request.body.quantity,
        };

        const costume = await Costume.create(newCostume);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All costumes from database
router.get('/', async (request, response) => {
    try {
        const costumes = await Costume.find({});

        return response.status(200).json({
            dance: costumes.length,
            data: costumes
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get one costume from database
router.get('/:id', async (request, response) => {
    try {
        const { id } = request = request.params;

        const costumes = await Costume.findById(id);

        return response.status(200).json({
            dance: costumes.length,
            data: costumes
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Update a Costume
router.put('/:id', async (request, response) => {
    try{
        if (!request.body.dance ||
            !request.body.color ||
            !request.body.location ||
            !request.body.quantity
        ) {
            return response.status(400).send({
                message: 'Send all required fields: dance, color, location, quantity',
            });
        }

        const { id } = request.params;

        const result = await Costume.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Costume not found' });
        }

        return response.status(200).send({ message: 'Costume updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a Costume
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Costume not found' });
        }

        return response.status(200).send({ message: 'Costume deleted successfully'});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;