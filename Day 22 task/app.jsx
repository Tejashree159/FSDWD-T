import React from 'react';
import Card from './Card.js';

function App() {
  const plans = [
    {
      plan: "FREE",
      price: 0,
      isUser: true,
      user: "Single User",
      isStorage: true,
      storage: "5 GB",
      isPublicProjects: true,
      publicProjects: "Unlimited Public Projects",
      isCommunityAccess: true,
      communityAccess: "Community Access",
      isPrivateProjects: false,
      privateProjects: "Unlimited Private Projects",
      isPhoneSupport: false,
      phoneSupport: "Dedicated Phone Support",
      isSubDomain: false,
      subDomain: "Free Subdomain",
      isReports: false,
      reports: "Monthly Status Reports"
    },
    {
      plan: "PLUS",
      price: 9,
      isUser: true,
      user: "5 Users",
      isStorage: true,
      storage: "50 GB",
      isPublicProjects: true,
      publicProjects: "Unlimited Public Projects",
      isCommunityAccess: true,
      communityAccess: "Community Access",
      isPrivateProjects: true,
      privateProjects: "Unlimited Private Projects",
      isPhoneSupport: true,
      phoneSupport: "Dedicated Phone Support",
      isSubDomain: true,
      subDomain: "Free Subdomain",
      isReports: false,
      reports: "Monthly Status Reports"
    },
    {
      plan: "PRO",
      price: 49,
      isUser: true,
      user: "Unlimited Users",
      isStorage: true,
      storage: "150 GB",
      isPublicProjects: true,
      publicProjects: "Unlimited Public Projects",
      isCommunityAccess: true,
      communityAccess: "Community Access",
      isPrivateProjects: true,
      privateProjects: "Unlimited Private Projects",
      isPhoneSupport: true,
      phoneSupport: "Dedicated Phone Support",
      isSubDomain: true,
      subDomain: "Free Subdomain",
      isReports: true,
      reports: "Monthly Status Reports"
    }
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {plans.map((plan, index) => (
            <Card data={plan} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
