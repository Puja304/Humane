import { NextResponse } from "next/server";
import { getSetting, updateSetting } from "@/lib/db/settings";
import { ADMIN_SETTING_KEYS, AdminSettingKey } from "@/lib/constants/adminSettings";

// Type guard to verify a string is a valid AdminSettingKey
function isAdminSettingKey(key: string): key is AdminSettingKey {
  return ADMIN_SETTING_KEYS.includes(key as AdminSettingKey);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  // Validate key using the central constant
  if (!key || !isAdminSettingKey(key)) {
    return NextResponse.json({ error: "Invalid key" }, { status: 400 });
  }

  // Fetch from DB
  const setting = await getSetting(key);

  return NextResponse.json({ value: setting?.value ?? "" });
}

export async function POST(req: Request) {
  const { key, value } = await req.json();

  // Validate key using the central constant
  if (!isAdminSettingKey(key)) {
    return NextResponse.json({ error: "Invalid key" }, { status: 400 });
  }

  await updateSetting(key, value);

  return NextResponse.json({ success: true });
}
