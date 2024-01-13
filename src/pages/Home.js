import { useContext } from "react"
import {AppContext} from "../App"
export const Home = () =>{
    const {username} = useContext(AppContext);
    return <h1>This is a Home Page and the user is: {username} </h1>
}