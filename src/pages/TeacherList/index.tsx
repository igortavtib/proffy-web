import React from 'react'

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
        <Select 
              name="subject" 
              label="Matéria"
              options={[
                { value: 1, label: 'Artes'},
                { value: 2, label: 'Biologia'},
                { value: 3, label: 'Ciências'},
                { value: 4, label: 'Educação Física'},
                { value: 5, label: 'Física'},
                { value: 6, label: 'Geografia'},
                { value: 7, label: 'História'},
                { value: 8, label: 'Matemática'},
                { value: 9, label: 'Química'},
                { value: 10, label: 'Sociologia'}
              ]}
            />
          <Select 
              name="week_day" 
              label="Dia da semana"
              options={[
                { value: 0, label: 'Doming'},
                { value: 1, label: 'Segunda-feira'},
                { value: 2, label: 'Terça-feita'},
                { value: 3, label: 'Quarta-feira'},
                { value: 4, label: 'Quinta-feira'},
                { value: 5, label: 'Sexta-feira'},
                { value: 6, label: 'Sábado'}
              ]}
            />
          <Input name="time" label="Hora" type="time"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;