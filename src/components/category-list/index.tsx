import { CategoryItem } from "./category-item";
import * as Styled from './category.styles'

export const CategoryList = () => {
    return (
        <Styled.Wrapper>
            <CategoryItem
                tag="clothing"
                title="tie cylinder bag"
                img={<Styled.CategoryImage src="" alt="" />}
            />

            <CategoryItem
                tag="shoes"
                title="edgeboundce"
                img={<Styled.CategoryImage src="" alt="" />}
            />

            <CategoryItem
                tag="glasses"
                title="aviator sunglasses"
                img={<Styled.CategoryImage src="" alt="" />}
            />


            <CategoryItem
                paddingSpace='right' 
                tag="women's"
                title="snowboard clothing"
                img={<Styled.CategoryImage src="" alt="" />}
            />

            <CategoryItem
                paddingSpace='left' 
                tag="men's"
                title="rounded neck cotton"
                img={<Styled.CategoryImage src="" alt="" />}
                reverse
            />

        </Styled.Wrapper>
    )
}