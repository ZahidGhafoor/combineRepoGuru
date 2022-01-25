import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import eye from "../../Assets/eye.png"


export default function MaterialTableDemo() {
  const theme = createMuiTheme({
    overrides: {
      MuiTable: {
        root: {  //This can be referred from Material UI API documentation. 
          borderCollapse: 'separate',
          borderSpacing: '0px 15px',


        },
      },
      MuiInput: {
        underline: {
          '&::before': {
            borderBottom: '0px',
          },
        }
      }
    },
  });
  const [state, setState] = React.useState({
    columns: [
      { title: "Date", field: "date" },
      {
        title: "Customer ID", field: "cusID",
        cellStyle: {
          color: '#00825A',
          fontSize: '12px',
          border: 'none',
          paddingTop: '0px',
          paddingBottom: '0px'
        },
      },
      {
        title: "Student Name", field: "name",
        cellStyle: {
          color: '#E29522',
          border: 'none',
          paddingTop: '0px',
          paddingBottom: '0px'
        },
      },
      {
        title: "Payment", field: "payment",
        cellStyle: {
          color: '#00825A',
          border: 'none',
          paddingTop: '0px',
          paddingBottom: '0px'
        },
      },
      { title: "Invoice", field: "invoice" },
      { title: "Receipt", field: "receipt" },
      {
        title: "Returning", field: "returning",
        cellStyle: {
          color: '#00825A',
          border: 'none',
          paddingTop: '10px',
          paddingBottom: '10px'
        },
      },
      { title: "User", field: "user" },
      {
        title: "Language", field: "language",
        cellStyle: {
          color: 'red',
          border: 'none',
          paddingTop: '0px',
          paddingBottom: '0px'
        },
      }
    ],
    data: [
      {
        date: "19.03.2021",
        cusID: "GURU-15671583",
        name: "James Westervelt",
        payment: "Paypal",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      {
        date: "11.03.2021",
        cusID: "GURU-25671583",
        name: "Zahid Westervelt",
        payment: "Stripe",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      {
        date: "11.03.2021",
        cusID: "GURU-25671583",
        name: "Zahid Westervelt",
        payment: "Stripe",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      {
        date: "11.03.2021",
        cusID: "GURU-25671583",
        name: "Zahid Westervelt",
        payment: "Stripe",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      {
        date: "11.03.2021",
        cusID: "GURU-25671583",
        name: "Zahid Westervelt",
        payment: "Stripe",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      {
        date: "11.03.2021",
        cusID: "GURU-25671583",
        name: "Zahid Westervelt",
        payment: "Stripe",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      {
        date: "11.03.2021",
        cusID: "GURU-25671583",
        name: "Zahid Westervelt",
        payment: "Stripe",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      {
        date: "11.03.2021",
        cusID: "GURU-25671583",
        name: "Zahid Westervelt",
        payment: "Stripe",
        invoice: <>#526520 <img src={eye} alt="" /></>,
        receipt: <>#526520 <img src={eye} alt="" /></>,
        returning: "No",
        user: "Online",
        language: "German"
      },
      
    ]
  });

  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        title={<> Accounts <br />total accounts </>}
        columns={state.columns}
        data={state.data}

        options={{
          exportButton: {
            csv: false,
            pdf: true,
            backgroundColor: "red",
            height: "40px",
            width: "40px",
          },
          pageSize: 8,
          pageSizeOptions: [10, 25, 50, 100],

          rowStyle: {
            backgroundColor: '#F9F9F9',
            padding: '50px',
            color: '#2B3040',
            fontSize: '10px',
            marginTop: "8px"
          },
          headerStyle: {
            backgroundColor: '#FFF',
            color: '#2B3040',
            fontSize: '10px',
            fontWeight: "700",
            border: 'none',
            paddingTop: '0px',
            paddingBottom: '0px',
          },
          cellStyle: {
            border: 'none',
            paddingTop: '0px',
            paddingBottom: '0px',
            margingTop: '10px',
          },
          searchFieldStyle: {
            backgroundColor: '#FAFAFA',
            borderRadius: '10px',
            border: 'none',
            // width: "100%",
            float: "right"

          }
        }}
      />
    </ThemeProvider>
  );
}
