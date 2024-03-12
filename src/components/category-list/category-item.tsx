import * as Styled from './category.styles'

type CategoryItemProps = {
    title: string;
    tag: string;
    img: React.JSX.Element;
    paddingSpace?: 'right' | 'left';
    reverse?: boolean;
}

export function CategoryItem({ title, tag, img, paddingSpace, reverse }: CategoryItemProps) {
    return (
        <>
            {!paddingSpace ?
                (
                    <Styled.PrimaryItem>
                        <Styled.Tag>{tag}</Styled.Tag>
                        <Styled.Title as="h3">{title}</Styled.Title>
                        {img}
                    </Styled.PrimaryItem>
                )
                : 
                (
                    <Styled.SecondaryItem $padding={paddingSpace} $reverse={reverse}>
                        {img}
                        <Styled.ItemDescription>
                        <Styled.Tag>{tag}</Styled.Tag>
                        <Styled.Title as="h3">{title}</Styled.Title>
                        <Styled.Button>shop clother</Styled.Button>
                        </Styled.ItemDescription>
                    </Styled.SecondaryItem>
                )
            }
        </>
        
    )
}