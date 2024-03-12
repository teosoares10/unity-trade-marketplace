import * as Styled from './img.styles'

type ImageProps = React.ComponentPropsWithoutRef<"img">

export default function Image({ src, alt, ...props }: ImageProps) {
    return <Styled.Image src={src} alt={alt} {...props} />
}