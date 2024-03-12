import styled, { css } from "styled-components";
import { Root } from "../card/root/root.styles";
import { Text } from "../text/text.styles";
import { Card } from "../card";
import { Image } from "../img/img.styles";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

export const PrimaryItem = styled(Root)`
    
    flex: 1;

    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 

    background-color: cyan;

    text-align: center;
`

export const SecondaryItem = styled(Root)<{ $padding?: string; $reverse?: boolean; }>`
    flex: 1;
    display: flex;
    ${props => props.$reverse && css`
        flex-direction: row-reverse;
    `}
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    padding-left: ${ props => props.$padding === 'left' && "2rem"};
    padding-right: ${ props => props.$padding === 'right' && "2rem"};

    background-color: turquoise;
`

export const ItemDescription = styled.div`
    width: 8rem;
`

export const Tag = styled(Text)`
    color: red;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: bold;
`

export const Title = styled(Card.Title)`
    font-size: 1.28rem;
    font-weight: 600;
    text-transform: capitalize;
    margin: .5rem 0;
`

export const Button = styled(Card.Button)`
    color: black;
    margin-top: 1rem;
    padding: 0;
    padding-bottom: .3rem;
    background-color: transparent;
    border-bottom: 1px solid orange;
    font-weight: bold;
`

export const CategoryImage = styled(Image)`
    width: 15rem;
    height: 10rem;
    /* width: 100%;
    height: 100%; */
`