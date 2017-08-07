import React from "react";
import SectionItem from "./SectionItem";
import { connect } from "react-redux";
import { getSectionList } from "../../../state/actions/section/SectionAction";
import RaisedButton from "material-ui/RaisedButton";

class SectionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let resumeId = this.props.routeParams.resumeId;
    if (resumeId) {
      this.props.getSectionList(resumeId);
    }
  }

  render() {
    console.log(this.props.sectionData.sections)
    return (
      <div>
        <div className="row">
          {this.props.sectionData.sections
            ? this.props.sectionData.sections.map((section, index) =>
                <div className="col-md-3">
                  <SectionItem key={index} section={section} />
                </div>
              )
            : ""}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sectionData: state.sectionData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSectionList: resumeId => dispatch(getSectionList(resumeId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);
