import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

export function ArticleCard({ title, image, description, category, slug }) {
  return (
    <Col className="w-100">
      <Link href={"actualites/" + slug}>
        <Image
          src={"../assets/imgs/articles/" + image}
          alt="article-image"
          className="article-img w-100"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div style={{ background: "var(--beige)", padding: "24px" }}>
        <div style={{ fontSize: "12px", color: "var(--lightgray)" }}>
          {category}
        </div>
        <h3 style={{ padding: "16px 0 8px 0" }}>{title}</h3>
        <div className="small-title" style={{ paddingBottom: "20px" }}>
          {description.replace(/(.{50})..+/, "$1…")}
        </div>
        <Link href={"actualites/" + slug}>
          <button className="d-flex w-auto border-0 bg-transparent ml-auto justify-content-end align-content-end article-arrow">
            <img src="/assets/imgs/icons/arrow-right.svg" alt="arrow-icon" />
          </button>
        </Link>
      </div>
    </Col>
  );
}
