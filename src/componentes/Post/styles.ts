import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
    primary?: boolean;
};

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

export const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`;

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
    background: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.primary};
    ${(props) => 
        props.primary && css`
            background: ${(props) => props.theme.colors.primary};
            color: white;
        `
    }
    font-size: 1em;
    margin: 1em 0.5rem 1 rem 0;
    padding: 0.25em 1em;
    border: 2px solid ${(props) => props.theme.colors.primary};
    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.primary};

        animation: ${pulse} 0.6s ease-in-out;
    }

    &::before {
        content: '🐱‍🏍';
        display: inline-block;
        margin-right: 0.5rem;
    }
`;

export const RoundedButton = styled(Button)`
    border-radius: 20px;
    padding: 0.5em 1.5emm;
    font-weight: bold;
`;

export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.colors.title};
`;

export const Article = styled.article`
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 20px;

    /*
        .category {
        
        }
        nesting: seletores/regras de estilo dentro de outros seletores através de classes
    */
`;