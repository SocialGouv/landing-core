import Link from "next/link";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export function Header({ title, description, image, app_access_link, googleplay_link, appStore_link, qr_code }) {
  return (
    <header>
      <Row className="d-flex justify-content-between w-100 align-items-xl-center align-items-md-start no-gutters">
        <Col xs={12} md={{ offset: 0, span: 5 }}>
          {qr_code && (
            <img
              src={"../assets/imgs/header/" + qr_code}
              alt="qr-code.jpg"
              width="20%"
              className="pb-4"
            />
          )}
          <h1>{title}</h1>
          <div className="py-3 py-md-5 description">{description}</div>
          <Link href={app_access_link || ""} passHref={true}>
            <a target="_blank">
              <Button className="blue-btn mb-5" style={{ width: "auto" }}>
                Accéder à l'app
              </Button>
            </a>
          </Link>
          <br />
          <div className="pb-4 pb-md-0">
            <Link href={googleplay_link || ""} passHref={true}>
              <a target="_blank">
                <Button
                  className="mr-3 mb-md-4 mb-lg-0"
                  style={{
                    backgroundColor: "transparent",
                    backgroundImage: "url(/assets/imgs/header/playStore.svg)",
                    backgroundRepeat: "no-repeat",
                    width: "155px",
                    height: "50px",
                    border: "none",
                  }}
                />
              </a>
            </Link>
            <Link href={appStore_link || ""} passHref={true}>
              <a target="_blank">
                <Button
                  style={{
                    backgroundColor: "transparent",
                    backgroundImage: "url(/assets/imgs/header/appStore.svg)",
                    backgroundRepeat: "no-repeat",
                    width: "155px",
                    height: "50px",
                    border: "none",
                  }}
                />
              </a>
            </Link>
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          md={6}
        >
          <img src={"../assets/imgs/header/" + image} alt="header-phone" className="main-img" />
        </Col>
      </Row>
    </header>
  );
}
