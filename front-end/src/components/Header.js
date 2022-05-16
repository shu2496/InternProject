import React from "react";
import { Card, CardBody } from "reactstrap";

function Header(){
    
    return(
<div><Card style={{backgroundColor: '#39C0ED'}}>
    <CardBody>
<h3 className="text-center my-1">Kafka Cluster</h3>
</CardBody>
</Card>
</div>
    );
}
export  default Header;