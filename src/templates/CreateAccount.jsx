import React from "react";

import "@styles/CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
        <div className="CreateAccount-container">
            <h1 className="title">My account</h1>
            <form className="form">
                <div>
                    <label className="label">Name</label>
                    <input type="text" id="name" placeholder="Emiliano Acevedo" className="input input-name" />
                    <label className="label">Email</label>
                    <input type="text" id="email" placeholder="ejemplo@gmail.com" className="input input-email" />
                    <label className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                </div>
                <input type="submit" value="Create" className="primary-button login-button" />
            </form>
        </div>
    </div>
  );
};

export default CreateAccount;