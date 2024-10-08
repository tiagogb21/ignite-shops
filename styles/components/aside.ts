import { styled } from "@stitches/react";

export const AsideContainer = styled("aside", {
    width: "400px",
    position: "fixed",
    zIndex: 10,
    top: 0,
    right: 0,
    minHeight: "100vh",
    backgroundColor: "$gray800",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    padding: "2rem",
});

export const TopContainer = styled("div", {
    width: "100%",
});

export const CardsContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    marginTop: "2rem",
});

export const Close = styled("div", {
    display: "flex",
    justifyContent: "flex-end",

    button: {
        color: "$white",
        cursor: "pointer",
        fontSize: "20px",
    }
})

export const CardContainer = styled("div", {
    display: "flex",
    gap: "20px",

    ".aside-card-img-container": {
        background:
            "linear-gradient(rgb(30, 164, 131) 0%, rgb(116, 101, 212) 100%);",
        borderRadius: "8px",
    },

    div: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",

        button: {
            color: "$green300",
            cursor: "pointer",
        },
    },
});

export const BottomContainer = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4rem",

    div: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",

        p: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
        },

        "& .total": {
            fontSize: "1.4rem",
            fontWeight: "bold",
        },
    },
    button: {
        backgroundColor: "$green500",
        color: "$white",
        fontSize: "1.2rem",
        borderRadius: "8px",
        padding: "1rem 1.4rem",
        fontWeight: "bold",
    },
});
