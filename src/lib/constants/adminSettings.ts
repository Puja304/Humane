export const ADMIN_SETTING_KEYS = [
  "donationCount",
  "openingHour",
  "closingHour",
] as const;

export type AdminSettingKey = (typeof ADMIN_SETTING_KEYS)[number];
