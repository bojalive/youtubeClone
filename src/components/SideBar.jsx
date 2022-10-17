import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constants";
const selectedCategory = "New";
const SideBar = ({selectedCategory,setselectedCategory}) => (


    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
    >
          {categories.map((cat) => (
            <button
                className="category-btn"
                onClick={()=>setselectedCategory(cat.name)}
                style={{
                    background: cat.name === selectedCategory && "#003366",
                    color: "#003366",
                }}
                key={cat.name}
            >
                <span
                    style={{
                        color:
                            cat.name === selectedCategory ? "white" : "#003366",
                        marginRight: "15px",
                    }}
                >
                    {cat.icon}
                </span>

                <span
                    style={{
                        opacity: cat.name === selectedCategory ? "1" : "0.8",
                    }}
                >
                    {cat.name}
                </span>
            </button>
        ))}
    </Stack>
);
export default SideBar;
