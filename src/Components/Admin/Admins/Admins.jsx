import React, { useEffect, useState } from 'react'
import "./Admins.scss"

import search from "../../../Assets/search.png"
import pencil from "../../../Assets/pencil.png"
import NavBar from '../LeftNavbar/NavBar'
import Header from '../../Header/Header'
import Footer from '../Home/Footer/Footer'


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHeader from '../../TableHeader/TableHeader'

import { styled } from '@mui/material/styles';
import { getAdmin } from "../../../Api/addAdmin"
import { CircularProgress } from "@mui/material"

const Head = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 11,
    },
}));

const Mate = styled(TableRow)(({ theme }) => ({
    backgroundColor: "rgba(249, 249, 249, 1)",
    
  
}));


const columns = [
    { id: 'SN', label: 'S/N', minWidth: 100, minHeight: "100%" },
    { id: 'FName', label: 'First Name', minWidth: 100 },
    {
        id: 'LName',
        label: 'Last Name',
        minWidth: 100,
        align: 'left',
        fontSize: "40px",
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'email',
        label: 'Email Adress',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'mobile',
        label: 'Mobile Number',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'adress',
        label: 'Adress',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'edit',
        label: 'Edit',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

function createData(SN, FName, LName, email, mobile, adress, edit) {
    // const density = population / size;
    return { SN, FName, LName, email, mobile, adress, edit };
}



const Admins = () => {
    const [items, setItems] = useState(null)
    const [searchState, setSearchState] = useState("")
    const [row, setRow] = useState([])

    useEffect(() => {
        if (items != null) {
            setRow([])
            items?.items.filter((e) => {
                if (searchState == "") {
                    return e
                } else if (e.firstName?.toLowerCase().includes(searchState.toLowerCase()) || e.lastName?.toLowerCase().includes(searchState.toLowerCase()) || e.emailAddress?.toLowerCase().includes(searchState.toLowerCase()) || e.mobileNumber?.toLowerCase().includes(searchState.toLowerCase()) || e.address?.toLowerCase().includes(searchState.toLowerCase())) {
                    return e
                }
            }).map((data, index) => {
                setRow((pValue) => {
                    return [
                        ...pValue,
                        createData(index + 1, data.firstName, data.lastName, data.emailAddress, data.mobileNumber, data.address, <img src={pencil} alt="ERROR" />)
                    ]

                })

            })
        }
    }, [items, searchState])

    useEffect(async () => {
        let res = await getAdmin()
        if (res.error != null) {
            console.log("Error is ========", res.error)
        }
        else {
            setItems(res.data)
        }
        console.log("Final Response========", res.data)
    }, [])





    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <div className="header__component">
                <Header />
            </div>


            <div className="ad__container">


                <div className="table__header">
                    {items != null && <TableHeader searchState={searchState} setSearchState={setSearchState} title="Admins" btnpara="ADD ADMIN" total={items.totalElements} />}
                </div>


                {
                    items == null ?
                        <div className="admin__loading"><CircularProgress /></div>
                        :
                        <>
                            <div style={{ marginTop: "1rem" }} className="admin__table">
                                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                    <TableContainer sx={{ maxHeight: "100vh" }}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{ minWidth: column.minWidth }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {row
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((row) => {
                                                        return (
                                                            <Mate hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                {columns.map((column) => {
                                                                    const value = row[column.id];
                                                                    return (
                                                                        <Head key={column.id} align={column.align}>
                                                                            {column.format && typeof value === 'number'
                                                                                ? column.format(value)
                                                                                : value}
                                                                        </Head>
                                                                    );
                                                                })}
                                                            </Mate>
                                                        );
                                                    })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[15, 25, 100]}
                                        component="div"
                                        count={row.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            </div>
                        </>
                }


            </div>

        </>
    )
}

export default Admins
