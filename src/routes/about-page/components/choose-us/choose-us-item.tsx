import * as Styled from './choose-us.styles';

type ChooseUsItemProps = {
    icon: React.JSX.Element;
    title: string;
    description?: string;
}

export const ChooseUsItem = ({ icon, title, description }: ChooseUsItemProps) => {
    return (
        <Styled.Item>
            {icon}
            <div>
                <Styled.ItemTitle as='h3'>{title}</Styled.ItemTitle>
                <Styled.ItemDescription>
                    { description 
                        ? 
                            description
                        :
                        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas cum unde ipsam optio asperiores.'
                    }
                </Styled.ItemDescription>
            </div>
        </Styled.Item>
    )
}