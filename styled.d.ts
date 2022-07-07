import styled from "styled-components";

import theme from "./theme"

type Theme = typeof theme

declare module "styled-components" {
    export interface MyTheme extends Theme {
        fonts: {
            size: string,
            base: string
        },
        colorPrimary: {
            moderateViolet: string,
            veryDarkGreyBlue: string,
            veryDarkBlackBlue: string,
            white: string,
        },
        colorNeutral: {
            lightGrey: string,
            lightGreyBlue: string
        }
    }
}