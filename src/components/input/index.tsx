import * as Styled from './input.styles'

type InputProps = React.ComponentPropsWithoutRef<"input">

export default function Input({ type, placeholder, ...props }: InputProps) {
    return <Styled.Input type={type} placeholder={placeholder} {...props} />
}