import React, {Component} from 'react';

class Events extends Component{
    render(){
        return(
            <section className="events">

                <div className="events__container">
                    <ul className="events__container-parent">
                        Current Events:
                        <li>Got to College at 9AM</li>
                        <li>Have Breakfast early</li>
                        <li>Sleep early</li>
                    </ul>
                </div>

                <div className="events__create-event">
                    <input className="events__create-event-input" type="text" placeholder="Create an Event" />
                    <i className="events__create-event-icon icon-basic-todo-pen"></i>
                </div>
    
            </section>
        );
    }
}

export default Events;