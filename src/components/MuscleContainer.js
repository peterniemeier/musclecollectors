import React from 'react';
import { Component } from 'react';
import muscleData from '../muscleData.js';

class MuscleContainer extends Component{

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
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleInputClassChange = this.handleInputClassChange.bind(this);
      this.handleInputDirectionChange = this.handleInputDirectionChange.bind(this);
      this.copySearchCritera = this.copySearchCritera.bind(this);
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
        searchCriteria: this.props.displaySet,
        displaySet: displaySetValue,
        displayColors: colorMap,
        displayClass: classMap,
        displayDirection: false,
        selectedColors: selectedColorsSet,
        selectedClasses: selectedClassesSet,

      };
    }

    copySearchCritera(event) {
      let copyText = document.getElementById("searchCriteriaValue");
      copyText.select();
      copyText.setSelectionRange(0, 9999999); /* For mobile devices */
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      var someProperty = this.state.displayColors;
      someProperty[name] = value;
      this.setState({displayColors: someProperty});
    }

    handleInputClassChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      var someProperty = this.state.displayClass;
      someProperty[name] = value;
      this.setState({displayClass: someProperty});
    }

    handleInputDirectionChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState(function(prevState, props) {
        return {displayDirection: value
          };
      });
    }

    handleSearchCriteriaChange(event){
      // const {handleSearchCriteriaChange} = this.props;
      // handleSearchCriteriaChange(event);
      let newValue = event.target.value;
      newValue = newValue.replace(/\s/g, "");
      newValue = newValue.split(",");
      let newDisplaySetValue = new Set();
      let shouldUpdateCriteria = false;
      // console.log(this.state);

      newValue.forEach(function(v) {
        if (newDisplaySetValue.has(v) || parseInt(v) > 236) {
          shouldUpdateCriteria = false;
        } else {
          // console.log("Adding to set");
          newDisplaySetValue.add(v);
          shouldUpdateCriteria = true;
        }
        // console.log("Should criteria be updated? " + shouldUpdateCriteria);
        if (shouldUpdateCriteria) {
          this.displaySetValue = newDisplaySetValue;
          // console.log(this.displaySetValue);
          this.setState(function(prevState, props) {
            return {searchCriteria: newValue,
              displaySet: newDisplaySetValue
              };
          });
        }
      }.bind(this));
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

        let displayMuscle = false;
        //console.log(muscleData[k]);
        let classData = [];
        let allColors = [];
        let allClasses = [];
        for (let ke in muscleData[k].classes) {
          allClasses.push(ke);
          //console.log("Class is " + ke);
          let classes = muscleData[k].classes[ke];
          let colors = []
          let specificColor = "";
          // console.log(muscleData[k].classes["A"]);
          classes.forEach((color, i) => {
            allColors.push(color);
            switch (color) {
              case "F":
                specificColor = "circleFlesh"
                break;
              case "R":
                specificColor = "circleRed"
                break;
              case "B":
                specificColor = "circleBlue"
                break;
              case "L":
                specificColor = "circleLightBlue"
                break;
              case "O":
                specificColor = "circleOrange"
                break;
              case "M":
                specificColor = "circleMagenta"
                break;
              case "S":
                specificColor = "circleSalmon"
                break;
              case "P":
                specificColor = "circlePurple"
                break;
              case "GR":
                specificColor = "circleGrape"
                break;
              case "G":
                specificColor = "circleGreen"
                break;

              default:
                specificColor = "F"
            }



          // classes.any(function(classArray) {
          //   if (classArray.indexOf(color) != -1) {
          //     colors.push(<li class="individualColor"><div id={`${specificColor}`}></div></li>);
          //   }
          // });

            //console.log("Color is " + color);
            colors.push(<li class="individualColor"><div id={`${specificColor}`}></div></li>);
          });

          classData.push(
            <div class="classDataLineItem">{ke}: <div class="colorsByClass"><ui class="colorsByClass">{colors}</ui></div></div>
          );
          let classA = [];
          let classB = [];
          let classC = [];

          if (muscleData[k].classes["A"] !== undefined) {
            // console.log(classA);
            classA = muscleData[k].classes["A"];
            // console.log(classA);
          }
          if (muscleData[k].classes["B"] !== undefined) {
            classB = muscleData[k].classes["B"];
          }
          if (muscleData[k].classes["C"] !== undefined) {
            classC = muscleData[k].classes["C"];
          }
          // console.log(classA);
          let stateCopy = this.state;
          if (classA.length > 0) {
            classA.forEach(function(classColor) {
              if (stateCopy.displayColors[classColor] === true
              && stateCopy.displayClass["A"] === true) {
                displayMuscle = true;
              }
            });
          }
          if (classB.length > 0) {
            classB.forEach(function(classColor) {
              if (stateCopy.displayColors[classColor] === true
              && stateCopy.displayClass["B"] === true) {
                displayMuscle = true;
              }
            });
          }
          if (classC.length > 0) {
            classC.forEach(function(classColor) {
              if (stateCopy.displayColors[classColor] === true
              && stateCopy.displayClass["C"] === true) {
                displayMuscle = true;
              }
            });
          }
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
          let direction = this.state.displayDirection ? "b" : "a";

          allMuscleFigures.push(<div class="individualMuscleData">
            <div class="classificationNumber">{k}</div>
            <br></br>
            {/*}{muscleData[k].name}*/}
            <br></br>
            <img src={process.env.PUBLIC_URL + '/images/web/pngs/'+k+direction+'.png'} width="150px" height="150px" title={muscleData[k].name} alt="nope"/>
            <div class={`${classDataSpacing}`}>
              {classData}
            </div>
          </div>);
        }

        }




        return (

          <div>
            <div class="searchControls">
              Search with comma-separated numbers. Example: 1,9,236
              <br></br>
              <input id="searchCriteriaValue" type="text" value={this.state.searchCriteria} onChange={this.handleSearchCriteriaChange} />
              <br></br>
              <input type="button" value="Copy search critera to clipboard" onClick={this.copySearchCritera} />
              <br></br>
              <div class="colorControls">
                <div class="flesh">
                  Flesh
                  <input type="checkbox"
                    name="F"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["F"]} />
                </div>
                <div class="red">
                  Red
                  <input type="checkbox"
                    name="R"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["R"]} />
                </div>
                <div class="salmon">
                  Salmon
                  <input type="checkbox"
                    name="S"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["S"]} />
                </div>
                <div class="orange">
                  Orange
                  <input type="checkbox"
                    name="O"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["O"]} />
                </div>
                <div class="magenta">
                  Magenta
                  <input type="checkbox"
                    name="M"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["M"]} />
                </div>
                <div class="purple">
                  Purple
                  <input type="checkbox"
                    name="P"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["P"]} />
                </div>
                <div class="grape">
                  Grape
                  <input type="checkbox"
                    name="GR"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["GR"]} />
                </div>
                <div class="blue">
                  Blue
                  <input type="checkbox"
                    name="B"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["B"]} />
                </div>
                <div class="lightBlue">
                  Light Blue
                  <input type="checkbox"
                    name="L"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["L"]} />
                </div>
                <div class="green">
                  Green
                  <input type="checkbox"
                    name="G"
                    onChange={this.handleInputChange}
                    checked={this.state.displayColors["G"]} />
                </div>
              </div>
              <br></br>
              <div class="classControls">
                <div class="A">
                  Class A
                  <input type="checkbox"
                    name="A"
                    onChange={this.handleInputClassChange}
                    checked={this.state.displayClass["A"]} />
                </div>
                <div class="B">
                  Class B
                  <input type="checkbox"
                    name="B"
                    onChange={this.handleInputClassChange}
                    checked={this.state.displayClass["B"]} />
                </div>
                <div class="C">
                  Class C
                  <input type="checkbox"
                    name="C"
                    onChange={this.handleInputClassChange}
                    checked={this.state.displayClass["C"]} />
                </div>
              </div>
              <br></br>
              <div class="swapDirection">
                <div class="swapButton">
                  Show back
                  <input type="checkbox"
                    name="swapButton"
                    onChange={this.handleInputDirectionChange}
                    checked={this.state.displayDirection} />
                </div>
              </div>
            </div>

            <div class="allMuscleData">
              {allMuscleFigures}
            </div>
          </div>
        )
    }

}

export default MuscleContainer;
