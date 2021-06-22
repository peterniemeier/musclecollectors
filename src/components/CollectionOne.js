import React from 'react';
import { Component } from 'react';
import muscleData from '../muscleData.js';
import PropTypes from 'prop-types';

class CollectionOne extends Component{

    constructor(props) {
      super(props);

      let displaySetValue = new Set();
      let selectedColorsSet = new Set();
      selectedColorsSet.add("F");
      selectedColorsSet.add("R");
      selectedColorsSet.add("B");
      selectedColorsSet.add("L");
      selectedColorsSet.add("O");
      selectedColorsSet.add("M");
      selectedColorsSet.add("P");
      selectedColorsSet.add("GR");
      selectedColorsSet.add("G");
      selectedColorsSet.add("S");
      let selectedClassesSet = new Set();
      selectedClassesSet.add("A");
      selectedClassesSet.add("B");
      selectedClassesSet.add("B");
      this.displaySetValue = displaySetValue;
      // console.log(displaySetValue);
      this.handleSearchCriteriaChange = this.handleSearchCriteriaChange.bind(this);
      // this.handleInputChange = this.handleInputChange.bind(this);
      // this.handleInputClassChange = this.handleInputClassChange.bind(this);
      // this.handleInputDirectionChange = this.handleInputDirectionChange.bind(this);
      const colorMap = new Map();
      colorMap["F"] = true;
      colorMap["R"] = true;
      colorMap["B"] = true;
      colorMap["L"] = true;
      colorMap["O"] = true;
      colorMap["M"] = true;
      colorMap["P"] = true;
      colorMap["GR"] = true;
      colorMap["G"] = true;
      colorMap["S"] = true;
      const classMap = new Map();
      classMap["A"] = true;
      classMap["B"] = true;
      classMap["C"] = true;
      this.state = {
        searchCriteria: this.props.collectionOne,
        displaySet: displaySetValue,
        displayColors: colorMap,
        displayClass: classMap,
        displayDirection: false,
        selectedColors: selectedColorsSet,
        selectedClasses: selectedClassesSet,

      };
    }
    //
    // handleInputChange(event) {
    //   const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
    //   var someProperty = this.state.displayColors;
    //   someProperty[name] = value;
    //   this.setState({displayColors: someProperty});
    // }
    //
    // handleInputClassChange(event) {
    //   const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
    //   var someProperty = this.state.displayClass;
    //   someProperty[name] = value;
    //   this.setState({displayClass: someProperty});
    // }
    //
    // handleInputDirectionChange(event) {
    //   const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
    //   this.setState(function(prevState, props) {
    //     return {displayDirection: value
    //       };
    //   });
    // }
    //
    static propTypes = {
      handleSearchCriteria: PropTypes.func.isRequired,
    };

    handleSearchCriteriaChange = (event) => {
      const { handleSearchCriteriaChange } = this.props;
      // handleSearchCriteria(event);
      console.log(handleSearchCriteriaChange);
    }

    render() {
      //console.log(muscleData);
      // console.log(this.state.displayColors);
      const allMuscleFigures = [];

      // console.log(muscleData[1].class);
      // for (let k in muscleData[1].class) {
      //     console.log(muscleData[1].class[k]);
      //     let arr = muscleData[1].class[k];
      //     arr.forEach((color, i) => {
      //
      //       console.log(color);
      //     });
      // }
      // if (this.displaySetValue.size == 0) {
      //   console.log("match");
      // } else {
      //   console.log("no match");
      // }

      for (let k in muscleData) {
        // console.log(this.displaySetValue.size);
        // console.log(this.displaySetValue);
        if (!this.displaySetValue.has(k) && this.displaySetValue.size !== 0 && !this.displaySetValue.has("")) {
          continue;
        }
        if (this.displaySetValue.size === 1 && !this.displaySetValue[0] === "") {
          continue
        }

        // console.log(muscleData[k].classes);

        let displayMuscle = true;
        //console.log(muscleData[k]);
        let classData = [];
        // let allColors = [];
        // let allClasses = [];
        for (let ke in muscleData[k].classes) {
        //   allClasses.push(ke);
        //   //console.log("Class is " + ke);
        //   let classes = muscleData[k].classes[ke];
        //   let colors = []
        //   let specificColor = "";
          // console.log(muscleData[k].classes["A"]);
          // classes.forEach((color, i) => {
          //   allColors.push(color);
          //   switch (color) {
          //     case "F":
          //       specificColor = "circleFlesh"
          //       break;
          //     case "R":
          //       specificColor = "circleRed"
          //       break;
          //     case "B":
          //       specificColor = "circleBlue"
          //       break;
          //     case "L":
          //       specificColor = "circleLightBlue"
          //       break;
          //     case "O":
          //       specificColor = "circleOrange"
          //       break;
          //     case "M":
          //       specificColor = "circleMagenta"
          //       break;
          //     case "S":
          //       specificColor = "circleSalmon"
          //       break;
          //     case "P":
          //       specificColor = "circlePurple"
          //       break;
          //     case "GR":
          //       specificColor = "circleGrape"
          //       break;
          //     case "G":
          //       specificColor = "circleGreen"
          //       break;
          //
          //     default:
          //       specificColor = "F"
          //   }
          //
          //
          //
          // // classes.any(function(classArray) {
          // //   if (classArray.indexOf(color) != -1) {
          // //     colors.push(<li class="individualColor"><div id={`${specificColor}`}></div></li>);
          // //   }
          // // });
          //
          //   //console.log("Color is " + color);
          //   // colors.push(<li class="individualColor"><div id={`${specificColor}`}></div></li>);
          // });
          //
          // classData.push(
          //   <div class="classDataLineItem">{ke}: <div class="colorsByClass"><ui class="colorsByClass">{colors}</ui></div></div>
          // );
          // let classA = [];
          // let classB = [];
          // let classC = [];

          // if (muscleData[k].classes["A"] !== undefined) {
          //   // console.log(classA);
          //   classA = muscleData[k].classes["A"];
          //   // console.log(classA);
          // }
          // if (muscleData[k].classes["B"] !== undefined) {
          //   classB = muscleData[k].classes["B"];
          // }
          // if (muscleData[k].classes["C"] !== undefined) {
          //   classC = muscleData[k].classes["C"];
          // }
          // console.log(classA);
          // let stateCopy = this.state;
          // if (classA.length > 0) {
          //   classA.forEach(function(classColor) {
          //     if (stateCopy.displayColors[classColor] === true
          //     && stateCopy.displayClass["A"] === true) {
          //       displayMuscle = true;
          //     }
          //   });
          // }
          // if (classB.length > 0) {
          //   classB.forEach(function(classColor) {
          //     if (stateCopy.displayColors[classColor] === true
          //     && stateCopy.displayClass["B"] === true) {
          //       displayMuscle = true;
          //     }
          //   });
          // }
          // if (classC.length > 0) {
          //   classC.forEach(function(classColor) {
          //     if (stateCopy.displayColors[classColor] === true
          //     && stateCopy.displayClass["C"] === true) {
          //       displayMuscle = true;
          //     }
          //   });
          // }
          // classA.forEach(function(color) {
          //   if (this.state.displayColor[color] === true
          //   && this.state.displayClass[ke] === true) {
          //     displayMuscle = true;
          //   }
          // }.bind(this));
          //
          // classB.forEach(function(color) {
          //   if (this.state.displayColor[color] === true
          //   && this.state.displayClass[ke] === true) {
          //     displayMuscle = true;
          //   }
          // }.bind(this));
          //
          // classC.forEach(function(color) {
          //   if (this.state.displayColor[color] === true
          //   && this.state.displayClass[ke] === true) {
          //     displayMuscle = true;
          //   }
          // }.bind(this));
          // displayMuscle = true;
        }
        // console.log(this.state.displayColors.F);



        let classDataSpacing = "classDataOne";
        // console.log(Object.keys(muscleData[k].classes).length);
        switch (Object.keys(muscleData[k].classes).length) {
          case 1:
            classDataSpacing = "classDataOne";
            break;
          case 2:
            classDataSpacing = "classDataTwo";
            break;
          case 3:
            classDataSpacing = "classDataThree"
            break;
          default:
          classDataSpacing = "classDataOne";
        }

        if (displayMuscle) {
          // let direction = this.state.displayDirection ? "b" : "a";

          allMuscleFigures.push(<div class="individualMuscleDataNoColorOrClassData">
            <div class="classificationNumber">{k}</div>
            <br></br>
            {/*}{muscleData[k].name}*/}
            <br></br>
            <img src={process.env.PUBLIC_URL + '/images/web/pngs/'+k+'a.png'} width="150px" height="150px" title={muscleData[k].name} alt="nope"/>
            {/*}<div class={`${classDataSpacing}`}>
              {classData}
            </div>*/}
          </div>);
        }

      }




        return (
          <div>
            Use the search field to populate this screen with the figures from one Collection.
            <div class="searchControls">
              Use comma-separated numbers (e.g. 1,9,236)
              <input type="text" value={this.state.searchCriteria} onChange={this.handleSearchCriteriaChange} />
            </div>
              <br></br>
            <div class="allMuscleData">
              {allMuscleFigures}
            </div>
          </div>

        )
    }

}

export default CollectionOne;
