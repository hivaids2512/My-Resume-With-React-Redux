import React from "react";
import SectionItem from "./SectionItem";
import { connect } from "react-redux";
import { getSectionList } from "../../../state/actions/section/SectionAction";
import CircularProgress from "material-ui/CircularProgress";
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
        {this.props.rows
          ? this.props.rows.map((row, index) => {
              return (
                <div className="row margin-top-bottom-15" key={index}>
                  {row.map(section => {
                    return (
                      <div className="col-md-6" key={section.name}>
                        <SectionItem key={section.name + index} section={section} />
                      </div>
                    );
                  })}
                </div>
              );
            })
          : <div className="center">
              <CircularProgress />
            </div>}
      </div>
    );
  }
}

function parseToRows(sections) {
  if (sections) {
    let size = 2
    return new Array(Math.ceil(sections.length / size)).fill("")
    .map(function() { return this.splice(0, size) }, sections.slice());
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
