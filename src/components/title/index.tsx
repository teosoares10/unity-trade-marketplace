import { ComponentPropsWithoutRef, ElementType } from "react";
import * as Styled from "./title.styles";

type TitleProps<T extends ElementType> = {
    children: React.ReactNode;
    as?: string;
} & ComponentPropsWithoutRef<T>;

const Title = <T extends ElementType = 'h1'>({ children, as, ...props }: TitleProps<T>): JSX.Element => {
    return (
        <Styled.Title as={as} {...props}>{children}</Styled.Title>
    )
} 

export default Title;