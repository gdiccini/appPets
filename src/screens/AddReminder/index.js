import React, { useState } from 'react';

import {
  Container,
} from './style';

import TopImage from '../../components/TopImage';
import XBtn from '../../components/CloseBtn';
import Input from '../../components/Input';
import Observations from '../../components/Observations';
import SaveBtn from '../../components/SaveBtn';

import ReminderImage from '../../assets/add-reminder.png'

export default () => {
  const [medicine, setMedicine] = useState('');
  const [interval, setInterval] = useState('');
  const [days, setDays] = useState('');
  const [responsible, setResponsible] = useState('');
  const [observations, setObservations] = useState('');

  return (
    <Container>
      <XBtn />
      <TopImage imageSource={ReminderImage} />
      <Input
        onChangeText={ (text) => setMedicine(text) }
        placeholder="Nome do Medicamento"
        value={medicine}
      />
      <Input
        onChangeText={ (text) => setInterval(text) }
        placeholder="Intervalo (ex. 8h em 8h)"
        value={interval}
      />
      <Input
        onChangeText={ (text) => setDays(text) }
        placeholder="Quantidade de dias"
        value={days}
      />
      <Observations
        onChangeText={ (text) => setObservations(text) }
        value={observations}
      />
      <SaveBtn />
    </Container>
  );
}
