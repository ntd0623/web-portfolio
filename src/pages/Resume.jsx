import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../components/Particle";

function Resume() {
  const [loading, setLoading] = useState(true);
  const [fallbackVisible, setFallbackVisible] = useState(false);

  const resumePdf = "/ThanhDo_CV.pdf";

  const renderFallbackContent = () => (
    <div className="text-center py-5">
      <h3>Không thể tải CV trong trang</h3>
      <p>Vui lòng sử dụng các tùy chọn dưới đây để xem hoặc tải về:</p>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          onClick={() => {
            const link = document.createElement("a");
            link.href = window.location.origin + resumePdf; // Đảm bảo đường dẫn đầy đủ
            link.download = "ThanhDo_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="mx-2"
        >
          <AiOutlineDownload />
          Download Resume
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 style={{ paddingTop: "30px" }}>
            My <strong className="purple">Resume</strong>
          </h1>
        </Row>

        {/* Hiển thị CV với embed */}
        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <Col xs={12} md={10} lg={8}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "800px",
                boxShadow: "0 0 20px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {loading && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3">Đang tải CV...</p>
                  </div>
                </div>
              )}

              {fallbackVisible && renderFallbackContent()}

              <embed
                src={resumePdf}
                type="application/pdf"
                width="100%"
                height="100%"
                onLoad={() => setLoading(false)}
                onError={() => setFallbackVisible(true)}
              />
            </div>
          </Col>
        </Row>

        {/* Các nút tương tác với CV */}
        <Button
          variant="success"
          onClick={() => {
            console.log("Nút Download Resume được click!");
            const link = document.createElement("a");
            link.href = window.location.origin + resumePdf;
            link.download = "ThanhDo_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          style={{
            width: "200px",
            margin: "10px",
            position: "relative",
            zIndex: 1,
          }} // Đảm bảo nút không bị che
        >
          <AiOutlineDownload />
          Download Resume
        </Button>
      </Container>
    </div>
  );
}

export default Resume;
