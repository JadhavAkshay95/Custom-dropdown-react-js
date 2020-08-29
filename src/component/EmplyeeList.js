import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import EmpDetails from "./EmpDetails";
import { context } from "./Home";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const EmployeeList = ({ state }) => {
  const dispatch = useContext(context);
  const classes = useStyles();
  const [openDetails, setopenDetails] = useState(false);
  const [emp, setEmp] = useState();

  const handleClickOpen = (row) => {
    if (!openDetails) {
      setEmp(row);
    }
    setopenDetails(!openDetails);
  };

  useEffect(() => {
    dispatch({ type: "GET_DATA" });
  }, []);

  return (
    <>
      <div>
        <p className="message">Search the right candidate from below list</p>
        <p className="hedaer">Employee list</p>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Desiganation</TableCell>
                <TableCell>Technologies</TableCell>
                <TableCell>Skill</TableCell>
                <TableCell>Availability</TableCell>
                <TableCell>Base Location</TableCell>
                <TableCell>Open Relocate</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state && state.length
                ? state.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.designation}</TableCell>
                      <TableCell>
                        {row.technologies &&
                          row.technologies.length &&
                          row.technologies.join(", ")}
                      </TableCell>
                      <TableCell>
                        {row.skills &&
                          row.skills.length &&
                          row.skills.join(", ")}
                      </TableCell>
                      <TableCell>{row.avaibility}</TableCell>
                      <TableCell>
                        {row.location &&
                          row.location.length &&
                          row.location.join(", ")}
                      </TableCell>
                      <TableCell>
                        {row.isOpenForRelocation ? "Yes" : "No"}
                      </TableCell>
                      <TableCell>
                        <Button
                          style={{
                            fontSize: "12px",
                            textTransform: "capitalize",
                          }}
                          variant="contained"
                          color="primary"
                          onClick={() => handleClickOpen(row)}
                        >
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : <p>No data available for this filters</p>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <EmpDetails
        employee={emp}
        open={openDetails}
        handleClickOpen={handleClickOpen}
      />
    </>
  );
};

export default EmployeeList;
