import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header
                title="Biểu đồ giun dế"
                subtitle="Kiểm soát nợ hình giun hình dế"
            ></Header>

            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;
