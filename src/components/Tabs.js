import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import MuscleContainer from './MuscleContainer.js';
import CollectionOne from './CollectionOne.js';
import CollectionTwo from './CollectionTwo.js';
import Matches from './Matches.js';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.handleSearchCriteriaChange = this.handleSearchCriteriaChange.bind(this);
    this.handleCheckAll = this.handleCheckAll.bind(this);
    this.handleInputDirectionChange = this.handleInputDirectionChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClassChange = this.handleInputClassChange.bind(this);
    let displaySetValue = new Set();
    this.displaySetValue = displaySetValue;
    let displaySetCollectionOneValue = new Set();
    this.displaySetCollectionOneValue = displaySetValue;
    let displaySetCollectionTwoValue = new Set();
    this.displaySetCollectionTwoValue = displaySetValue;
    let muscleContainerSet = "";
    let collectionOneSet = "";
    let collectionTwoSet = "";
    let matchCollectionSet = "";
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
      activeTab: this.props.children[0].props.label,
      searchCriteria: "",
      searchCriteriaCollectionOne: "",
      searchCriteriaCollectionTwo: "",
      muscleContainer: muscleContainerSet,
      collectionOne: collectionOneSet,
      collectionTwo: collectionTwoSet,
      matchCollection: matchCollectionSet,
      displaySet: displaySetValue,
      displaySetCollectionOne: displaySetCollectionOneValue,
      displaySetCollectionTwo: displaySetCollectionTwoValue,
      displayColors: colorMap,
      displayClass: classMap,
      displayDirection: false,
    };
  }

  handleCheckAll(event) {
    switch(event.target.id) {
      case "uncheckInput":
      let uncheckAllColors = this.state.displayColors;
      let uncheckAllClasses = this.state.displayClass;
      uncheckAllColors["F"] = false;
      uncheckAllColors["R"] = false;
      uncheckAllColors["B"] = false;
      uncheckAllColors["L"] = false;
      uncheckAllColors["O"] = false;
      uncheckAllColors["M"] = false;
      uncheckAllColors["P"] = false;
      uncheckAllColors["GR"] = false;
      uncheckAllColors["G"] = false;
      uncheckAllColors["S"] = false;
      uncheckAllClasses["A"] = false;
      uncheckAllClasses["B"] = false;
      uncheckAllClasses["C"] = false;
      this.setState(function(prevState, props) {
        return {
          displayColors: uncheckAllColors,
          displayClass: uncheckAllClasses
          };
      });
      break;
      case "checkInput":
      let checkAllColors = this.state.displayColors;
      let checkAllClasses = this.state.displayClass;
      checkAllColors["F"] = true;
      checkAllColors["R"] = true;
      checkAllColors["B"] = true;
      checkAllColors["L"] = true;
      checkAllColors["O"] = true;
      checkAllColors["M"] = true;
      checkAllColors["P"] = true;
      checkAllColors["GR"] = true;
      checkAllColors["G"] = true;
      checkAllColors["S"] = true;
      checkAllClasses["A"] = true;
      checkAllClasses["B"] = true;
      checkAllClasses["C"] = true;
      console.log("here");
      this.setState(function(prevState, props) {
        return {
          displayColors: checkAllColors,
          displayClass: checkAllClasses
          };
      });
      break;
      default:
      let uncheckAllColorsDefault = this.state.displayColors;
      let uncheckAllClassesDefault = this.state.displayClass;
      uncheckAllColorsDefault["F"] = false;
      uncheckAllColorsDefault["R"] = false;
      uncheckAllColorsDefault["B"] = false;
      uncheckAllColorsDefault["L"] = false;
      uncheckAllColorsDefault["O"] = false;
      uncheckAllColorsDefault["M"] = false;
      uncheckAllColorsDefault["P"] = false;
      uncheckAllColorsDefault["GR"] = false;
      uncheckAllColorsDefault["G"] = false;
      uncheckAllColorsDefault["S"] = false;
      uncheckAllClassesDefault["A"] = false;
      uncheckAllClassesDefault["B"] = false;
      uncheckAllClassesDefault["C"] = false;
      this.setState(function(prevState, props) {
        return {
          displayColors: uncheckAllColorsDefault,
          displayClass: uncheckAllClassesDefault
          };
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let someProperty = this.state.displayColors;
    someProperty[name] = value;
    this.setState({displayColors: someProperty});
    this.forceUpdate()
  }

  handleInputClassChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let someProperty = this.state.displayClass;
    someProperty[name] = value;
    this.setState({displayClass: someProperty});
    this.forceUpdate()
  }

  handleInputDirectionChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(function(prevState, props) {
      return {displayDirection: value
        };
    });
    this.forceUpdate()
  }

  handleSearchCriteriaChange(event){
    console.log(event.target.id);
    let newValue = event.target.value;
    newValue = newValue.replace(/\s/g, "");
    newValue = newValue.split(",");
    let newDisplaySetValue = new Set();
    let shouldUpdateCriteria = false;

    newValue.forEach(function(v) {
      if (newDisplaySetValue.has(v) || parseInt(v) > 236) {
        shouldUpdateCriteria = false;
      } else {
        // console.log("Adding to set");
        newDisplaySetValue.add(v);
        shouldUpdateCriteria = true;
      }
      if (shouldUpdateCriteria) {
        switch(event.target.id) {
          case "searchCriteriaValue":
          this.displaySetValue = newDisplaySetValue;
          // console.log(this.displaySetValue);
          this.setState(function(prevState, props) {
            return {searchCriteria: newValue,
              displaySet: newDisplaySetValue
              };
          });
          break;
          case "searchCriteriaCollectionOneValue":
          this.displaySetCollectionOneValue = newDisplaySetValue;
          console.log("here");
          this.setState(function(prevState, props) {
            return {searchCriteriaCollectionOne: newValue,
              displaySetCollectionOne: newDisplaySetValue
              };
          });
          break;
          case "searchCriteriaCollectionTwoValue":
          this.displaySetCollectionTwoValue = newDisplaySetValue;
          this.setState(function(prevState, props) {
            return {searchCriteriaCollectionTwo: newValue,
              displaySetCollectionTwo: newDisplaySetValue
              };
          });
          break;
          default:
          this.displaySetValue = newDisplaySetValue;
          // console.log(this.displaySetValue);
          this.setState(function(prevState, props) {
            return {searchCriteria: newValue,
              displaySet: newDisplaySetValue
              };
          });
        }


      }
    }.bind(this));
  }

  onClickTabItem = (tabNameLabel) => {
    this.setState(function(prevState, props){
      return { activeTab: tabNameLabel }
    });
  }

  render() {
    const {
      onClickTabItem,
      handleSearchCriteriaChange,
      displaySetValue,
      displaySet,
      displaySetCollectionOneValue,
      displaySetCollectionTwoValue,
      handleCheckAll,
      handleInputDirectionChange,
      handleInputChange,
      handleInputClassChange,
      props: {
        children,
      },
      state: {
        activeTab,
        muscleContainerSet,
        collectionOne,
        collectionTwo,
        matchCollection,
        searchCriteria,
        searchCriteriaCollectionOne,
        searchCriteriaCollectionTwo,
        displayColors,
        displayClass,
        displayDirection
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            console.log(activeTab);
            if (activeTab === "Master Checklist") return <MuscleContainer handleInputClassChange={handleInputClassChange} handleInputChange={handleInputChange} handleInputDirectionChange={handleInputDirectionChange} displayDirection={displayDirection} displayColors={displayColors} displayClass={displayClass} handleCheckAll={handleCheckAll} handleSearchCriteriaChange={handleSearchCriteriaChange} displaySetValue={displaySetValue} searchCriteria={searchCriteria}/>;
            if (activeTab === "Collection One") return <CollectionOne handleSearchCriteriaChange={handleSearchCriteriaChange} displaySetValue={displaySetCollectionOneValue} searchCriteria={searchCriteriaCollectionOne}/>;
            if (activeTab === "Collection Two") return <CollectionTwo handleSearchCriteriaChange={handleSearchCriteriaChange} displaySetValue={displaySetCollectionTwoValue} searchCriteria={searchCriteriaCollectionTwo}/>;
            if (activeTab === "Matches") return <Matches displaySetOneValue={displaySetCollectionOneValue} displaySetTwoValue={displaySetCollectionTwoValue}/>;
            }

            // child.props.handleSearchCriteriaChange = handleSearchCriteriaChange;
            // return child.props.children;
          )}
        </div>
      </div>
    );
  }
}

export default Tabs;
