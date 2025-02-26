module.exports = {
    theme: {
        // screens: {
        //     sm: "640px",
        //     md: "768px",
        //     lg: "1024px",
        //     xl: "1280px",
        // },
        extend: {
            scale: {
                101: "1.01",
            },
            inset: {
                // should be there by default, not sure why it was not working
                4: "1rem",
            },
        },
    },
    variants: {
        borderStyle: ["responsive", "hover"],
        borderWidth: ["responsive", "hover"],
        padding: ["responsive", "hover"],
        margin: ["responsive", "hover"],
    },
    plugins: [],
};
