import React from 'react'

const UserEdit = ({user, updateValue, updateUser, userId, toggleForm}) => (
    <div className="row edit-row">
        <div className="col-xs-3 form-group">
            <input name="name" type="text" data-edit="true" placeholder="Full name" className="form-control" value={user.name} onChange={e => updateValue(e)} />
        </div>
        <div className="col-xs-3 form-group">
            <input name="email" type="email" data-edit="true" placeholder="E-mail address" className="form-control" value={user.email} onChange={e => updateValue(e)} />
        </div>
        <div className="col-xs-3 form-group">
            <input name="phone" type="number" data-edit="true" placeholder="Phone number" className="form-control" value={user.phone} onChange={e => updateValue(e)} />
        </div>
        <div className="col-xs-3">
            <button type="button" className="btn text-info" onClick={(e) => toggleForm(e)}>Cancel</button> &nbsp;
            <button type="button" data-user={userId} className="btn btn-info save-button" onClick={e => updateUser(e)}>
                Save
            </button>
        </div>
    </div>
)

export default UserEdit
