import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import  CandidateForm  from "./index";
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { act } from '@testing-library/react';

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

    test("renders first name input", ()=> {   
        render((
            <ThemeProvider theme={theme}>

                <CandidateForm />
            </ThemeProvider>
    ))
        const input = screen.getByLabelText(/First Name *\*/i)
        expect(input).toBeInTheDocument()
    })

    test('allows user to fill in the form', () => {
        render((
            <ThemeProvider theme={theme}>
                <CandidateForm />
            </ThemeProvider>
    ));
        const firstNameInput = screen.getByLabelText(/First Name *\*/i) as HTMLInputElement;
        act(() => {

            fireEvent.change(firstNameInput, { target: { value: 'John' } });
        })
        expect(firstNameInput.value).toBe('John');
      });
    


    test('checks if first name input shows error message', async () => {
        render((
            <ThemeProvider theme={theme}>
                <CandidateForm />
            </ThemeProvider>
    ));
        const firstNameInput = screen.getByLabelText(/First Name *\*/i) as HTMLInputElement;
        const submitButton = screen.getByRole('button', { name: /Submit new candidate/i });
        await act(async ()=> {
            
            fireEvent.change(firstNameInput, { target: { value: '' } });
            fireEvent.click(submitButton);
        })
        const errorMessage = await screen.findByText(/First name is required/i);
        expect(errorMessage).toBeInTheDocument();
      });

})