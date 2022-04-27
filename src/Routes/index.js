import { Routes, Route } from "react-router-dom";
import DashboardScreen from "../Screens/DashboardScreen";

export const GetRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardScreen/>}/>
        </Routes>
    )
}