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
    // let collectionOneSet = new Set();
    // let collectionTwoSet = new Set();
    // let matchCollectionSet = new Set();
    let muscleContainerSet = "";
    let collectionOneSet = "";
    let collectionTwoSet = "";
    let matchCollectionSet = "";

    this.state = {
      activeTab: this.props.children[0].props.label,
      searchCriteria: "",
      muscleContainer: muscleContainerSet,
      collectionOne: collectionOneSet,
      collectionTwo: collectionTwoSet,
      matchCollection: matchCollectionSet,
    };
  }

  handleSearchCriteriaChange(event){
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

  onClickTabItem = (tabNameLabel) => {
    this.setState(function(prevState, props){
      return { activeTab: tabNameLabel }
    });
  }

  render() {
    const {
      onClickTabItem,
      handleSearchCriteriaChange,
      props: {
        children,
      },
      state: {
        searchCriteria,
        activeTab,
        muscleContainerSet,
        collectionOne,
        collectionTwo,
        matchCollection,
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
                searchCriteria={searchCriteria}
                handleSearchCriteriaChange={handleSearchCriteriaChange}
                muscleContainerSet={muscleContainerSet}
                collectionOne={collectionOne}
                collectionTwo={collectionTwo}
                matchCollection={matchCollection}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            console.log(activeTab);
            if (activeTab === "Master Checklist") return <MuscleContainer />;
            if (activeTab === "Collection One") return <CollectionOne />;
            if (activeTab === "Collection Two") return <CollectionTwo />;
            if (activeTab === "Matches") return <Matches />;
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
