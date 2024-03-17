import Text from '../../../../components/text';
import * as Styled from './our-team.styles'

type OurTeamItemProps = {
    img: React.JSX.Element;
    name: string;
    role: string;
}

export const OurTeamItem = ({ img, name, role }: OurTeamItemProps) => {
    return (
        <Styled.Item>
            {img}
            <Styled.ItemDescription>
                <Styled.ItemTitle as='h3'>{name}</Styled.ItemTitle>
                <Text as="span">{role}</Text>
            </Styled.ItemDescription>
        </Styled.Item>
    )
}