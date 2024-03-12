import * as Styled from './text.styles'

type TextProps = {
    children: React.ReactNode;
    as?: 'span'
}

const Text = ({ children, as }: TextProps) => {
    switch (as) {
        case 'span':
            return <Styled.Span>{children}</Styled.Span>;
        default:
            return <Styled.Text>{children}</Styled.Text>;
    }
}

export default Text;