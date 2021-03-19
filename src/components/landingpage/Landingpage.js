import React, {useEffect} from 'react';
import { NavBar, Banner, About } from './LandingpageElements';
import { Button } from '../shared/button/ButtonElements';
import * as ROUTES from '../../constants/routes';
// import { Link } from 'react-router-dom';

import MoneySvg from '../svgs/LandingSvg';
import InvestSvg from '../svgs/InvestSvg';
import ProfitsSvg from '../svgs/ProfitsSvg';

const Landingpage = () => {
	useEffect(() => {
		// temporary console.log example
		const styles = [
			"display: inline-block;",
			"padding: 0.75rem;",
			"border: 0.125rem solid #5068F5;",
			"border-radius: 0.2rem;",
			"color: #5068F5;",
			"font-size: 2rem;"
		].join(" ");

		console.log("%cLet's Vest!", styles);
	}, [])

    return (
        <div>
            <NavBar>
                <h1>Let's Vest</h1>
                <ul>
                    <li>
                        <Button to={ROUTES.SIGN_IN} secondary="true">Sign In</Button>
                    </li>
                    <li>
                        <Button to={ROUTES.SIGN_UP} primary="true">Sign Up</Button>
                    </li>
                </ul>
            </NavBar>
            <Banner>
                <h2>Everyone <s>can</s> <u>should</u> invest.</h2>
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings with my whole heart. Created for the bliss of souls like mine.</p>
                <MoneySvg/>
				<ul>
					<li>
						<Button to={ROUTES.SIGN_UP} primary="true">Get Started</Button>
					</li>
					<li>
						<Button to={ROUTES.DISCOVER} secondary="true">Browse Stocks</Button>
					</li>
				</ul>
			</Banner>
            <About>
				<div>
					<InvestSvg/>
					<p>Learn to invest, teach invest.</p>
				</div>
				<div>
					<ProfitsSvg/>
					<p>Profits, profits, profits</p>
				</div>
			</About>
        </div>
    );
};

export default Landingpage;
