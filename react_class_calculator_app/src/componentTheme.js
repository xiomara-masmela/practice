import { border, extendTheme } from '@chakra-ui/react';

const overrides = {
    colors: {
        primary: "hsl(172, 67%, 45%)",
        cyan: {
            veryDark: "hsl(183, 100%, 15%)",
            darkGray: "hsl(186, 14%, 43%)",
            GrayCyan: "hsl(184, 14%, 56%)",
            light: "hsl(185, 41%, 84%)",
            veryLight: "hsl(189, 41%, 97%)"
        },
        white: "hsl(0, 0%, 100%)"
    },
    styles: {
        global: {
            body: {
                bg: "hsl(185, 41%, 84%)",
                fontFamily: `'Space Mono', monospace`,
                fontSize: "14px"

            },
            label: {
                color: "hsl(186, 14%, 43%)",
                
            }
        }
    },
    
    components: {
        Button: {
            baseStyle: {
                width: "100%"
            },
            sizes: {
                small: {
                    px: 5,
                    h: "50px",
                    fontSize: "20px",
                },
                medium: {
                    px: 7,
                    h: "60px",
                    fontSize: "25px",
                },
                large: {
                    px: 8,
                    h: "70px",
                    fontSize: "30px",
                    borderRadius: "10px",
                },
            },
            variants: {
                primary: {
                    bg: "hsl(172, 67%, 45%)",
                    color: "hsl(183, 100%, 15%)",
                },
                secondary: {
                    bg: "secondary",
                    color: "#fff",
                },
                ghost: {
                    bg: "transparent",
                    border: "1px solid red",
                },
                primaryGhost: {
                    bg: "transparent",
                    border: "1px solid",
                    borderColor: "primary",
                },
                secondaryGhost: {
                    bg: "transparent",
                    border: "1px solid",
                    borderColor: "secondary",
                    _hover: {
                        color: "#fff",
                        bg: "#BB1415",
                    },
                },
            },
        },

        Heading: {
            baseStyle: {
                fontFamily: "Inter",
                fontWeight: "600",
            },
            sizes: {
                small: {
                    fontSize: "20px",
                },
                medium: { fontSize: "25px" },
                large: { fontSize: "30px" },
            },
        },
    },
};

const theme = extendTheme(overrides);
export default theme;