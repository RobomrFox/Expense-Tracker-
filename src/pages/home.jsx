import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper/helper";

export function homeLoader() {
    const userName  = fetchData("userName");
    return { userName } 
}


export const Home = () => {
    const { userName } = useLoaderData()
 return(<>
        {userName}
    </>)
};