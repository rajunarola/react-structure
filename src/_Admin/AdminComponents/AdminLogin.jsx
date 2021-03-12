import React from 'react'

export default function AdminLogin() {

    const formRef = React.useRef();

    return (
        <div>
            <form ref={formRef}>
                <div className="row">
                    <div className="form-group">
                        <label>User Name/Email</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" text="password" />
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-blue">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
