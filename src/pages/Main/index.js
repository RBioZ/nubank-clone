import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';
export default function Main(){
  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Container>
				<Header />

				<Content>
					<Menu />


					<Card>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#666" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponivel</Title>
							<Description>R$ 24.575,95</Description>
						</CardContent>
						<CardFooter>
							<Annotation>
								Transferência de R$ 20,00 recebida de José hoje às 00:00h
							</Annotation>
						</CardFooter>
					</Card>
				</Content>


				<Tabs />
			</Container>
    </>
  );
}