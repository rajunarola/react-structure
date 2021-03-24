import moment from 'moment';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class ClientTableDataViaRedux extends Component {
    render() {
        return (
            <div>
                <table className="table table-responsive">
                    <tr>
                        <th>Name</th>
                        <th>Created By</th>
                        <th>Record Status</th>
                        <th>Date Created</th>
                    </tr>
                    {this.props.tableDataInRedux && this.props.tableDataInRedux.map(data => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.createdByUser}</td>
                            <td>{data.recordStatus}</td>
                            <td>{moment(data.dateCreated).format('MM-DD-YYYY')}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        tableDataInRedux: state.table.data
    }
}

export default withRouter(connect(mapStateToProps)(ClientTableDataViaRedux));

