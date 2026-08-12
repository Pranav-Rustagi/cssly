// Shared between the blocking init script in app/layout.tsx (interpolated
// into an inline string, since it can't import) and the theme toggle.
export const THEME_COLOR_META_ID = "theme-color-meta";
export const THEME_COLORS = { light: "#FFFFFF", dark: "#000000" } as const;
