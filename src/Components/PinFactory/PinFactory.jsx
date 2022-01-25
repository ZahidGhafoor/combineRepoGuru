import React, { useEffect, useState } from 'react'
import "./PinFactory.scss"
import Header from '../Header/Header'
import TableHeader from '../TableHeader/TableHeader'

// ICONS
import pencil2 from "../../Assets/pencil2.png"

// API
import { getPins } from '../../Api/pins'

// MUI
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material'



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
    { id: 'SN', label: 'S/N', minWidth: 100, minHeight: "100vh" },
    { id: 'Pin', label: 'Pin', minWidth: 100 },
    {
        id: 'Purchase',
        label: 'Purchased by',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'validity',
        label: 'Validity',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'edit',
        label: '',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),

    },

];

function createData(SN, Pin, Purchase, validity, edit) {
    // const density = population / size;
    return { SN, Pin, Purchase, validity, edit };
}





const PinFactory = (props) => {
    const [items, setItems] = useState(null)
    const [searchState, setSearchState] = useState("")
    const [row, setRow] = useState([])


    console.log("total numbers are==========", items);



    const get_time_diff = (datetime) => {
        var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";

        var datetime = new Date(datetime).getTime();
        var now = new Date().getTime();

        if (isNaN(datetime)) {
            return "";
        }

        if (datetime < now) {
            var milisec_diff = now - datetime;
        } else {
            var milisec_diff = datetime - now;
        }

        var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

        var date_diff = new Date(milisec_diff);

        if (days <= 0) {
            return date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes ";
        } else if (date_diff.getHours <= 0) {
            return date_diff.getMinutes() + " Minutes ";
        } else {
            return days + " Days " + date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes ";
        }
    }

    useEffect(() => {
        if (items != null) {
            setRow([])
            items?.items.filter((e) => {
                if (searchState == "") {
                    return e
                } else if (e.pin?.toLowerCase().includes(searchState.toLowerCase()) || e.owner?.toLowerCase().includes(searchState.toLowerCase()) || e.dateOfExpiration?.toLowerCase().includes(searchState.toLowerCase())) {
                    return e
                }
            }).map((data, index) => {
                setRow((pValue) => {
                    return [
                        ...pValue,
                        createData(index + 1, data.pin, data.owner == null ? "Not Purchased" : <div style={{ color: "#027368" }}>data.owner</div>, data.dateOfExpiration == null ? "null" : get_time_diff(data.dateOfExpiration), <span onClick={() => { props.openPinValidity(data) }}><img src={pencil2} alt="ERROR" /></span>)
                    ]
                })

            })
        }

    }, [items, searchState])


    useEffect(async () => {
        let res = await getPins()

        if (res.error != null) {
            console.log("Pin Error======", res.error)
        }
        else {
            setItems(res.data)

        }

    }, [])
    console.log("Getpins=============", items)


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
            <div className="pf__container">
                <div className="th__container">
                    {items != null && <TableHeader title="Pin Factory" btnpara="DOWNLOAD REPORT" searchState={searchState} setSearchState={setSearchState}  total={items.totalElements} />}
                </div>




                {
                    items == null ? <><div className="loading"><CircularProgress /></div></>
                        :
                        <>
                            <div style={{ marginTop: "1rem" }} className="pinfactory__table">
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
                                        rowsPerPageOptions={[25, 35, 100]}
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

export default PinFactory
