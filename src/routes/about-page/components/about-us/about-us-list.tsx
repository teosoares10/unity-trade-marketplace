import { AboutUsItem } from "./about-us-item"
import * as Styled from './about-us.styles'

export const AboutUsList = () => {
    return (
        <Styled.Items>
            <AboutUsItem
                img={<Styled.ItemImg src="" alt="" />}
                title="who we are"
            />
            <AboutUsItem
                img={<Styled.ItemImg src="" alt="" />}
                title="our vision"
            />
        </Styled.Items>
    )
}