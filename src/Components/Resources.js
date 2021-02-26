import React, { Component } from "react";
import './Styling/Resources.css'

export default class Resources extends Component {
  render() {
    return (
      <div>
        <div className='page-body-resources'>
          <h2>Shared Resources</h2>
          
          <div className='resource-sections'>
            <h3>Shelters</h3>
            https://www.shelterlist.com/city/tx-houston <br/>
            https://www.shelterlist.com/city/tx-austin
          </div>
          <div className='resource-sections'>
            <h3>Food Bank</h3>
            https://www.houstonfoodbank.org/ <br/>
            https://www.centraltexasfoodbank.org/
          </div>
          <div className='resource-sections'>
            <h3>Community Fridge</h3>
            https://linktr.ee/atxfreefridge/ <br/>
            https://houstonfridges.cargo.site/

          </div>
          <div className='resource-sections'>
            <h3>Domestic Violence</h3>
            https://housingandcommunityresources.net/emergency-assistance/domestic-abuse/ <br/>
            https://www.safeaustin.org/get-help/ <br/>
            https://www.domesticshelters.org/help/tx/austin <br/>
          </div>
          <div className='resource-sections'>
            <h3>Substance Abuse</h3>
            https://www.freerehabcenters.org/city/tx-houston <br/>
            https://www.freerehabcenters.org/city/tx-austin <br/>
          </div>
          <div className='resource-sections'>
            <h3>Mental Health</h3>
            https://publichealth.harriscountytx.gov/Resources/Mental-Health-Matters <br/>
            https://justmind.org/ <br/>
            https://affordable-counseling-in-austin/ <br/>
            https://opencounseling.com/texas/austin
          </div>


        </div>
      </div>
    );
  }
}
