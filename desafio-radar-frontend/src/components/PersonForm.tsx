import React from 'react';
import { Form, Input, Button, DatePicker, Radio } from 'antd';
import moment from 'moment';
import api from '../api/api';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface Person {
  id?: number;
  name: string;
  gender: string;
  birthDate: string;
  phone: string;
  email: string;
}

interface PersonFormProps {
  person?: Person;
  fetchPersons: () => void;
  setEditing: (editing: boolean) => void;
}

const PersonForm: React.FC<PersonFormProps> = ({ person, fetchPersons, setEditing }) => {
  const onFinish = async (values: Person) => {
    if (person && person?.id) {
      await api.put(`/persons/${person.id}`, values);
    } else {
      await api.post('/persons', values);
    }
    fetchPersons();
    setEditing(false);
  };

  return (
    <Form
      {...layout}
      name="personForm"
      onFinish={onFinish}
      initialValues={person ? { ...person, birthDate: moment(person.birthDate) } : {}}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select the gender!' }]}
      >
        <Radio.Group>
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="birthDate"
        label="Birth Date"
        rules={[{ required: true, message: 'Please input the birth date!' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[{ required: true, message: 'Please input the phone number!', }, { pattern: new RegExp(/^\d{10,11}$/), message: 'The input is not valid Phone!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input the email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button danger style={{ marginLeft: 5 }} onClick={() => setEditing(false)}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};

export default PersonForm;
