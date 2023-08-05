import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { BsCameraVideoFill } from "react-icons/bs";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import "video-react/dist/video-react.css";
const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="mt-5">
      <Row>
        <div className="">
          <h1 className="text-center text-capitalize underline position-relative">
            Our videos
          </h1>
        </div>
      </Row>
      <Row className="mt-5">
        <Col lg={6} md={12} sm={12}>
          <div className="descr">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ipsa labore laborum! Rem repellat hic perspiciatis dolorum soluta
              maiores doloremque sed voluptas impedit quidem. Autem qui itaque
              illum tempora magnam distinctio debitis repudiandae vero dolores
              accusantium consequatur error, eos delectus, perferendis
            </p>
            <p>
              assumenda, animi eligendi id quas atque nisi libero porro
              doloremque. Facilis, obcaecati maxime perferendis corrupti rerum
              fuga cupiditate quod voluptates commodi culpa reprehenderit,
              dolore aliquam dolores facere, fugiat autem in voluptatibus
            </p>
            <p>
              voluptatum earum itaque magnam ea a consequuntur? Possimus ullam
              officiis natus blanditiis dolorum expedita deserunt quidem. Non,
              iure. Reprehenderit quisquam facere dolor, numquam blanditiis
              repudiandae ea necessitatibus voluptates?
            </p>
          </div>
        </Col>
        <Col
          lg={6}
          md={12}
          sm={12}
          className="videoCard d-flex justify-content-center align-items-center shadow-lg"
        >
          <BsCameraVideoFill className="videoIcon" onClick={handleShow} />
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} size="lg">
        <Player poster="">
          <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
          <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Video;
