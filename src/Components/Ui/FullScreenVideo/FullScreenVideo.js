import "./FullScreenVideo.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const FullScreenVideo = () => {
  return (
    <>
      <div className="overlay"></div>

      <video playsinline="playsinline" muted="muted" loop="loop" autoplay="autoplay">
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
          />
      </video>

      <div className="container h-100 slogan-video">
        <div className="d-flex h-100 align-items-center">
          <div className="w-100 text-white">
            <h1 className="col-8 d-flex flex-column">
              <span>Le site d'évaluation RSE</span>
              <span>pour réinventer la performance</span>
              <span>des entreprise</span>
            </h1>

            <p className="lead mb-0 mt-4 subslogant-video d-flex flex-column">
              <span>
                <small>
                  Sautons le pas pour que chaque voix compte qu'il s'agit de
                  sauver ce
                </small>
              </span>
              <span>
                <small>que nous avons de plus precieus </small>
              </span>
            </p>
            <div className="d-flex align-items-center mt-5 read-video">
              <Button variant="light" className="rounded-circle btn-read ">
                <FontAwesomeIcon icon={faCaretRight} />
              </Button>
              <p className="text-uppercase">
                <small>lancer la video</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenVideo;
