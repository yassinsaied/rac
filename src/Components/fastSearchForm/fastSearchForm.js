// @flow
import * as React from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import "./fastSearchForm.css";
const fastSearchForm = () => {
  return (
    <>
      <Container className="ctnr-fast-Search-form">
        <Row className="d-flex align-items-center rounded row-form">
          <Form className="row gx-3 gy-2 align-items-center fast-Search-form">
            <div class="col-sm-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
            <div class="col-sm-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
            <div class="col-sm-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div class="col-sm-3">
              <Form.Group className="mb-3">
                <Button variant="primary" type="submit" size="md">
                  Submit
                </Button>
              </Form.Group>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default fastSearchForm;
