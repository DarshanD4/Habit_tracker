import { Models } from "react-native-appwrite";

export interface Habit extends Models.Document{
    userid: string;
    title: string;
    description: string;
    frequency:string;
    streakcount:number;
    last_completed:string;
    created_at:string;
}