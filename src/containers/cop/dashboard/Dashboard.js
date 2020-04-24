import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { http } from './../../../common/services/http.service';
import Slider from 'react-slick';
import './Dashboard.scss';

class Dashboard extends Component {
	state = {
		slideIndex: 0,
		updateCount: 0,
	};
	constructor(props) {
		super(props);
		this.t = this.props.t;
		this.i18n = this.props.i18n;
		this.toggleLang = false;
	}

	changeLanguage() {
		this.toggleLang = !this.toggleLang;
		let lang = this.toggleLang ? 'en' : 'es';
		this.i18n.changeLanguage(lang);

		http.post(
			'https://jsonplaceholder.typicode.com/posts',
			JSON.stringify({
				title: 'foo',
				body: 'bar',
				userId: 1,
			})
		);
	}
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			afterChange: () =>
				this.setState(state => ({ updateCount: state.updateCount + 1 })),
			beforeChange: (current, next) => this.setState({ slideIndex: next }),
		};
		const accountID = this.props.match.params.accountID;
		const year = this.props.match.params.year;
		const navLink = '/home/producers/cop/' + accountID + '/' + year + '/state';
		return (
			<div className="text-center">
				<h2>COP {this.t('COP.DASHBOARD')}</h2>
				<p>Account ID - {accountID}</p>
				<p>Account Year - {year}</p>
				<button onClick={() => this.changeLanguage()}>Change Language</button>
				<div>
					<button
						onClick={() => this.slider.slickGoTo(this.state.slideIndex - 1)}
					>
						Prev
					</button>
					<button
						onClick={() => this.slider.slickGoTo(this.state.slideIndex + 1)}
					>
						Next
					</button>
				</div>

				<Link to={navLink}>Go To COP</Link>
				<Slider ref={slider => (this.slider = slider)} {...settings}>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
				</Slider>
			</div>
		);
	}
}

export default withTranslation()(Dashboard);
