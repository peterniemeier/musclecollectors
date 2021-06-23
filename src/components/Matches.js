import React from 'react';
import { Component } from 'react';
import muscleData from '../muscleData.js';

class Matches extends Component{

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
      let setOne = this.props.displaySetOneValue;
      let setTwo = this.props.displaySetTwoValue;
      this.displaySetValue = new Set([...setOne, ...setTwo]);
      this.combinedList = "";
      this.setOne = setOne;
      this.setTwo = setTwo;
      this.copyMatchCritera = this.copyMatchCritera.bind(this);
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
        searchCriteria: "",
        displaySet: displaySetValue,
        displayColors: colorMap,
        displayClass: classMap,
        displayDirection: false,
        selectedColors: selectedColorsSet,
        selectedClasses: selectedClassesSet,
      };
    }

    copyMatchCritera(event) {
      let copyText = document.getElementById("searchMatchValue");
      console.log(copyText);
      copyText.select();
      copyText.setSelectionRange(0, 9999999); /* For mobile devices */
      document.execCommand("copy");
      alert("Copied the text: " + copyText.value);
    }

    render() {
      const allMuscleFigures = [];
      for (let k in muscleData) {
        if (!(this.setOne.has(k) && this.setTwo.has(k))) {
          continue;
        }
        this.combinedList = this.combinedList + k + ",";
        let displayMuscle = true;
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
            This page shows which M.U.S.C.L.E. figures are in both Collection One and Collection Two
            <br></br>
            <br></br>
            <input id="searchMatchValue" type="text" value={this.combinedList}></input>
            <br></br>
            <input type="button" value="Copy list of matches to clipboard" onClick={this.copyMatchCritera} />
              <br></br>
            <div class="allMuscleData">
              {allMuscleFigures}
            </div>
          </div>
        )
    }
}

export default Matches;
