import styled from 'styled-components'
import { Title } from '../../../../components/title/title.styles'
import { Image } from '../../../../components/img/img.styles'


export const Wrapper = styled.section`
    width: 65rem;
    margin-inline: auto;
`

export const AboutUsTitle = styled(Title)`
    text-align: center;
    margin: 2.5rem 0;
`

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Item = styled.section`
    width: 30rem;
`

export const ItemTitle = styled(Title)`
    margin-top: 1rem;
    margin-bottom: .3rem;
`

export const ItemImg = styled(Image)`
    width: 100%;
    height: 15rem;
`
