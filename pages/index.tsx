import {Button, Htag, P, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>Заголовок</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <P size='s'>fsdfsdfsd</P>
            <P size='m'>fsdfdsfsf</P>
            <P size='l'>fsdfdsfs</P>
            <Tag size={'s'} color={'ghost'}>bxb</Tag>
            <Tag size={"m"} color={"red"}>scfdf</Tag>
            <Tag size={"s"} color={"green"}>scfdf</Tag>
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};


