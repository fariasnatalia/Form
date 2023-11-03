import {
    Image as DefaultImage,
  } from "react-native";
  import tailwind from "twrnc";
  

  export const Image = ({
    variant = "default",
    size = "md",
    ...props
  }) => {
    const sizes = {
      xs: tailwind`w-12 h-12`,
      sm: tailwind`w-20 h-20`,
      md: tailwind`w-32 h-32`,
      lg: tailwind`w-48 h-48`,
      xl: tailwind`w-64 h-64`,
    };
  
    const variants = {
      default: tailwind``,
      rounded: tailwind`rounded-lg`,
      circle: tailwind`rounded-full`,
    };
  
    return <DefaultImage {...props} style={[sizes[size], variants[variant]]} />;
  };