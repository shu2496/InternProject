import React from "react";
import { FormGroup, Form, Input, Button } from "reactstrap";

function CreateKafkaTopic() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div className="container">
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <div className="input-container">
                        <label for="userName">Enter Topic Name</label>
                        <Input
                            type="text"
                            style={{ width: "400px" , borderRadius: "50px"}}
                            required
                        />
                        </div><br />

                        <div className="input-container">
                        <label for="id">No of Partition</label>
                        <Input
                            type="number"
                            min="0"
                            style={{ width: "400px" , borderRadius: "50px"}}
                            required
                        />
                         </div><br />

                        <Button 
                        
                        type="submit"
                        className="button-container" 
                        style={{ width: "150px" , borderRadius: "50px"}}>
                            
                        Submit</Button>

                    </FormGroup>
                </Form>

            </div>

        </div>
    );
}
export default CreateKafkaTopic;