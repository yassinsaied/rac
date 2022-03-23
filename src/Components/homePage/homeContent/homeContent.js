import { Container, Card, Button } from "react-bootstrap";
import "./homeContent.css";

const homeContent = () => {
  return (
    <>
      <Container>
        {/* DIV TOW CARD PARTICULIER AND PROFESSIONNEL*/}
        <div className="row d-flex justify-content-between py-3 tow-card-home">
          <Card className="big-card py-4">
            <Card.Body>
              <h4 className="text-uppercase text-secondary ">Particulier</h4>
              <Card.Text className="my-4">
                <h5 className="w-75">
                  Contribuez à améliorer l'impacte des entreprises
                </h5>
                <p className="my-4 text-justify">
                  <small>
                    is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text.
                  </small>
                </p>
              </Card.Text>
              <Button className="secondary-btn radius-25">
                Inscription gratuite
              </Button>
            </Card.Body>
          </Card>

          <Card className="big-card py-4">
            <Card.Body>
              <h4 className="text-uppercase text-secondary">professionnel</h4>
              <Card.Text className="my-4">
                <h5 className="w-75">
                  Contribuez à améliorer l'impacte des entreprises
                </h5>
                <p className="my-4 text-justify">
                  <small>
                    is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its
                    layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text.
                  </small>
                </p>
              </Card.Text>
              <Button className="secondary-btn radius-25">
                Je découvre les audis RSE
              </Button>
            </Card.Body>
          </Card>

          <img
            src={process.env.PUBLIC_URL + "images/blockcard-pro.png"}
            class="img-fluid bg-mage-tow-card"
            alt="PARTICULIER AND PROFESSIONNEL"
          />
        </div>
        {/* DIV C'est vous qui le faite */}
        <div className="row d-flex justify-content-end position-relative bg-light mb-5 pb-5">
          <div className="abslt-slogan">
            <h4 className="d-flex flex-column h4-slogan">
              <span>Nous nous notons pas le entreprises sur</span>
              <span> des critère qui impacte vos vie</span>
            </h4>

            <h1 className="text-uppercase d-flex flex-column  mt-5 multicolor">
              <span className="multicolore-1">C'est vous qui</span>
              <span className="multicolore-2">le faite</span>
            </h1>
          </div>

          <div className="col-7">
            <img
              src={process.env.PUBLIC_URL + "images/criteres.png"}
              class="img-fluid"
              alt="C'est vous qui le faite"
            />
          </div>
        </div>
        {/* un seule outil pour s'engage dans une demarche durable */}

        <div className="row d-flex justify-content-center pb-5 container-litle-card">
          <h4 className="text-primary text-center col-10 custom-h4">
            Un seule outil pour s'engage dans une demarche durable
          </h4>
          <div className="col-10 text-center">
            <div class="row row-cols-1 row-cols-md-4 g-4 my-3">
              <div class="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/adress-img.png"}
                      class="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <Card.Text className="">
                      <h6 className="text-primary h6-litle-card">
                        S'adresse à toutes les entreprises
                      </h6>
                      <p className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/evaluation.png"}
                      class="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <Card.Text className="">
                      <h6 className="text-primary h6-litle-card">
                        Tout évaluer
                      </h6>
                      <p className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/utilisateur.png"}
                      class="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <Card.Text className="">
                      <h6 className="text-primary h6-litle-card">
                        Garantir des utilisateurs vérifier
                      </h6>
                      <p className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div class="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/partenair.png"}
                      class="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <Card.Text className="">
                      <h6 className="text-primary h6-litle-card">
                        Partenaires RSE
                      </h6>
                      <p className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* laudite RSE PAR LES PARTIES PRENANTE*/}
      <div className="position-relative container-laptop mb-5">
        <img
          src={process.env.PUBLIC_URL + "images/part-audit2.png"}
          class="img-fluid laptop-img-bg"
          alt="C'est vous qui le faite"
        />

        <Container>
          <div className="row d-flex d-flex justify-content-center">
            <div className="col-10 pe-5">
              <h1 className="d-flex mt-5 multicolore-3">
                L'AUDITE RSE par les parties prenantes
              </h1>
              <h4 className=" my-4 text-primary h4-custom">
                Engageant ses client salarié sous traitant partenaire autour ses
                valeur
              </h4>
              <p className="very-small-text w-45 ">
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text. is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout.
              </p>
              <Button className="secondary-btn radius-25 mt-3">
                En savoir plus
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* they trusted us */}
        <div className="row justify-content-center trust-us mb-5">
          <div className="col-4">
            <p className="very-small-text text-uppercase text-center trust-us-title py-4">
              ils nous ont fait confiance
            </p>
          </div>
          <div className="col-9 d-flex justify-content-between align-items-center">
            <img
              src={process.env.PUBLIC_URL + "images/google.png"}
              class="img-fluid img-trust"
              alt="C'est vous qui le faite"
            />
            <img
              src={process.env.PUBLIC_URL + "images/clear-correct.png"}
              class="img-fluid  clear-correct "
              alt="C'est vous qui le faite"
            />
            <img
              src={process.env.PUBLIC_URL + "images/one-duro.png"}
              class="img-fluid  img-trust"
              alt="C'est vous qui le faite"
            />
            <img
              src={process.env.PUBLIC_URL + "images/istobe.png"}
              class="img-fluid  img-trust "
              alt="C'est vous qui le faite"
            />
          </div>
        </div>

        {/* tab part home*/}

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab">
            Un seule outil pour s'engage dans une demarche durable Un seule
            outil pour s'engage dans une demarche durable Un seule outil pour
            s'engage dans une demarche durable Un seule outil pour s'engage dans
            une demarche durable
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab">
            Un seule outil pour s'engage dans une demarche durable Un seule
            outil pour s'engage dans une demarche durable Un seule outil pour
            s'engage dans une demarche durable Un seule outil pour s'engage dans
            une demarche durable
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab">
            Un seule outil pour s'engage dans une demarche durable Un seule
            outil pour s'engage dans une demarche durable Un seule outil pour
            s'engage dans une demarche durable Un seule outil pour s'engage dans
            une demarche durable
          </div>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true">
              Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false">
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false">
              Contact
            </button>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default homeContent;
