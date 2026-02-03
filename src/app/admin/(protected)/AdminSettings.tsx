"use client";

import { use, useEffect, useState } from "react";


type AdminSettingProps = {
  label: string;
  settingKey: string;
  type?: "text" | "number" | "boolean";
  min?: number;
  max?: number;
};

export default function AdminSettings({
    label,
    settingKey,
    type = "text",
    min,
    max
}: AdminSettingProps) {
    const [value, setValue] = useState<any>("");
    const [originalValue, setOriginalValue] = useState<any>("");
    const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

    useEffect(() => {
        fetch(`/api/admin/settings?key=${settingKey}`)
        .then(res => res.json())
        .then(data => {
            setValue(data.value ?? "");
            setOriginalValue(data.value ?? "");
        });
        
    }, [settingKey]);

    const changed = value !== originalValue;

    async function handleSave() {
        if (!changed) return;

        setStatus("saving");


        const res = await fetch("/api/admin/settings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: settingKey, value }),
        });

        if (res.ok) {
            setOriginalValue(value);
            setStatus("saved");
        } else{
            setStatus("error")
        }
    }

    return (
        <div className="flex items-center gap-4 my-3">
            <label className="w-48 font-medium">{label}</label>

            {type === "boolean" ? (
                <input
                type="checkbox"
                checked={Boolean(value)}
                onChange={e => setValue(e.target.checked)}
                />
            ) : (
                <input
                type={type}
                value={value}
                min={min}
                max={max}
                onChange={e => setValue(e.target.value)}
                className="border px-2 py-1"
                />
            )}

            <button
                onClick={handleSave}
                disabled={!changed || status === "saving"}
                className="border px-3 py-1"
            >
                Update
            </button>

            {status === "saved" && <span className="text-green-600">Saved</span>}
            {status === "error" && <span className="text-red-600">Error</span>}
        </div>
    )
}

// random comment