import mongoose from "mongoose";

const costumeSchema = mongoose.Schema(
    {
        dance: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Costume = mongoose.model('Costume', { name: String });