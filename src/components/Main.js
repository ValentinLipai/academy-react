import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider'

const Repair = styled.div`
	color: #fff;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;

	span {
		font-size: 24px;
		display: block;
		line-height: 30px;
	}
`

const LightText = styled.div`
	color: #fff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 54px;
`
const CallBtn = styled.button`
	width: 247px;
	height: 67px;
	background-color: #ffa14b;
	border-radius: 30px;
	color: #fff;
	font-weight: bold;
	font-size: 18px;
	margin-top: 32px;
	border: none;
`


class Main extends React.Component {
	render() {
		return (
			<Row>
				<Col md={6} lg={5}>
					<Repair>
						Качественный ремонт
						<span> iphone за 35 минут и гарантия 1 год </span>
					</Repair>
					<LightText>
						Оставьте заявку на бесплатную диагностику без очереди,
						и получите защитное стекло, стоимостью 1000 рублей,
						с установкой в подарок!
					</LightText>
					<CallBtn>
						Отправить заявку
					</CallBtn>
				</Col>
				<Col md={6}>
					<Slider />
				</Col>
			</Row>
		)
	}
}

export default Main