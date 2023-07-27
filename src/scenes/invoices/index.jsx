import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
        },
        {
            field: "name",
            headerName: "Tên con nợ",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Số tiền nợ",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            ),
        },
        {
            field: "phone",
            headerName: "Số để khủng bổ",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Ngày đòi nợ",
            flex: 1,
        },
    ];

    return (
        <Box m="20px">
            <Header
                title="Tài khoản"
                subtitle="Kiểm soát các con nợ của bạn!"
            />
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
                    //Màu của coloumn khi select vào
                    "& .MuiDataGrid-row.Mui-selected": {
                        backgroundColor: `${colors.blueAccent[700]} !important`,
                    },
                    //Màu cảu column khi select và hover vào
                    "& .MuiDataGrid-row.Mui-selected:hover": {
                        backgroundColor: `${colors.blueAccent[700]} !important`,
                    },
                    "& .MuiDataGrid-cell:focus": {
                        outline: `none !important`,
                    },
                    "& .Mui-checked": {
                        color: `white !important`,
                    },
                    "& .MuiDataGrid-cell:focus-within": {
                        outline: `none !important`,
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                ></DataGrid>
            </Box>
        </Box>
    );
};

export default Invoices;
