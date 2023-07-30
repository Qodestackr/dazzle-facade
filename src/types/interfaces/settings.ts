type backupOptions = "midnight" | "weekly" | "monthly" | "custom";

export interface ISettings {
  // theme
  backupOptions: backupOptions;
}
