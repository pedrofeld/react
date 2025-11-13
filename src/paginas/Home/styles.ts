import styled from 'styled-components';
import { posts } from '../../posts'

export const Search = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const Container = styled.div`
    display: flex;
    gay: 10px;
    width: 100%;
    max-width: 600px;
    padding: 0 15px;

    input {
        flex: 1;
        padding: 10px;
        border: 2px solid ${({theme}) => theme.colors.border};
        font-size: 1rem;
    }

    button {
        padding: 10px 20px;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        background: ${({theme}) => theme.colors.primary}
    }
`;