import {model, Schema} from 'mongoose';

const PersonSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required!"],
            minlength: [2, "Name must be at least 2 characters long!"],
            maxlength: [255, "Name cannot be more than 255 characters long!"]
        },
        age: {
            type: Number,
            required: [true, "Age is required!"],
            min: [1, "Age must be at least 1 year old!"]
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
const Person = model("Person", PersonSchema);
export default Person;