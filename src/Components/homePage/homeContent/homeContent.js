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
              <h5 className="w-75 my-4">
                Contribuez à améliorer l'impacte des entreprises
              </h5>
              <Card.Text className="my-4 text-justify">
                <small>
                  is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text.
                </small>
              </Card.Text>
              <Button className="secondary-btn radius-25">
                Inscription gratuite
              </Button>
            </Card.Body>
          </Card>

          <Card className="big-card py-4">
            <Card.Body>
              <h4 className="text-uppercase text-secondary">professionnel</h4>
              <h5 className="w-75 my-4">
                Contribuez à améliorer l'impacte des entreprises
              </h5>
              <Card.Text className="my-4 text-justify">
                <small>
                  is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text.
                </small>
              </Card.Text>
              <Button className="secondary-btn radius-25">
                Je découvre les audis RSE
              </Button>
            </Card.Body>
          </Card>

          <img
            src={process.env.PUBLIC_URL + "images/blockcard-pro.png"}
            className="img-fluid bg-mage-tow-card"
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
              className="img-fluid"
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
            <div className="row row-cols-1 row-cols-md-4 g-4 my-3">
              <div className="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/adress-img.png"}
                      className="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <h6 className="text-primary h6-litle-card">
                      S'adresse à toutes les entreprises
                    </h6>
                    <Card.Text>
                      <span className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/evaluation.png"}
                      className="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <h6 className="text-primary h6-litle-card">Tout évaluer</h6>
                    <Card.Text>
                      <span className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/utilisateur.png"}
                      className="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <h6 className="text-primary h6-litle-card">
                      Garantir des utilisateurs vérifier
                    </h6>
                    <Card.Text>
                      <span className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card className="litle-card shadow">
                  <Card.Body>
                    <img
                      src={process.env.PUBLIC_URL + "images/partenair.png"}
                      className="img-fluid"
                      alt="C'est vous qui le faite"
                    />
                    <h6 className="text-primary h6-litle-card">
                      Partenaires RSE
                    </h6>
                    <Card.Text>
                      <span className="very-small-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution.
                      </span>
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
          className="img-fluid laptop-img-bg"
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
              className="img-fluid img-trust"
              alt="C'est vous qui le faite"
            />
            <img
              src={process.env.PUBLIC_URL + "images/clear-correct.png"}
              className="img-fluid  clear-correct "
              alt="C'est vous qui le faite"
            />
            <img
              src={process.env.PUBLIC_URL + "images/one-duro.png"}
              className="img-fluid  img-trust"
              alt="C'est vous qui le faite"
            />
            <img
              src={process.env.PUBLIC_URL + "images/istobe.png"}
              className="img-fluid  img-trust "
              alt="C'est vous qui le faite"
            />
          </div>
        </div>

        {/* tab part home*/}
        <div className="row justify-content-center tab-home py-5">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active row d-flex"
              id="client"
              role="tabpanel"
              aria-labelledby="client-tab">
              <div className="col-6">
              <img
              src={process.env.PUBLIC_URL + "images/costumer.png"}
              className="img-fluid"
              alt="C'est vous qui le faite"
            />
              


              </div>
              <div className="col-6  description-tab">
              <h2 className="pb-4">
              Client , Contribuable
              </h2>
              <p  class="text-justify">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br></br> <br></br>
               It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
 













            <div
              className="tab-pane fade"
              id="investisseur"
              role="tabpanel"
              aria-labelledby="investisseur-tab">
              sdsdsdUn seule outil pour s'engage dans une demarche durable Un
              seule outil pour s'engage dans une demarche durable Un seule outil
              pour s'engage dans une demarche durable Un seule outil pour
              s'engage dans une demarche durable
            </div>
            <div
              className="tab-pane fade"
              id="fornisseur"
              role="tabpanel"
              aria-labelledby="fornisseur-tab">
              sdeUn seule outil pour s'engage dans une demarche durable Un seule
              outil pour s'engage dans une demarche durable Un seule outil pour
              s'engage dans une demarche durable Un seule outil pour s'engage
              dans une demarche durable
            </div>
            <div
              className="tab-pane fade"
              id="condidat"
              role="tabpanel"
              aria-labelledby="condidat-tab">
              xxxUn seule outil pour s'engage dans une demarche durable Un seule
              outil pour s'engage dans une demarche durable Un seule outil pour
              s'engage dans une demarche durable Un seule outil pour s'engage
              dans une demarche durable
            </div>
            <div
              className="tab-pane fade"
              id="associations"
              role="tabpanel"
              aria-labelledby="associations-tab">
              Un seule outil pour s'engage dans une demarche durable Un seule
            </div>
          </div>
          <ul
            className="nav nav-tabs d-flex justify-content-between py-5"
            id="myTab-home"
            role="tablist">
            <li className="nav-item tab-li-home" role="client">
              <button
                className="nav-link active  tab-button-home ps-0 pt-4"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#client"
                type="button"
                role="tab"
                aria-controls="client"
                aria-selected="true">
                Client , Contribuable
              </button>
            </li>
            <li className="nav-item tab-li-home" role="salarie">
              <button
                className="nav-link  tab-button-home  ps-0 pt-4"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#salarie"
                type="button"
                role="tab"
                aria-controls="salarie"
                aria-selected="false">
                Salarié , stagaire
              </button>
            </li>
            <li className="nav-item tab-li-home" role="investisseur">
              <button
                className="nav-link  tab-button-home  ps-0 pt-4"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#investisseur"
                type="button"
                role="tab"
                aria-controls="investisseur"
                aria-selected="false">
                Investisseur , partenaire
              </button>
            </li>
            <li className="nav-item tab-li-home" role="fornisseur">
              <button
                className="nav-link  d-flex flex-column tab-button-home  ps-0 pt-4"
                id="fornisseur-tab"
                data-bs-toggle="tab"
                data-bs-target="#fornisseur"
                type="button"
                role="tab"
                aria-controls="fornisseur"
                aria-selected="false">
                Fornisseur ,sous-traitant, <span>prestataire</span>
              </button>
            </li>
            <li className="nav-item tab-li-home" role="condidat">
              <button
                className="nav-link tab-button-home ps-0 pt-4"
                id="condidat-tab"
                data-bs-toggle="tab"
                data-bs-target="#condidat"
                type="button"
                role="tab"
                aria-controls="condidat"
                aria-selected="false">
                Condidat Commercial
              </button>
            </li>
            <li className="nav-item tab-li-home" role="associations">
              <button
                className="nav-link d-flex flex-column tab-button-home  ps-0 pt-4"
                id="associations-tab"
                data-bs-toggle="tab"
                data-bs-target="#associations"
                type="button"
                role="tab"
                aria-controls="associations"
                aria-selected="false">
                <span>Associations,media, </span> <span>tous les autres</span>
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default homeContent;
