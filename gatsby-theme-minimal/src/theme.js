import { tailwind } from "@theme-ui/presets";

export default {
  ...tailwind,
  styles: {
    ...tailwind.styles
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text"
      }
    },
    secondary: {
      color: "background",
      bg: "secondary"
    }
  }
};
