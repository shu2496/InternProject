import React from "react";
import { FormGroup, Form, Input, Button } from "reactstrap";

function CreateKafkaTopic() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label for="userName">Enter Topic Name</label>
                    <Input type="text" style={{ width: "350px" }}></Input><br />

                    <label for="id">No of Partition</label>
                    <Input type="text" style={{ width: "350px" }}></Input><br />

                    <Button type="submit" color="success">Submit</Button>

                </FormGroup>
            </Form>



        </div>
    );
}
export default CreateKafkaTopic;