import React, { Component } from "react";
import "./Styling/Resources.css";

export default class Resources extends Component {
  render() {
    return (
      <div>
        <div className='page-body-resources'>
          <h2>Shared Resources</h2>

          <div className='resource-sections'>
            <h3>Other Mutual Aid Programs</h3>
            <a href='https://ntxmutualaid.org/' target='_blank'>
              North Texas Mutual Aid
            </a>{" "}
            <br />
            <a href='https://www.https://www.mutualaidhou.com/' target='_blank'>
              Mutual Aid Houston
            </a>{" "}
            <br />
            <a href='https://https://linktr.ee/austinmutualaid' target='_blank'>
              Austin Mutual Aid
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Shelters</h3>
            <a
              href='https://www.shelterlist.com/city/tx-houston'
              target='_blank'
            >
              Directory of Houston Shelters
            </a>{" "}
            <br />
            <a
              href='https://www.shelterlist.com/city/tx-austin'
              target='_blank'
            >
              Directory of Austin Shelters
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Food Bank</h3>
            <a href='https://www.houstonfoodbank.org/' target='_blank'>
              Houston Food Bank
            </a>{" "}
            <br />
            <a href='https://www.centraltexasfoodbank.org/' target='_blank'>
              Austin Food Bank
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Community Fridge</h3>
            <a href='https://houstonfridges.cargo.site/' target='_blank'>
              Houston Community Fridge
            </a>
            <br />
            <a href='https://linktr.ee/atxfreefridge/' target='_blank'>
              Austin Community Fridge
            </a>
          </div>
          <div className='resource-sections'>
            <h3>Domestic Violence</h3>
            <a
              href='https://housingandcommunityresources.net/emergency-assistance/domestic-abuse/'
              target='_blank'
            >
              Houston: Housing and Community Resource Center
            </a>
            <br />
            <a href='https://www.safeaustin.org/get-help/' target='_blank'>
              Austin: The SAFE Alliance
            </a>
            <br />
            <a
              href='https://www.domesticshelters.org/help/tx/austin'
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
              target='_blank'
            >
              Houston: Free Rehab Centers
            </a>
            <br />
            <a
              href='https://www.freerehabcenters.org/city/tx-austin'
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
              target='_blank'
            >
              Houston: Mental Health Matters
            </a>
            <br />
            <a href='https://affordable-counseling-in-austin/' target='_blank'>
              Austin: Affordable Counseling
            </a>
            <br />
            <a href='https://opencounseling.com/texas/austin' target='_blank'>
              Austin: Open Counseling
            </a>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
