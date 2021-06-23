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
    };
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
            if (activeTab === "Master Checklist") return <MuscleContainer handleSearchCriteriaChange={handleSearchCriteriaChange} displaySetValue={displaySetValue} searchCriteria={searchCriteria}/>;
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
