import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

class Invoices extends Component {
    render() {
        return (
            <Fragment>
                <div className="container mx-auto px-7">
                    <div>
                        <h1 className="font-bold mt-10 text-xl">Invoices</h1>
                        <h3 className="mt-10 font-medium">Payment Info</h3>
                    </div>
                    <hr className="text-gray-300 border-t-2 mt-2"/>
                    <div className="mt-1">
                        <div className="w-full flex justify-end text-gray-500">
                            <FontAwesomeIcon className="cursor-pointer" icon={faEdit}/>
                        </div>
                        <div className="columns-3">
                            <h3>Invoice Type</h3>
                            <h3>Name</h3>
                            <h3>Bank Name</h3>
                        </div>
                        <div className="columns-3">
                            <h3>Weekly</h3>
                            <h3>Rakib</h3>
                            <h3>DBBL</h3>
                        </div>
                        <div className="columns-3 mt-2">
                            <h3>Sort Code</h3>
                            <h3>Account Number</h3>
                        </div>
                        <div className="columns-3 mt-2">
                            <h3>12541</h3>
                            <h3>12354265</h3>
                        </div>
                    </div>

                <hr className="text-gray-300 border-t-2 mt-2"/>
                    <div className="columns-1 mt-3">
                        <span className="font-medium">Invoice of : </span> <span className="text-red-700 font-medium"> 13 Dec 2021 </span> <span> to </span> <span className="text-red-700 font-medium"> 19 Dec 2021, </span> <span className="font-medium mr-5">Of</span>
                        {/*<span className="border-2 pl-6 pr-2 py-2 rounded-full">*/}
                        {/*    <span className="mr-2"><FontAwesomeIcon  icon={faCalendarAlt} /> </span><span className="font-medium"> Select Date <input type="date" placeholder="Select Date"/></span><span className="ml-2 bg-gray-200 px-3 py-1  rounded-full text-gray-500"><FontAwesomeIcon  icon={faAngleDown} /></span>*/}
                        {/*</span>*/}
                        <input type="date"  className="border-2 mt-3 focus:outline-none focus:shadow-outline pl-5 pr-2 py-2 rounded-full text-gray-500"/>

                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Invoices;