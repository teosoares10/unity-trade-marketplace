import { AboutUsList } from './about-us-list'
import * as Styled from './about-us.styles'

export const AboutUs = () => {
    return (
        <Styled.Wrapper>
            <Styled.AboutUsTitle>About Us</Styled.AboutUsTitle>
            <AboutUsList />
        </Styled.Wrapper>
    )
}