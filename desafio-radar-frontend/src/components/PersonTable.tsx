import React, { useEffect, useState } from 'react';
import { Table, Button, Input, Form } from 'antd';
import api from '../api/api';

interface Person {
  id: number;
  name: string;
  gender: string;
  birthDate: string;
  phone: string;
  email: string;
}

interface PersonListProps {
  onEdit: (person: Person) => void;
}

const PersonList: React.FC<PersonListProps> = ({ onEdit }) => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPersons = async () => {
    setLoading(true);
    const response = await api.get("/persons");
    setPersons(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  const deletePerson = async (id: number) => {
    await api.delete(`/persons/${id}`);
    fetchPersons();
  };

  const handleSearch = async (value: any) => {
    setLoading(true);
    const { name, email } = value;
    const response = await api.get("/persons/search", { params: { name, email }});
    setPersons(response.data);
    setLoading(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Birth Date',
      dataIndex: 'birthDate',
      key: 'birthDate',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Person) => (
        <span>
          <Button onClick={() => onEdit(record)}>Edit</Button>
          <Button onClick={() => deletePerson(record.id)} danger>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const width = { width: 500 }
  const marginLeft = { marginLeft: "20px" }
  const data = persons.sort((a, b) => (b.id - a.id));

  return (
    <div style={{ marginTop: 30 }}>
      <Form name="personSearch" style={{ display: "flex" }} onFinish={handleSearch}>
        <Form.Item name="name" label="Name">
          <Input style={width}/>
        </Form.Item>
        <Form.Item name="email" label="Email" style={marginLeft}>
          <Input style={width}/>
        </Form.Item>
        <Form.Item style={marginLeft}>
          <Button type="primary" htmlType="submit">Search</Button>
          <Button danger htmlType="reset" onClick={() => fetchPersons()}>Clear</Button>
        </Form.Item>
      </Form>
     
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default PersonList;
