import styled from "styled-components"
import { Title } from "../../../../components/title/title.styles"
import { Text } from "../../../../components/text/text.styles"

export const ChooseUs = styled.div`
    background-color: rgb(238, 223, 223);
    padding-top: 1rem;
    padding-bottom: 4rem;
    margin: 5rem 0;
`

export const Wrapper = styled.section`
    width: 65rem;
    margin-inline: auto;
`

export const ItemsWrapper = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
`

export const Video = styled.video`
    width: 30rem;
    height: 18rem;
    background-color: grey;
`

export const Item = styled.section`
    display: flex;
    gap: 1.5rem;
    width: 28rem;

    & + & {
        margin-top: 1rem;
    }
`

export const ItemTitle = styled(Title)`
    margin-bottom: .5rem;
`

export const ItemDescription = styled(Text)`
    font-size: .85rem;
`