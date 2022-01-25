import React, { useEffect, useState } from 'react'
import "./Dashboard.scss"
import Header from '../../Header/Header';
import TableHeader from '../../TableHeader/TableHeader';

// API's
import { dashboardControl } from '../../../Api/dashboard';
import { getStudents } from '../../../Api/accounts';

// npm
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Doughnut } from 'react-chartjs-2';
import LineChart from '../Graph/LineChart';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

// icons
import download from "../../../Assets/download.svg"
import eye from "../../../Assets/eye.png"
import celender from "../../../Assets/celender.svg"
import dropdown from "../../../Assets/dropdown.svg"

// mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { CircularProgress } from "@mui/material"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';





const Head = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontWeight: 700,
        fontSize: 21,



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
        label: "Receipt",
        minWidth: 80,
        align: 'left',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'Returning',
        label: 'Returning',
        minWidth: 80,
        align: 'left',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'User',
        label: 'User',
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

function createData(Date, ID, Name, Payment, Invoice, Recipt, Returning, User, Language) {
    return { Date, ID, Name, Payment, Invoice, Recipt, Returning, User, Language };
}




const Dashboard = () => {
    
    const [response, setResponse] = useState()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [lang, setLang] = useState([])
    const [searchState, setSearchState] = useState("")
    const [student, setStudent] = useState()
    const [row, setRow] = useState([])
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [dateRange2, setDateRange2] = useState([null, null]);
    const [startDate2, endDate2] = dateRange2;
    const [donetData, setDonatData] = useState([])


    useEffect(async () => {
        let res = await dashboardControl()
        console.log("Response==============", res)
        if (res.error != null) {
            console.log("something went wrong")
        }
        else {
            setResponse(res.data)
            console.log("Response ==============", res.data)
        }
    }, [])

    useEffect(async () => {
        let res = await getStudents()

        if (res.error != null) {
            console.log("Student error something went wrong")
        }
        else {
            console.log("students accounts are", res.data.items)
            setStudent(res.data)
        }
        // console.log("whole student data===", res)

    }, [])
    console.log("final students are=========", student)
    console.log("date===========", student?.creationDate)

    useEffect(() => {
        if (student != null) {
            setRow([])
            student?.items.filter((e) => {
                if (searchState == "") {
                    return e
                } else if (e.customerId?.toLowerCase().includes(searchState.toLowerCase()) || e.firstName?.toLowerCase().includes(searchState.toLowerCase()) || e.paymentType?.toLowerCase().includes(searchState.toLowerCase()) || e.invoiceId?.toLowerCase().includes(searchState.toLowerCase()) || e.receiptId?.toLowerCase().includes(searchState.toLowerCase()) || e.languageCode?.toLowerCase().includes(searchState.toLowerCase())) {
                    return e
                }
            }).map((data, index) => {
                setRow((pValue) => {
                    return [
                        ...pValue,
                        createData(data.creationDate.slice(0, 10),
                            <div style={{ color: "#00825A" }}>{data.customerId}</div>,
                            <div style={{ color: "#E29522" }}>{data.firstName}</div>,
                            data.paymentType == null ? <div style={{ color: "#00825A" }} >NULL</div> : <div style={{ color: "#00825A" }}>{data.paymentType}</div>,
                            <div style={{display:"flex" , alignItems:"center" , gap:"5px"}}><div>{data.invoiceId}</div> <img src={eye} alt="" /></div>,
                            data.receiptId == null ? "null" :
                            <div style={{display:"flex" , alignItems:"center" , gap:"5px"}}><div>{data.receiptId}</div> <img src={eye} alt="" /></div>,
                            data.returning == false ? <div style={{ color: "#00825A" }} >NO</div> : data.returning == true ? <div style={{ color: "#00825A" }} >YES</div> : null,
                            data.online == true ? "Online" : "Ofline",
                            <div style={{ color: "#00825A" }}>{data.languageCode}</div>,
                        ),
                    ]
                })

            })
        }
    }, [student, searchState])
    console.log("SEARCH STATE =================== ", searchState);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    console.log("res", response)



    console.log("userlanguges ==========", lang)

    useEffect(() => {
        if (response) {
            response.userByLanguages.map((data, index) => {
                setLang((preValue) => {
                    return [
                        ...preValue,
                        data,


                    ]
                })
            })
        }
    }, [response])

    useEffect(() => {
        setDonatData([])
        if (lang.length >= 1) {
            lang.sort((a, b) => b.total - a.total).map((data, index) => {
                if (index <= 4) {
                    setDonatData((preValue) => {
                        return [
                            ...preValue,
                            data.total
                        ]
                    })
                }
            })
        }
    }, [lang])

    const data = {
        labels: [
        ],
        datasets: [{
            label: 'My First Dataset',
            data: donetData,
            backgroundColor: [
                '#E29522',
                '#4BAD88',
                '#E97777',
                '#E9D077',
                '#0AD7F3',
            ],
            hoverOffset: 4
        }]
    };

    const language = [
        { label: "URDU" },
        { label: "ENGLISH" },
        { label: "ARABIC" },
        { label: "FRENCH" },
        { label: "GERMEN" },
        { label: "HINDI" },
        { label: "ITALIAN" },
        { label: "RUSSIAN" },
    ];
    const user = [
        { label: "Admins" },
        { label: "Online Users" },
        { label: "Returning Users" },
    ];
    const payment = [
        { label: "Paypal" },
        { label: "Credit Card" },
        { label: "Cash" },
    ];




    return (


        <>
            <div className="header__component">
                <Header />
            </div>
            <div className="dash__container">


                {
                    response == null ? <div className="dash__loading"><CircularProgress /></div> :

                        <>
                            <div className="dash__upper">
                                <div className="dash__header">
                                    <div className="header__left">
                                        <p className="left__para1">DASHBOARD</p>
                                        <p className="left__para2">Dashboard/Super admin</p>
                                    </div>
                                    <div className="header__right cursor">
                                        <div className="right__icon">
                                            <img src={celender} alt="" className="icons" />
                                        </div>
                                        <div className="change cursor">
                                            <div className="heading">
                                                <div className="heading__date cursor">Change Period</div>
                                                <img src={dropdown} alt="" className="dropdown" />
                                            </div>
                                            <div className="date cursor">
                                                <DatePicker
                                                    className='heading__date cursor'
                                                    placeholderText='Select Date Range'
                                                    selectsRange={true}
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    onChange={(update) => {
                                                        setDateRange(update);

                                                    }}
                                                />


                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="dash__progress__bars">
                                    <div className="progress__bar1">
                                        <div className="progress__bar">
                                            <CircularProgressbar className="progress" value={response.newUsers.percentage} text={`${response.newUsers.percentage}%`} />
                                        </div>
                                        <div className="progress__text">
                                            <p className="text__para1">{response.newUsers.amount}</p>
                                            <p className="text__para2">New User</p>
                                        </div>
                                    </div>
                                    <div className="progress__bar2">
                                        <div className="progress__bar">
                                            <CircularProgressbar className="progress" value={response.returning.percentage} text={`${response.returning.percentage}%`} />
                                        </div>
                                        <div className="progress__text">
                                            <p className="text__para1">{response.returning.amount}</p>
                                            <p className="text__para2">Returning User</p>
                                        </div>
                                    </div>
                                    <div className="progress__bar3">
                                        <div className="progress__bar">
                                            <CircularProgressbar className="progress" value={response.totalUsers.percentage} text={`${response.totalUsers.percentage}%`} />
                                        </div>
                                        <div className="progress__text">
                                            <p className="text__para1">{response.totalUsers.amount}</p>
                                            <p className="text__para2">Total User</p>
                                        </div>
                                    </div>
                                    <div className="progress__bar4">
                                        <div className="bar4__border">
                                            <div className="border__1"></div>
                                            <div className="border__2"></div>
                                        </div>
                                        <div className="bar4__data">
                                            <div className="upper" style={{ marginBottom: "10px" }}>
                                                <div className="upper__dot"></div>
                                                <div className="upper__data">
                                                    <p className="upper__para1">£ {response.totalRevenue.monthRevenue}</p>
                                                    <p className="upper__para2">Total revenue</p>
                                                    <p className="upper__para3">In a month</p>
                                                </div>
                                            </div>
                                            <div className="upper">
                                                <div style={{ background: "rgba(63, 167, 128, 1)" }} className="upper__dot"></div>

                                                <div className="upper__data">
                                                    <p className="upper__para1">£ {response.totalRevenue.dayRevenue}</p>
                                                    <p className="upper__para2">Total revenue</p>
                                                    <p className="upper__para3">In a day</p>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dash__body">
                                    <div className="body__donut">
                                        <div className="donut__header">
                                            <p className="header__para1">Users by Language</p>
                                            <p className="header__para2">Sales in number and percentage</p>
                                        </div>
                                        <div className="donut__bottom">
                                            <div className="donut">
                                                <Doughnut style={{ height: "200px", width: "200px" }} data={data} />
                                            </div>
                                            <div className="donut__right">
                                                {
                                                    lang.sort((a, b) => b.total - a.total).map((data, index) => {
                                                        if (index <= 4) {
                                                            return (
                                                                data == null ?
                                                                    <CircularProgress /> :
                                                                    <>
                                                                        <div>
                                                                            <div className="right__lang">
                                                                                <div style={{ backgroundColor: index == 0 ? "#E29522" : index == 1 ? "#4BAD88" : index == 2 ? "#E97777" : index == 3 ? "#E9D077" : index == 4 ? "#0AD7F3" : null }} className="lang__dot">
                                                                                </div>
                                                                                <div className="lang"><strong>{data.name} </strong> &nbsp; ({data.percent.toFixed(2)}%)</div>
                                                                            </div>
                                                                            <div className="right__numbers">{data.total}</div>
                                                                        </div>
                                                                    </>

                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="body__chart">
                                        <div className="chart__heading">
                                            <div className="heading__left">
                                                <p className="chart__para1">Sales per day statiustics</p>
                                                <p className="chart__para2">The statistics shows the sales on daily bases</p>
                                            </div>
                                            <div className="heading__right cursor">
                                                <img src={download} alt="Error" />
                                                <p className="right__para">Save Report</p>
                                            </div>
                                        </div>
                                        <LineChart res={response} />
                                    </div>

                                </div>
                                <div className="dash__dropDropdowns">
                                    <div className="first">
                                        <DatePicker
                                            className='date__picker'
                                            placeholderText='Select Date Range'
                                            selectsRange={true}
                                            startDate={startDate2}
                                            endDate={endDate2}
                                            onChange={(update) => {
                                                setDateRange2(update);

                                            }}
                                        />
                                    </div>

                                    <div className="right__accor">
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            name="user"
                                            options={user}
                                            sx={{ width: '230px' }}
                                            renderInput={(params) => <TextField {...params} placeholder="User" />}
                                        />
                                    </div>
                                    <div className="right__accor">
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            name="payment"
                                            options={payment}
                                            sx={{ width: '230px' }}
                                            renderInput={(params) => <TextField {...params} placeholder="Mode of payment" />}
                                        />
                                    </div>

                                    <div className="right__accor">
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            name="language"
                                            options={language}
                                            sx={{ width: '230px' }}
                                            renderInput={(params) => <TextField {...params} placeholder="Select a language" />}
                                        />
                                    </div>
                                </div>
                            </div>

                        </>
                }

                {
                    student == null ?
                        <div className="dash__loading"><CircularProgress /></div>
                        :
                        <>


                            <div className="data__container">


                                <div className="th__container">
                                    {student != null && <TableHeader searchState={searchState} setSearchState={setSearchState} total={student.totalElements} />}
                                </div>


                                <div style={{ marginTop: "1rem" }} className="dashboard__table">
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
                                            count={row.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </Paper>

                                </div>

                            </div>
                        </>
                }

            </div>

        </>
    )
}

export default Dashboard