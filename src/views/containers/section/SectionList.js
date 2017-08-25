import React from "react";
import SectionItem from "./SectionItem";
import { connect } from "react-redux";
import { getSectionList } from "../../../state/actions/section/SectionAction";
import AddSection from "./AddSection";

class SectionList extends React.Component {
  componentDidMount() {
    let resumeId = this.props.routeParams.resumeId;
    if (resumeId) {
      this.props.getSectionList(resumeId);
    }
  }

  render() {
    return (
      <div>
        <AddSection resumeId={this.props.routeParams.resumeId} />
        {this.props.rows.length > 0
          ? this.props.rows.map((row, index) => {
              return (
                <div className="row margin-top-bottom-15" key={index}>
                  {row.map(section => {
                    return (
                      <div className="col-md-6" key={section.title}>
                        <SectionItem
                          resumeId={this.props.routeParams.resumeId}
                          key={section.name + index}
                          section={section}
                          actionsDisabled={false}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })
          : <div className="center">
              <h3>You have no section :)</h3>
            </div>}
      </div>
    );
  }
}

function parseToRows(sections) {
  if (sections) {
    let size = 2;
    return new Array(Math.ceil(sections.length / size))
      .fill("")
      .map(function() {
        return this.splice(0, size);
      }, sections.slice());
  }
  return [];
}

function mapStateToProps(state) {
  return {
    rows: parseToRows(state.sectionData.sections)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSectionList: resumeId => dispatch(getSectionList(resumeId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);
