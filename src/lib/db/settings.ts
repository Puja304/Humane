import "server-only";
import { connectDB } from "@/lib/db/mongodb";
import { AdminSetting } from "@/lib/db/models/AdminSettings";
import { ADMIN_SETTING_KEYS, AdminSettingKey } from "@/lib/constants/adminSettings";

const ALLOWED_KEYS = new Set(ADMIN_SETTING_KEYS);

export async function getSetting(key: AdminSettingKey) {
  if (!ALLOWED_KEYS.has(key)) {
    throw new Error("Invalid setting key");
  }

  await connectDB();

  return AdminSetting.findOne({ key }).lean();
}

export async function updateSetting(key: AdminSettingKey, value: string) {
  if (!ALLOWED_KEYS.has(key)) {
    throw new Error("Invalid setting key");
  }

  await connectDB();

  return AdminSetting.findOneAndUpdate(
    { key },
    { value },
    { upsert: true, new: true }
  );
}
