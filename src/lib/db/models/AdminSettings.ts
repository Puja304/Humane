import mongoose, {Schema, models, model} from "mongoose";
import { unique } from "next/dist/build/utils";

const AdminSettingsSchema = new Schema (
    {
        key: {
            type: String,
            required: true,
            unique: true
        },
        
        value: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

export const AdminSetting = models.AdminSetting || model("AdminSetting", AdminSettingsSchema)
