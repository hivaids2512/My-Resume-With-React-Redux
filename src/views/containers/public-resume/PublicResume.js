import React from "react";
import { connect } from "react-redux";
import { getPublicResume } from "../../../state/actions/public-resume/PublicResumeAction";
import SectionItem from "../section/SectionItem";
import CircularProgress from "material-ui/CircularProgress";

class PublicResume extends React.Component {
  componentDidMount() {
    let resumeId = this.props.routeParams.resumeId;
    if (resumeId) {
      this.props.getPublicResume(resumeId);
    }
  }

  render() {
    return (
      <div className="container-fluid" style={{ margin: "20px" }}>
        <div className="row">
          <h1>
            {this.props.publicResume ? this.props.publicResume.name : ""}
          </h1>
        </div>
        {this.props.rows
          ? this.props.rows.map((row, index) => {
              return (
                <div className="row margin-top-bottom-15" key={index}>
                  {row.map(section => {
                    return (
                      <div className="col-md-6" key={section._id}>
                        <SectionItem
                          resumeId={this.props.routeParams.resumeId}
                          key={section.name + index}
                          section={section}
                          actionsDisabled={true}
                        />
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
  let rows = [];
  if (state.publicResumeData.publicResume) {
    rows = state.publicResumeData.publicResume.sections;
  }
  return {
    rows: parseToRows(rows),
    publicResume: state.publicResumeData.publicResume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPublicResume: resumeId => dispatch(getPublicResume(resumeId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicResume);
