import Header from "../navbar/Header";
import { faker } from '@faker-js/faker';
import AppNewsUpdate from "./AppnewsUpdate";
import { Grid } from "@mui/material";
export default function News(){
    return (
        <>
        <Header/>
        <Grid ms={3} md={4} lg={4}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(10)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=600`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>
        </>
    );
}