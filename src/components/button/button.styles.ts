import styled from "styled-components";

export const Button = styled.button<{ $bg?: string; $color?: string; $padding?: string;  }>`
    background-color: #ffa52a;
    color: #ffffff;
    border: none;
    padding: .4rem .8rem;
    cursor: pointer;

    &:hover {
        border: 1px solid #ffa52a;
        color: #ffa52a;
        background-color: transparent;
    }
`