import * as Styled from './our-team.styles';
import { OurTeamItem } from './our-team-item';

export const OurTeamList = () => {
    return (
        <Styled.Items>
            <OurTeamItem
                img={<Styled.ItemImage src="" alt="" />}
                name="mason wong"
                role="fashion design"
            />
            <OurTeamItem
                img={<Styled.ItemImage src="" alt="" />}
                name="benjamin"
                role="C.E.O"
            />
            <OurTeamItem
                img={<Styled.ItemImage src="" alt="" />}
                name="jack bridges"
                role="manager"
            />
            <OurTeamItem
                img={<Styled.ItemImage src="" alt="" />}
                name="eugene cole"
                role="delivery"
            />
        </Styled.Items>
    )
}