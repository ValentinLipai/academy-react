import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`

const WorkTime = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`

const Calls = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	a {
		color: ${props => props.active ? 'pink' : '#464646'};
		display: block;
		font-size: 21px;
		font-weight: 700;

		&:hover {
			color: #8d8d8d;
			text-decoratioon: none;
		}
	}
`

const CallButton = styled.button`
	width: 176px;
	height: 48px;
	background-color: #3fc7db;
	border-radius: 30px;
	border: none;
	color: #fff;
	font-size: 14px;
	font-weight: 400;
`




class Adress extends React.Component {
	render() {
		return (
			<span> {this.props.addr} </span>
		)
	}
}

class TelNumber extends React.Component {
	render() {
		return (
			<a href={'tel:' + this.props.telLink}>{this.props.tel}</a>
		)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<Row>
				<Col md={3}>
					<Repair>Ремонт айфонов в сервисном
						центре и на выезде
					</Repair>
				</Col>
				<Col md={3} lgOffset={1}>
					<WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
						<Adress addr="Ленинская, 301" />
					</WorkTime>
				</Col>
				<Col md={3}>
					<Calls>Звонки принимаются 24 часа
						<TelNumber telLink="+88469225544" tel="8 (846) 922 55 44" />
					</Calls>
				</Col>
				<Col md={2}>
					<CallButton> Заказать звонок! </CallButton>
				</Col>
			</Row>
		)
	}
}

export default Menu