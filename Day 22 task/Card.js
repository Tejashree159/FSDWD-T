import React from 'react';

function Card({ data }) {
  const {
    plan,
    price,
    isUser,
    user,
    isStorage,
    storage,
    isPublicProjects,
    publicProjects,
    isCommunityAccess,
    communityAccess,
    isPrivateProjects,
    privateProjects,
    isPhoneSupport,
    phoneSupport,
    isSubDomain,
    subDomain,
    isReports,
    reports
  } = data;

  return (
    <div className="col-lg-4">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{plan}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${price} <small className="text-muted">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {isUser && <li>{user}</li>}
            {isStorage && <li>{storage} of storage</li>}
            {isPublicProjects && <li>{publicProjects}</li>}
            {isCommunityAccess && <li>{communityAccess}</li>}
            {isPrivateProjects && <li>{privateProjects}</li>}
            {isPhoneSupport && <li>{phoneSupport}</li>}
            {isSubDomain && <li>{subDomain}</li>}
            {isReports && <li>{reports}</li>}
          </ul>
          <a href="#" className="w-100 btn btn-lg btn-primary">
            Sign up for {plan}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
