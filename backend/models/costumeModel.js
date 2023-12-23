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
            type: int,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const Costume = mongoose.model('Cpstume', { name: String });