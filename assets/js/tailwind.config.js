/* Tailwind CDN configuration for Verdant Office.
   Loaded after the Tailwind CDN script in index.html. */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-error-container": "#93000a",
        "surface-container": "#efeeea",
        "on-secondary-container": "#59665b",
        "surface-container-lowest": "#ffffff",
        "surface-bright": "#fbf9f5",
        "tertiary-fixed": "#ffdbc9",
        "surface-variant": "#e4e2de",
        "on-secondary-fixed": "#131e16",
        "on-tertiary": "#ffffff",
        "tertiary": "#3b1600",
        "surface-container-highest": "#e4e2de",
        "on-tertiary-fixed-variant": "#6c3919",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "surface-container-high": "#eae8e4",
        "primary": "#01261f",
        "on-primary-container": "#83a69c",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#3d4a40",
        "on-tertiary-fixed": "#331200",
        "secondary-fixed-dim": "#bccabd",
        "surface-container-low": "#f5f3ef",
        "surface-tint": "#43655c",
        "outline": "#717976",
        "tertiary-container": "#58290a",
        "on-surface": "#1b1c1a",
        "primary-fixed": "#c5eadf",
        "secondary": "#556257",
        "primary-container": "#1a3c34",
        "outline-variant": "#c1c8c4",
        "on-primary-fixed": "#00201a",
        "on-background": "#1b1c1a",
        "inverse-on-surface": "#f2f0ed",
        "primary-fixed-dim": "#aacec3",
        "secondary-fixed": "#d8e6d8",
        "on-primary-fixed-variant": "#2b4d44",
        "surface": "#fbf9f5",
        "background": "#fbf9f5",
        "on-tertiary-container": "#d48f68",
        "secondary-container": "#d5e3d5",
        "on-surface-variant": "#414846",
        "inverse-surface": "#30312e",
        "inverse-primary": "#aacec3",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#ffb68d",
        "on-secondary": "#ffffff",
        "surface-dim": "#dbdad6"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "container-max": "1280px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "section-gap": "120px",
        "unit": "8px",
        "gutter": "24px"
      },
      fontFamily: {
        "headline-md": ["Playfair Display", "serif"],
        "body-md": ["Inter", "system-ui", "sans-serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "label-caps": ["Inter", "system-ui", "sans-serif"],
        "body-lg": ["Inter", "system-ui", "sans-serif"],
        "title-sm": ["Inter", "system-ui", "sans-serif"],
        "headline-md-mobile": ["Playfair Display", "serif"],
        "display-lg": ["Playfair Display", "serif"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "title-sm": ["20px", { lineHeight: "1.5", fontWeight: "600" }],
        "headline-md-mobile": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  }
};
