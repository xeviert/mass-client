import React, { Component } from "react";
import "./Styling/Resources.css";

export default class Resources extends Component {
  render() {
    return (
      <div>
        <div className='page-body-resources'>
          <h2>Shared Resources</h2>
          <p>
            Our community-sourced, volunteer-curated library is a growing
            collection of the many resources available to Texans. We are
            committed to building a comprehensive list of high-quality
            resources. Check back frequently as new resources are added every
            day!
          </p>

          <div className='resource-sections'>
            <h3>Other Mutual Aid Programs</h3>
            <p>
              If we are not able to meet your needs or aren't located near us,
              please check out one of these mutual aid organizations that we
              have worked with in the past.
            </p>
            <a
              href='https://ntxmutualaid.org/'
              rel='noreferrer noopener'
              target='_blank'
            >
              North Texas Mutual Aid
            </a>{" "}
            <br />
            <a
              href='https://www.mutualaidhou.com/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Mutual Aid Houston
            </a>{" "}
            <br />
            <a
              href='https://linktr.ee/austinmutualaid'
              rel='noreferrer noopener'
              target='_blank'
            >
              Austin Mutual Aid
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Shelters</h3>
            <a
              href='https://www.shelterlist.com/city/tx-houston'
              rel='noreferrer noopener'
              target='_blank'
            >
              Directory of Houston Shelters
            </a>{" "}
            <br />
            <a
              href='https://www.shelterlist.com/city/tx-austin'
              rel='noreferrer noopener'
              target='_blank'
            >
              Directory of Austin Shelters
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Food Bank</h3>
            <a
              href='https://www.houstonfoodbank.org/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Houston Food Bank
            </a>{" "}
            <br />
            <a
              href='https://www.centraltexasfoodbank.org/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Austin Food Bank
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Community Fridge</h3>
            <p>Community fridge where you take what you need.</p>
            <a
              href='https://houstonfridges.cargo.site/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Houston Community Fridge
            </a>
            <br />
            <a
              href='https://linktr.ee/atxfreefridge/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Austin Community Fridge
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Domestic Violence</h3>
            <p>
              If you are dealing with domestic abuse, you may find safe shelter
              with one of these organizations.
            </p>
            <a
              href='https://housingandcommunityresources.net/emergency-assistance/domestic-abuse/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Houston: Housing and Community Resource Center
            </a>
            <br />
            <a
              href='https://www.safeaustin.org/get-help/'
              rel='noreferrer noopener'
              target='_blank'
            >
              Austin: The SAFE Alliance
            </a>
            <br />
            <a
              href='https://www.domesticshelters.org/help/tx/austin'
              rel='noreferrer noopener'
              target='_blank'
            >
              Austin: Domestic Shelters
            </a>
            <br />
          </div>
          <div className='resource-sections'>
            <h3>Substance Abuse</h3>
            <a
              href='https://www.freerehabcenters.org/city/tx-houston'
              rel='noreferrer noopener'
              target='_blank'
            >
              Houston: Free Rehab Centers
            </a>
            <br />
            <a
              href='https://www.freerehabcenters.org/city/tx-austin'
              rel='noreferrer noopener'
              target='_blank'
            >
              Austin: Free Rehab Centers
            </a>
            <br />
          </div>
          <div className='resource-sections'>
            <h3>Mental Health</h3>
            <a
              href='https://publichealth.harriscountytx.gov/Resources/Mental-Health-Matters'
              rel='noreferrer noopener'
              target='_blank'
            >
              Houston: Mental Health Matters
            </a>
            <br />
            <a
              href='https://opencounseling.com/texas/austin'
              rel='noreferrer noopener'
              target='_blank'
            >
              Austin: Open Counseling
            </a>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
