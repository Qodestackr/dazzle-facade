export function getAbsoluteFilePath(displayName: string) {
  const path = "/src/core/components/toggle/Toggle.tsx"; // Replace with the actual path of the current file

  // Concatenate the file path and the imported component's displayName
  return `${path} :: ${displayName}`;
}

// Usage example:
getAbsoluteFilePath("");
