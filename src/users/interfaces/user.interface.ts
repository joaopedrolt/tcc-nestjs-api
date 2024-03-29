import { Document } from "mongoose";

export interface User extends Document {
    _id: string;
    role: string;
    name: string;
    user: string;
    password: string;
}