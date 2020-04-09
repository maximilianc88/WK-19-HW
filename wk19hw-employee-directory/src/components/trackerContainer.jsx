import React from 'react';
import Container from './container';
import Row from './row';
import Col from './col';

class TrackerContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          result: {},
          search: ''
        };
}
render(){
    return(<Container>
        <Row>
            <Col size="8" class="px-0"><h1 className="h6 bg-info">Turtle nugget</h1></Col>
            <Col size="4" class="px-0"><h2 className="h6 bg-success">Holler for a $</h2></Col>
        </Row>
    </Container>);
}}

export default TrackerContainer;