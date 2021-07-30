import React, { useState } from 'react';
import {
  Container,
  InputArea,
  Title,
  SendPhoto,
  ButtonText,
  FieldName,
  RegisterButton,
  Footer,
} from './style'

import PetsRegisterAvatar from '../../components/PetsRegisterAvatar';
import Input from '../../components/RegisterInput'

import avatar from '../../assets/registerAvatar.png';

export default () => {
  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [race, setRace] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')

  return (
    <Container>
      <InputArea>
        <Title>Cadastre seu Pet</Title>
        <PetsRegisterAvatar imageSource={avatar} />
        <SendPhoto>
          <ButtonText>Enviar foto</ButtonText>
        </SendPhoto>
        <FieldName>Nome:</FieldName>
        <Input
          onChangeText={ (text) => setName(text) }
          value={name}
        />
        <FieldName>Peso:</FieldName>
        <Input
          onChangeText={ (text) => setWeight(text) }
          value={weight}
        />
        <FieldName>Data de Nascimento:</FieldName>
        <Input
          onChangeText={ (text) => setBirthDate(text) }
          value={birthDate}
        />
        <FieldName>Raça:</FieldName>
        <Input
          onChangeText={ (text) => setRace(text) }
          value={race}
        />
        <FieldName>Gênero:</FieldName>
        <Input
          onChangeText={ (text) => setGender(text) }
          value={gender}
        />
        <FieldName>Espécie:</FieldName>
        <Input
          onChangeText={ (text) => setSpecies(text) }
          value={species}
        />
        <RegisterButton>Cadastrar</RegisterButton>
      </InputArea>
      <Footer />
    </Container>
  )
}