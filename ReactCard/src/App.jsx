// App.jsx

import React from 'react';
import './app.css';

function PricingCard({ title, price, features }) {
    return (
        <div className="pricing-card">
            <h5>{title}</h5>
            <p>{price}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        <i className={feature.included ? 'fa fa-check' : 'fa fa-times'}></i>
                        {feature.text}
                    </li>
                ))}
            </ul>
            <button>Button</button>
        </div>
    );
}

function App() {
    const pricingPlans = [
        {
            title: 'FREE',
            price: '$0/month',
            features: [
                { text: 'Single User', included: true },
                { text: '50GB Storage', included: true },
                { text: 'Unlimited Public Projects', included: true },
                { text: 'Community Access', included: true },
                { text: 'Unlimited Private Projects', included: false },
                { text: 'Dedicated Phone Support', included: false },
                { text: 'Free Subdomain', included: false },
                { text: 'Monthly Status Reports', included: false },
            ],
        },
        {
            title: 'PLUS',
            price: '$9/month',
            features: [
                { text: '5 Users', included: true },
                { text: '50GB Storage', included: true },
                { text: 'Unlimited Public Projects', included: true },
                { text: 'Community Access', included: true },
                { text: 'Unlimited Private Projects', included: true },
                { text: 'Dedicated Phone Support', included: true },
                { text: 'Free Subdomain', included: true },
                { text: 'Monthly Status Reports', included: false },
            ],
        },
        {
            title: 'PRO',
            price: '$49/month',
            features: [
                { text: 'Unlimited Users', included: true },
                { text: '50GB Storage', included: true },
                { text: 'Unlimited Public Projects', included: true },
                { text: 'Community Access', included: true },
                { text: 'Unlimited Private Projects', included: true },
                { text: 'Dedicated Phone Support', included: true },
                { text: 'Free Subdomain', included: true },
                { text: 'Monthly Status Reports', included: true },
            ],
        },
    ];

    return (
        <div className="pricing-container">
            {pricingPlans.map((plan, index) => (
                <PricingCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                />
            ))}
        </div>
    );
}

export default App;
