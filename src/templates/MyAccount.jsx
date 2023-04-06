import React from "react";

import "@styles/MyAccount.scss";

const MyAccount = () => {
  return (
    <div className="MyAccount">
        <div className="form-container">
            <h1 className="title">My account</h1> 
            <form className="form">
                <div>
                    <label className="label">Name</label>
                    <p className="value">Walter Gonzales</p>

                    <label className="label">Email address</label>
                    <p className="value">emiacevedoposos@gmail.com</p>

                    <label  className="label">Password</label>
                    <p className="value">*********</p>
                </div>
                <input type="submit" value="Edit" className="secondary-button" />
            </form>
        </div>
    </div>
  )
}

export default MyAccount;