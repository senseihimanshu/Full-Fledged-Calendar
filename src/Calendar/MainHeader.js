import React, {Component} from 'react';
import MainGrid from './MainGrid';
import moment from 'moment';

class MainHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            year: moment().format('YYYY')
        };
    }

    render(){
        return(
            <div className="MainHeader">
                <section className="main__header">
                    <div className="main__header-year">
                        
                            <a onClick={()=>this.setState({
                                year: --this.state.year
                            })} className="arr-left" href="#">
                                &larr;
                            </a>

                                {this.state.year}

                            <a onClick={()=>this.setState({
                                year: ++this.state.year
                            })} className="arr-right" href="#">
                                &rarr;
                            </a>

                    </div>
                </section>
                <MainGrid currentYear={this.state.year} changeSelected={this.props.changeSelected} reminders={this.props.reminders}/>
            </div>
        );
    }
}   

export default MainHeader;