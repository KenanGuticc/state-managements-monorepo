/* eslint-disable @typescript-eslint/ban-types */
import { IUser } from 'libs/data-access/src';
import React from 'react';

/* eslint-disable-next-line */
export interface RegisterTemplateProps {
  onSubmit: (e: React.FormEvent, user: IUser | {} | unknown) => void;
}

export function RegisterTemplate(props: RegisterTemplateProps) {
  const [user, setUser] = React.useState<IUser | {}>();
  const onSubmit = props.onSubmit;

  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <div className="register-form">
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            id="fullName"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            id="email"
            type="text"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            id="password"
            type="password"
            className={`form-control`}
            onChange={handleUserData}
          />
        </div>

        <div className="form-group form-check">
          <input
            id="acceptTerms"
            type="checkbox"
            className={`form-check-input`}
            onChange={handleUserData}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
        </div>

        <div className="form-group buttons-group">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => onSubmit(e, user)}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export interface InfoTemplateProps {
  deleteUser: (user: IUser) => void;
  users: readonly IUser[];
}

export function InfoTemplate(props: InfoTemplateProps) {
  const users = props.users;
  const deleteUser = props.deleteUser;

  return (
    <div>
      {users.map((user: IUser) => (
        <div className="User" key={user.id}>
          <div>
            <h1>{user.fullName}</h1>
            <p>{user.username}</p>
          </div>
          <button onClick={() => deleteUser(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
