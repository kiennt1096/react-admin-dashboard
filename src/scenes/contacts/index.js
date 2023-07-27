import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";

const Contacts = () => {
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
            field: "address",
            headerName: "Địa chỉ",
            flex: 1,
        },
        {
            field: "city",
            headerName: "Thành phố",
            flex: 1,
        },
        {
            field: "registrarId",
            headerName: "Mã đăng ký",
            flex: 1,
        },
    ];

    return (
        <Box m="20px">
            <Header title="Danh bạ" subtitle="Quản lý Danh bạ của bạn" />
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
                    // "& .name-column--cell": {
                    //     color: `${colors.greenAccent[500]} !important`,
                    // },
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.gray[100]} !important`,
                    },
                    "& .MuiDataGrid-row.Mui-selected": {
                        backgroundColor: `${colors.blueAccent[700]} !important`,
                    },
                    "& .MuiDataGrid-row.Mui-selected:hover": {
                        backgroundColor: `${colors.blueAccent[700]} !important`,
                    },
                    "& .MuiDataGrid-cell:focus": {
                        outline: `none !important`,
                    },
                }}
            >
                <DataGrid
                    hideFooterSelectedRowCount="true"
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                ></DataGrid>
            </Box>
        </Box>
    );
};

export default Contacts;
