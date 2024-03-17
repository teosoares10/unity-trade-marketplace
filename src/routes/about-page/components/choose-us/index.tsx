import * as Styled from './choose-us.styles';
import TitleAndDescription from '../../../../components/title-and-description';
import { ChooseUsList } from './choose-us-list';

export const ChooseUs = () => {
    return (
        <Styled.ChooseUs>
            <Styled.Wrapper>
                <TitleAndDescription
                    title="why choose us"
                    description='Our Benefit'
                />
                <Styled.ItemsWrapper>
                    <ChooseUsList />
                    <Styled.Video src="" />
                </Styled.ItemsWrapper>
            </Styled.Wrapper>
        </Styled.ChooseUs>
    )
}