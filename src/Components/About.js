import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styling/About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='page-body'>
          <h2>About/Landing Page</h2>
          <div id='landing-page-body'>
            <div id='get-started-box'>
              <div id='user-functionality'>
                <p>
                  This app is for people needing a little bit of help. User logs
                  in with phone number and password. In order to stay anonymous,
                  no other information is needed to register.
                </p>
                <p>
                  User submits a wishlist of items that user needs along with a
                  location to drop off items on wishlist. That wishlist gets
                  sent to trusted admin in order to fulfill and deliver items on
                  the wishlist.
                </p>
              </div>
              <Link to='/register'>
                <button className='gs-btn'>Register</button>
              </Link>
              <Link to='/login'>
                <button className='gs-btn'>Login</button>
              </Link>
            </div>

            <p>
              We are everyday locals working to lift up local organizing,
              connect people to resources, and build a citywide movement to
              address this and any crisis.
            </p>

            <p id='text-center'>We are committed to:</p>
            <div id='our-commitments'>
              <p className='commitment-item'>
                Providing support to local groups leading mutual aid efforts in
                their neighborhoods.
              </p>
              <p className='commitment-item'>
                Redirecting resources to those providing mutual aid, advocacy,
                and services to the hardest-hit communities.
              </p>
              <p className='commitment-item'>
                Using the Mutual Aid Texas network to channel resources and
                amplify needs from the front lines.
              </p>
            </div>

            <p>
              Our members include parents, elders, immigrants, people with
              disabilities and chronic illness, caregivers, care workers,
              organizers, advocates, and anyone else who wants to get involved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
