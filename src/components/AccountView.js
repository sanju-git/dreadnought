import React from "react";

const user = {
  name: "sanjeev",
  email: "sanjavsn@gmail.com",
  phone: "0987654321",
};

class AccountView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="p-2">
            <div>
              <div>
                <h4>Profile</h4>
              </div>
              <hr />
              <div>
                <div className="col-md-4 mt-2">
                  <label className="float-left">Name</label>
                  <input
                    value={user.name}
                    type="text"
                    class="form-control mt-2"
                  />
                </div>
                <div className="col-md-4 mt-2">
                  <label className="float-left">Email</label>
                  <input
                    value={user.email}
                    type="email"
                    class="form-control mt-2"
                  />
                </div>
                <div className="col-md-4 mt-2">
                  <label className="float-left">Phone</label>
                  <input
                    value={user.phone}
                    type="text"
                    class="form-control mt-2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div>
                <h4>Subscription</h4>
              </div>
              <hr />
              <div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="card silver">
                    <h6>Silver</h6>
                    <div style={{ fontWeight: "bolder", marginTop: 40 }}>
                      <span>₹ 99/month</span>
                    </div>
                  </div>
                  <div className="card gold">
                    <h6>Gold</h6>
                    <div style={{ fontWeight: "bolder", marginTop: 50 }}>
                      <span>₹ 149/month</span>
                    </div>
                  </div>
                  <div className="card platinum">
                    <h6>Platinum</h6>
                    <div style={{ fontWeight: "bolder", marginTop: 40 }}>
                      <span>₹ 199/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AccountView;
