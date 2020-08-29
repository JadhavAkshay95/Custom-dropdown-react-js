import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CustomMultiSelect from "./CustomMultiSelect";
import Slider from "@material-ui/core/Slider";
import { context } from "./Home";
import { skillData, locationData, techData, marksData } from "./Data";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "100%",
    textAlign: "initial",
  },
});
const EmpFilter = () => {
  const dispatch = useContext(context);
  const [technology, setTechnology] = useState([]);
  const [skills, setSkills] = useState([]);
  const [location, setLocation] = useState([]);
  const [exp, setExp] = useState(0);
  const [] = useState(30);
  const [clear, setClear] = useState(false);

  const classes = useStyles();

  const skillArray = skillData;
  const techArray = techData;
  const locationArray = locationData;
  const marks = marksData;

  const filter = () => {
    dispatch({
      type: "FILTER_DATA",
      payload: {
        skills,
        technology,
        location,
        exp,
      },
    });
  };

  const cancel = () => {
    dispatch({
      type: "CLEAR_FILTER",
    });

    setTechnology(technology);
    setSkills(skills);
    setLocation(location);
    setClear(true);
  };

  const handleChange = (event, newValue) => {
    setExp(newValue);
    setClear(false);
  };

  return (
    <>
      <div className="filter-container">
        <Card className={classes.root}>
          <span className="filter-by">Filter By</span>
          <div className="filter-container-test">
            <div className="filter-data">
              <CustomMultiSelect
                listData={techArray}
                label={"Technology"}
                handleSelectedList={($event) => {
                  setTechnology($event);
                  setClear(false);
                }}
                clear={clear}
                key="1"
              />
            </div>
            <div className="filter-data">
              <CustomMultiSelect
                listData={skillArray}
                label={"Skills"}
                handleSelectedList={($event) => {
                  setSkills($event);
                  setClear(false);
                }}
                key="12"
                clear={clear}
              />
            </div>
            <div className="test999">
              <div className="drop-down-naame">Total Experiene</div>
              <Slider
                valueLabelDisplay="auto"
                aria-labelledby="continuous-slider"
                value={exp}
                onChange={handleChange}
                defaultValue={0}
                marks={marks}
                clear={clear}
              />
            </div>
            <div className="filter-data">
              <CustomMultiSelect
                listData={locationArray}
                label={"Location"}
                handleSelectedList={($event) => {
                  setLocation($event);
                  setClear(false);
                }}
                key="121"
                clear={clear}
              />
            </div>
          </div>
          <CardActions className="filter-footer">
            <Button
              style={{ fontSize: "12px", textTransform: "capitalize" }}
              variant="outlined"
              size="small"
              color="primary"
              onClick={cancel}
            >
              Cancel
            </Button>
            <Button
              style={{ fontSize: "12px", textTransform: "capitalize" }}
              variant="contained"
              size="small"
              color="primary"
              onClick={filter}
            >
              Done
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default EmpFilter;
