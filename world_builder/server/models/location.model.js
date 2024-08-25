import {model, Schema} from 'mongoose';

const LocationSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title cannot be more than 255 characters long!"]
        },
        history: {
            type: String,
            maxlength: [255, "History cannot be more than 255 characters long!"]
        },
        description: {
            type: String,
            maxlength: [255, "Description cannot be more than 255 characters."]
        },
        relationships: {
            type: String, 
            maxlength: [255, "Relationships cannot be more than 255 characters."]
        }
    },
    { timestamps: true }
);
const Location = model("Location", LocationSchema);
export default Location;