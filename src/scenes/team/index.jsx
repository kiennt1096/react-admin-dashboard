import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
        },
        {
            field: "name",
            headerName: "Tên",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "age",
            headerName: "Tuổi",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Số điện thoại",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Loại user",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && (
                            <AdminPanelSettingsOutlinedIcon />
                        )}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.gray[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title="Team" subtitle="Quản lý Team của bạn" />
            <Box
                m="40px 0 0 0 "
                height="75vh"
                sx={{
                    //border ngoài của table to
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    //border bottom từng column
                    "& .MuiDataGrid-cell": { borderBottom: "none" },

                    //màu chữ cột name - đã được đặt tên ở trên
                    "& .name-column--cell": {
                        color: "colors.greenAccent[300]",
                    },
                    //border + màu nền của cột tiêu đề
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                        textAlign: "center",
                    },
                    // màu nền của table
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "colors.primary[400]",
                    },
                    // màu nền cùa footer
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                }}
            >
                <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
            </Box>
        </Box>
    );
};

export default Team;
