import arcadeIcon from "./images/icon-arcade.svg";
import advancedIcon from "./images/icon-advanced.svg";
import proIcon from "./images/icon-pro.svg";

export const STEPS = [
    { value: 1, label: "YOUR INFO", stepNum: "STEP 1" },
    { value: 2, label: "SELECT PLAN", stepNum: "STEP 2" },
    { value: 3, label: "ADD-ONS", stepNum: "STEP 3" },
    { value: 4, label: "SUMMARY", stepNum: "STEP 4" },
]

export const STEP_TWO_PLAN = [
    {
        image: arcadeIcon,
        monthlyPrice: 9,
        yearlyPrice: 90,
        label: "Arcade",
    },
    {
        image: advancedIcon,
        monthlyPrice: 12,
        yearlyPrice: 120,
        label: "Advanced",
    },
    {
        image: proIcon,
        monthlyPrice: 15,
        yearlyPrice: 150,
        label: "Pro",
    },
]

export const STEP_THREE_PLAN = [

    {
        value: "online",
        label: "Online service",
        description: "Access to multiplayer games",
        monthlyPrice: 1,
        yearlyPrice: 10,
    },
    {
        value: "Larger ",
        label: "Larger storage",
        description: "Extra 1TB cloud save",
        monthlyPrice: 1,
        yearlyPrice: 20,

    },
    {
        value: "Customizable",
        label: "Customizable profile",
        description: "Custom theme on your profile",
        monthlyPrice: 2,
        yearlyPrice: 20,

    },
]