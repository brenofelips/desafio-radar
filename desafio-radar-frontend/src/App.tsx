import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import PersonTable from './components/PersonTable';
import PersonForm from './components/PersonForm';
import api from './api/api';

const { Header, Content } = Layout;

interface Person {
  id?: number;
  name: string;
  gender: string;
  birthDate: string;
  phone: string;
  email: string;
}

const App: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [currentPerson, setCurrentPerson] = useState<Person>();

  const startEditing = (person: Person) => {
    setCurrentPerson(person);
    setEditing(true);
  };

  const fetchPersons = async () => {
    const response = await api.get('/persons');
    setCurrentPerson(response.data);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: 'white' }}>Person Management</Header>
      <Content style={{ padding: '50px' }}>
        {!editing && <Button type="primary" onClick={() => setEditing(true)}>
          Add Person
        </Button>}
        
        {editing ? (
          <PersonForm
            person={currentPerson}
            fetchPersons={fetchPersons}
            setEditing={setEditing}
          />
        ) : (
          <PersonTable onEdit={startEditing} />
        )}
      </Content>
    </Layout>
  );
};

export default App;
