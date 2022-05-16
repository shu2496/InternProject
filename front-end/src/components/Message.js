import React from "react";
import { Fragment } from "react";
import {Form,FormGroup,Input} from "reactstrap";
import { Button } from "reactstrap";

function Message(){
    return(
        <Fragment> 
            <Form>
                <FormGroup>
                <label for="PostMessage">Enter the message</label>
                <Input type="text" placeholder="type here" name="consume message" id="consume message"></Input>
                <br />
                <Button color="success ">Post Message</Button>
                </FormGroup>
                
            </Form>
        </Fragment>

    );
}
export  default Message;