import styled, { css } from 'styled-components';

interface ButtonProps {
    primary?: boolean;
}

export const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`

export const Button = styled.button<ButtonProps>`
    /*
        background: ${(props) => (props.primary ? '#3295b4' : 'white')};
        color: ${(props) => (props.primary ? 'white' : '#3295b4')};
    */
    /*
        ${({primary}) => css `
            background: ${primary ? '#3295b4' : 'white'};
            color: ${primary ? 'white' : '#3295b4'};
        `}
    */
    background: white;
    color: #3295b4;
    ${(props) => 
        props.primary && css`
            background: #3295b4;
            color: white;
        `
    }
    font-size: 1em;
    margin: 1em 0.5rem 1 rem 0;
    padding: 0.25em 1em;
    border: 2px solid #3295b4;
    cursor: pointer;
`;

export const RoundedButton = styled(Button)`
    border-radius: 20px;
    padding: 0.5em 1.5emm;
    font-weight: bold;
`;