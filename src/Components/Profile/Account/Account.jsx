import React, { useEffect, useState } from 'react'
import "./Account.scss"


// ICONS
import eye from "../../../Assets/eye.png"
import download2 from "../../../Assets/download2.png"

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

// API'S
import { getStudents } from '../../../Api/accounts'
import { getAdmin } from "../../../Api/addAdmin"




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
    { id: 'Date', label: 'Date', minWidth: 80 },
    { id: 'ID', label: 'Customer ID', minWidth: 100 },
    {
        id: 'Name',
        label: 'Student Name',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Payment',
        label: 'Payment',
        minWidth: 80,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Invoice',
        label: 'Invoice',
        minWidth: 80,
        align: 'left',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'Recipt',
        label: 'Recipt',
        minWidth: 80,
        align: 'left',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'License',
        label: 'License',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US')
    },

    {
        id: 'Language',
        label: "Language",
        minWidth: 80,
        align: 'left',
        format: (value) => value.toLocaleString('en-US')
    },
];

function createData(Date, ID, Name, Payment, Invoice, Recipt, License, Language) {
    // const density = population / size;
    return { Date, ID, Name, Payment, Invoice, Recipt, License, Language };
}

const rows = [
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),
    createData('19.03.2021', 'GURU-15671583', "James Westervelt", "Paypal", "#526520", "#526534", "AZKYZ-12RTZ-22A1W.", "German"),




];



const Account = (props) => {

    console.log("props are=========", props)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [student, setStudent] = useState()
    const [row, setRow] = useState([])
    const [items, setItems] = useState(null)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(async () => {
        let res = await getStudents()

        if (res.error != null) {
            console.log("account students error======", res.error)
        }
        else {
            setStudent(res.data.items)
        }


    }, [])


    useEffect(async () => {
        let res = await getAdmin()
        if (res.error != null) {
            console.log("Error is ========", res.error)
        }
        else {
            setItems(res.data)
        }
        console.log("Get admin||||||||||||||||||========", res.data)
    }, [])



    // console.log("accounts students are======", student)

    useEffect(() => {
        if (student != null) {
            student.map((data, index) => {
                setRow((pValue) => {
                    return [
                        ...pValue,
                        createData(data.creationDate.slice(0, 10),
                            <div >{data.customerId}</div>,
                            <div style={{ color: "#E29522" }}>{data.firstName}</div>,
                            data.paymentType == null ? <div >NULL</div> : <div >{data.paymentType}</div>,
                            <div style={{display:"flex" , alignItems:"center" , gap:"5px"}}><div>{data.invoiceId}</div> <img src={eye} alt="" /></div>,
                            data.receiptId == null ? "null" :
                            <div style={{display:"flex" , alignItems:"center" , gap:"5px"}}><div>{data.receiptId}</div> <img src={eye} alt="" /></div>,
                            data.returning == false ? <div >NO</div> : data.returning == true ? <div>YES</div> : null,
                            <div>{data.languageCode}</div>,
                        ),
                    ]
                })

            })
        }
    }, [student])



    return (
        <>





            <div className="account__container">
                <div className="data__header">

                    <div className="header__title cursor">
                        <p className="title__para1">Accounts/Admin/{props.account?.firstName}&nbsp;{props.account?.lastName}</p>
                        <p className="title__para2">Total Number: {items?.totalElements}</p>
                    </div>




                    <div className="header__btn cursor">
                        <img src={download2} alt="Eroor" className="header__btn__img" />
                        <p className="btn__para2">DOWNLOAD REPORT</p>
                    </div>

                </div>
                <div className="header__buttons">
                    <div className="header__btn1 cursor">
                        <p className="btn__para1">€ 2841.00</p>
                        <p className="btn__para2">PAYMENT PENDING</p>
                    </div>
                    <div style={{ backgroundColor: "rgba(223, 223, 223, 0.39)", color: "rgba(0, 41, 121, 1)", fontWeight: "700", fontSize: "24px" }} className="header__btn1 cursor">
                        <p className="btn__para3">PAY NOW</p>

                    </div>
                    <div onClick={() => props.handleClickOpen()} style={{ backgroundColor: "rgba(223, 223, 223, 0.39)", color: "rgba(0, 41, 121, 1)", fontWeight: "700" }} className="header__btn1 cursor">
                        <p className="btn__para4">GENERATE LICENSE KEY</p>

                    </div>
                </div>


                {
                    student == null ?
                        <div className="loading" ><CircularProgress /></div>

                        :
                        <>
                            <div className="account__table">
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
                                        rowsPerPageOptions={[10, 25, 100]}
                                        component="div"
                                        count={rows.length}
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

export default Account
