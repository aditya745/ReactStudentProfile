import React from 'react'

const UserRow = ({userId, name, email, phone, deleteUser, toggleForm}) => (
  <div className="row user-row">
    <div className="col-xs-4 col-sm-3">
      {name}
    </div>
    <div className="col-xs-4 col-sm-3">
      {email}
    </div>
    <div className="col-xs-4 col-sm-3">
      {phone}
    </div>
    <div className="hidden-xs col-sm-2 action-link">
      <span data-user={userId} className="glyphicon glyphicon-pencil" onClick={(e) => toggleForm(e)}/> &nbsp; &nbsp; &nbsp; &nbsp;
	  <span data-id={userId} onClick={deleteUser}><i className="fas fa-trash" /></span>
    </div>
  </div>
)

export default UserRow
