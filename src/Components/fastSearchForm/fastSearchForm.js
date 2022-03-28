// @flow
import * as React from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./fastSearchForm.css";
const fastSearchForm = () => {
  return (
    <>
      <Container className="ctnr-fast-Search-form ">
        <Row className=" align-items-center rounded row-form py-2 px-3 ">
          <Form className="row d-flex justify-content-between gy-2 align-items-center fast-Search-form">
            <div className="col-3 ">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
            <div className="col-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
            <div className="col-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-3">
              <Form.Group className="mb-3 d-flex justify-content-end">
                <Button className="filter-fast me-2" type="submit" size="md">
                  <FontAwesomeIcon icon={faPlus} className="pe-2" />
                  Plus de filters
                </Button>

                <Button className="btn-search me-0" type="submit" size="md">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
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
