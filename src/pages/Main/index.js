import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler'

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Main(){

	let offset = 0;
	const translateY = new Animated.Value(0);

	const animatedEvent = Animated.event([
		{
			nativeEvent: {
				translationY : translateY, 
			}
		}
	], {useNativeDriver: true})

	function onHandlerStateChanged(event) {
		if (event.nativeEvent.oldState === State.ACTIVE) {
		  let opened = false;
		  const { translationY } = event.nativeEvent;
	
		  offset += translationY;
	
		  if (translationY >= 100) {
			opened = true;
		  } else {
			translateY.setValue(offset);
			translateY.setOffset(0);
			offset = 0;
		  }
	
		  Animated.timing(translateY, {
			toValue: opened ? 390 : 0,
			duration: 200,
			useNativeDriver: true,
		  }).start(() => {
			offset = opened ? 390 : 0;
			translateY.setOffset(offset);
			translateY.setValue(0);
		  });
		}
	  }

  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Container>
				<Header />

				<Content>
					<Menu translateY={translateY} />

					<PanGestureHandler
						onGestureEvent={animatedEvent}
						onHandlerStateChange = {onHandlerStateChanged}
					>
					<Card style=
						{
							{
								transform:[{
									translateY:translateY.interpolate({
										inputRange: [-350,0,390],
										outputRange: [-50,0,390],
										extrapolate: 'clamp'
									})
								}]
							}
						}
					>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<Icon name="visibility-off" size={28} color="#666" />
						</CardHeader>
						<CardContent>
							<Title>Saldo disponivel</Title>
							<Description>R$ 52.575,95</Description>
						</CardContent>
						<CardFooter>
							<Annotation>
								Transferência de R$ 20,00 recebida de José hoje às 00:00h
							</Annotation>
						</CardFooter>
					</Card>
					</PanGestureHandler>
				</Content>


				<Tabs translateY={translateY} />
			</Container>
    </>
  );
}