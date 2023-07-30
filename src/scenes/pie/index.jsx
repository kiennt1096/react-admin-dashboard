import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header
                title="Biểu đồ hình Chocopie"
                subtitle="Vừa ăn Chocopie vừa kiểm soát con nợ"
            ></Header>

            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    );
};

export default Pie;
