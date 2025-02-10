import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import  CandidateForm  from "./index";
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("CandidateForm", ()=> {
    test("renders form title", ()=> {   
        render((
            <ThemeProvider theme={theme}>

                <CandidateForm />
            </ThemeProvider>
    ))
        const title = screen.getByText(/Add Candidate/i )
        expect(title).toBeInTheDocument()
    })

})