"use client"
import { quicksand } from "@/fonts";
import AdminSettings from "@/app/admin/(protected)/AdminSettings"

export default function Admin() {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className={`${quicksand.className} font-bold mb-20`}>Admin Information Management System</h1>

            <div className="general-settings flex flex-col font-bold">
                <h3>General Settings</h3>
                <AdminSettings label="Donation Count" settingKey="donationCount" type="number" min={0} max={100000}/>
                <AdminSettings label="Opening Hour" settingKey="openingHour" type="number" min={1} max={12}/>
                <AdminSettings label="Closing Hour" settingKey="closingHour" type="number" min={1} max={12}/>

            </div>
        </div>
    );
};