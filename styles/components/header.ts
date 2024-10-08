import { styled } from "@stitches/react";

export const HeaderContainer = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",

    div: {
        button: {
            cursor: "pointer",
        },

        div: {
            position: "relative",

            "& span": {
                width: "26px",
                height: "26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "-14px",
                right: "-14px",
                position: "absolute",
                backgroundColor: "$green300",
                borderRadius: "50%",
                fontWeight: "bold",
            },
        },
    },
});
