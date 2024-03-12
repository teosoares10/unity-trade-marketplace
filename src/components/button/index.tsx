import { ComponentPropsWithoutRef, ElementType } from "react";
import * as Styled from "./button.styles";

type ButtonProps<T extends ElementType> = {
    children: React.ReactNode;
    as?: string;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = 'button'>({ children, as, ...props }: ButtonProps<T>): JSX.Element => {
    return (
        <Styled.Button
            as={as}
            {...props}
        >
            {children}
        </Styled.Button>
    )
}

export default Button;
