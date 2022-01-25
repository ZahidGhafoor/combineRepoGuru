import React, { useState } from 'react'
import "./Questions.scss"
import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg"
import { ReactComponent as FilterIcon } from "../../../../assets/icons/filter.svg"
import { ReactComponent as DropArrow } from "../../../../assets/icons/droparrow.svg"
import { ReactComponent as Marked } from "../../../../assets/icons/marked.svg"
import { ReactComponent as UnMarked } from "../../../../assets/icons/unmarked.svg"
import FilterModal from './components/FilterModal/FilterModal'
import ExpandedQuestion from './components/ExpandedQuestion/ExpandedQuestion'

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { styled } from '@mui/material/styles';
import Que from '../../../../components/que/Que';

import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';





function createData(name, calories, fat, carbs, protein, marked) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    marked
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const Mate = styled(TableRow)(({ theme }) => ({
    border: "1px solid #C3CFF4 !important",
    // borderBottom: "15px solid white !important",

    // paddingBottom: "6rem",

    //   '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.action.hover,
    //     border:"2px solid red"
    //   },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <React.Fragment>
      <Mate
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => setOpen(!open)}
      >


        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>
        <TableCell>{row.marked}</TableCell>
      </Mate>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Que />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    marked: PropTypes.number.isRequired,
  }).isRequired
};

const rows = [
  createData("1.1.2-001",
    "What can increase the intaxicating Effects of Alcohol?",
    <div style={{ color: "#027368" }}>Basic Knowledge</div>,
    43,
    12,
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
  createData("1.1.2-001",
    "You Double The Speed Ät Which You Are Travelling. HOw Does This Effectthe Braking Distance",
    <div style={{ color: "#027368" }}>Class B(Cars)</div>,
    42,
    "Traffic Sign",
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
  createData("1.1.2-001",
    "Legal Framework",
    <div style={{ color: "#027368" }}>Class B(Cars)</div>,
    42,
    "Solo",
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
  createData("1.1.2-001",
  "You Double The Speed Ät Which You Are Travelling. HOw Does This Effectthe Braking Distance",
    <div style={{ color: "#027368" }}>Class B(Cars)</div>,
    53,
    "Solo",
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
  createData("1.1.2-001",
  "Basic Rules, Right of Way And Traffic Regulations",
    <div style={{ color: "#027368" }}>Class B(Cars)</div>,
    33,
    "Numerical Input",
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
  createData("1.1.2-001",
  "Traffic Signs And Traffic Facilities",
    <div style={{ color: "#027368" }}>Class D(Bus)</div>,
    32,
    "Numerical Input",
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
  createData("1.1.2-001",
  "Traffic Signs And Traffic Facilities",
    <div style={{ color: "#027368" }}>Class D(Bus)</div>,
    79,
    "Solo",
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
  createData("1.1.2-001",
  "You Double The Speed Ät Which You Are Travelling. HOw Does This Effectthe Braking Distance",
    <div style={{ color: "#027368" }}>Class D(Bus)</div>,
    77,
    "Solo",
    <div>
      <Checkbox
        color="success"
        icon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </div>,
  ),
];


const Questions = () => {
  const [questionsSelect, setQuestionsSelect] = React.useState(0);
  const [expanded, setExpanded] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

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
    <div className="questions__screen">
      <div className="topbar__placeholder"></div>
      <FilterModal filterModal={filterModal} setFilterModal={setFilterModal} />
      <div className="questions__overflow_handler">
        <div className="questions__wrapper">
          {/* Questions Header  */}
          <div className="questions__header">
            <div className="questions__header_left">
              <div className="questions__hl_heading"> Questions</div>
              <div className="questions__hl_subheading"> Total Number: 500</div>
            </div>
            <div className="questions__header_right">
              <div className="question__search_box"><SearchIcon /><input type="text" placeholder="Search List" className="question__search_input" /></div>
              <div className="qh__filter_box" onClick={() => setFilterModal(true)}><FilterIcon /></div>
              <div className="questions__sf__box">
                <DropArrow className="questions__fs_dropicon" />
                <select className="questions__filter_select">
                  <option>All Questions</option>
                  <option>Filtered Questions</option>
                </select>
              </div>
            </div>
          </div>


          <>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell>Questions Nr</TableCell>
                    <TableCell>Questions</TableCell>
                    <TableCell>Class</TableCell>
                    <TableCell>Attempts</TableCell>
                    <TableCell>Points</TableCell>
                    <TableCell>Marked</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
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
          </>


        </div>
      </div>
    </div>
  )
}

export default Questions
