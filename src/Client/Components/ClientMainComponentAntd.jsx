import React from 'react'
import { getAllManufacturers, postManufacturers } from '../../Services/TableService'
import { Button, Form, Input, notification, Table } from 'antd'
import { Modal } from 'react-bootstrap'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ExportCSV } from './ExportAsCSV';
import Pdf from "react-to-pdf";

export default class ClientMainComponentAntd extends React.Component {

  ref = React.createRef();
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 5,
    },
    loading: false,
    showModal: false
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true }, () => {
      getAllManufacturers(params.pagination.current).then(res => {
        console.log(res);
        this.setState({
          loading: false,
          data: res.data.data,
          pagination: {
            ...params.pagination,
            total: res.data.message,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      }).catch(err => {
        notification.error({
          message: 'Error',
          description: 'Something went wrong!'
        })
      });
    });
  };

  render() {
    const { data, pagination, loading, showModal } = this.state;
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: name => `${name}`,
        width: '20%',
      },
      {
        title: 'RecordStatus',
        dataIndex: 'recordStatus',
        render: recordStatus => `${recordStatus}`,
        width: '20%',
      },
      {
        title: "Created By",
        dataIndex: "createdByUser",
        key: "createdByUser",
        sorter: (a, b) => a.createdByUser.localeCompare(b.createdByUser)
      },
    ];

    const addManuFacturer = (values) => {
      console.log('values => ', values);
      const data = {
        Id: 0,
        Name: values.manufacturerName,
        RecordStatusId: 1,
        CreatedBy: 17,
        ModifiedBy: 17
      }
      postManufacturers(data).then(res => {
        if (res.data.message === "OK") {
          this.setState({ loading: false, showModal: false }, () => {
            const { pagination } = this.state;
            this.fetch({ pagination });
            notification.success({
              message: 'Success',
              description: 'Manufacturer data has been successfully added!'
            });
          })
        } else {
          this.setState({ loading: false, showModal: false }, () => {
            notification.info({
              message: 'Error',
              description: 'A record with the name already exists in database. The save for this record will not be finalized!'
            });
          });
        }
      }).catch(err => {
        this.setState({ loading: false, showModal: false }, () => {
          notification.error({
            message: 'Error',
            description: 'There was an error while adding Manufacturer Data!'
          });
        });
      });

    }

    return (
      <>
        <button className="btn btn-dark" onClick={() => this.setState({ showModal: true })}>Add Manufacturer</button>
        <Pdf targetRef={this.ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={this.ref}>
          <Table columns={columns} dataSource={data} pagination={pagination} loading={loading} onChange={this.handleTableChange} />
        </div>
        <div className="col-md-4 center">
          <ExportCSV csvData={data} fileName={"fileName"} />
        </div>
        {showModal &&
          <Modal show={showModal}>
            <div className="container">
              <Form onFinish={addManuFacturer}>
                <Form.Item name="manufacturerName" label="Manufacturer Name">
                  <Input />
                </Form.Item>
                <Button htmlType="submit">Submit</Button>
              </Form>
            </div>
          </Modal>
        }
      </>
    );
  }
}