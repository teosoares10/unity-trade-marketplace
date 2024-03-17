import Text from "../../../../components/text";
import * as Styled from './about-us.styles'

type AboutUsItemProps = {
    img: React.JSX.Element;
    title: string;
    description?: string;
}

export const AboutUsItem = ({ img, title, description }: AboutUsItemProps) => {
    return (
        <Styled.Item>
            {img}
            <Styled.ItemTitle as="h3">{title}</Styled.ItemTitle>
            <Text>
                { description 
                    ? description 
                    : 
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex, corrupti vel excepturi molestias aspernatur tempore consequuntur reiciendis! Odit quisquam molestiae odio deleniti dolore aliquid accusantium, maxime qui aspernatur mollitia.'
                }
            </Text>
        </Styled.Item>
    )
}