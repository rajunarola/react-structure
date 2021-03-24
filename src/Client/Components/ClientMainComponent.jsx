import React from 'react'
import { getAllManufacturers } from '../../Services/TableService'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'
import { notification } from 'antd'
import { connect } from 'react-redux'
import { getAllData, getAllDataError } from '../../redux/action/TableAction'
class ClientMainComponent extends React.Component {

    state = {
        manuData: [],
        page: 0,
        currentPage: 1
    }

    componentDidMount() {
        this.apiCall(1)
    }

    apiCall = (data) => {
        getAllManufacturers(data).then(res => {
            if (res.data.status === true) {
                this.setState({ manuData: res.data.data }, () => {
                    this.setState({ page: Math.round(res.data.message / 5) }, () => {
                        console.log('this.state.page => ', this.state.page);
                        this.props.dispatch(getAllData(res.data.data))
                    })
                })
            } else {
                this.props.dispatch(getAllDataError('error'))

            }
        }).catch(err => {
            this.props.dispatch(getAllDataError('error'))
            notification.error({
                message: 'Error',
                description: 'Something went wrong! Please try again!'
            });
        });

    }

    pageLoop = () => {
        var pages = [];
        for (let index = 1; index <= this.state.page; index++) {
            const element = index;
            pages.push(element)
        }
        return <div>{pages && pages.map(data => (
            <span span className="mr-5" style={{ backgroundColor: this.state.currentPage === data ? 'blue' : 'transparent' }} onClick={() => this.changePage(data)}>{data}</span>
        ))}</div>
    }

    changePage = (data) => {
        this.setState({ currentPage: data }, () => {
            this.apiCall(data)
        })
    }

    render() {

        const { manuData } = this.state;

        return (
            <div>
                <Link to="/client-dashboard-antd">Table With ANTD</Link>
                <Link to="/client-dashboard-redux">Table With Redux</Link>
                <table className="table table-responsive">
                    <tr>
                        <th>Name</th>
                        <th>Created By</th>
                        <th>Record Status</th>
                        <th>Date Created</th>
                    </tr>
                    {manuData && manuData.map(data => (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.createdByUser}</td>
                            <td>{data.recordStatus}</td>
                            <td>{moment(data.dateCreated).format('MM-DD-YYYY')}</td>
                        </tr>
                    ))}
                </table>
                <p>{this.pageLoop()}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tableData: state
    }
}
export default withRouter(connect(mapStateToProps)(ClientMainComponent));

