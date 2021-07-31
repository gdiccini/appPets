import React, { useState } from 'react';

import {
  Container,
} from './style';

import TopImage from '../../components/TopImage';
import XBtn from '../../components/CloseBtn';
import Input from '../../components/Input';
import Observations from '../../components/Observations';
import SaveBtn from '../../components/SaveBtn';

import VaccineImage from '../../assets/add-vaccine.png'

export default () => {
  const [vaccine, setVaccine] = useState('');
  const [date, setDate] = useState('');
  const [responsible, setResponsible] = useState('');

  return (
    <Container>
      <XBtn />
      <TopImage imageSource={VaccineImage} />
      <Input
        onChangeText={ (text) => setVaccine(text) }
        placeholder="Escolha a vacina"
        value={vaccine}
      />
      <Input
        onChangeText={ (text) => setDate(text) }
        placeholder="Data (dd/mm/aaaa)"
        value={date}
      />
      <Input
        onChangeText={ (text) => setResponsible(text) }
        placeholder="Responsável"
        value={responsible}
      />
      <Observations />
      <SaveBtn />
    </Container>
  );
}
