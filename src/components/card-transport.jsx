import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardTransport({ dataTransport = [], setShow, show }) {
  // console.log("🚀 ~ CardTransport ~ dataTransport:", dataTransport)
  //   console.log("show:", show)
  const dataFiltered = dataTransport.filter((value) => value.name === show);

  const DetailTransport = (value) => {
    return (
      <>
        {show === value.value && (
          <>
            <Card.Text className="pt-4">
              <table className="table table-striped table-bordered text-center">
                {dataFiltered.map((value, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>Price</td>
                        <td>Rp {value.price}</td>
                      </tr>
                      <tr>
                        <td>Day</td>
                        <td>{value.day} days</td>
                      </tr>
                      <tr>
                        <td>Package</td>
                        <td>{value.package}</td>
                      </tr>
                      <tr>
                        <td>Benefit</td>
                        <td>{value.Benefits}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button variant="success" onClick={console.log('clicked')}>
                Order
              </Button>
            </div>
          </>
        )}
      </>
    );
  };
  return (
    <div
      className="d-flex flex-wrap justify-content-around py-4"
      style={{ height: show === "" && "35rem" }}
    >
      {dataTransport.map((value, index) => {
        return (
          <Card
            key={index}
            style={{
              width: "18rem",
              height: show === value.name ? "auto" : "auto",
              maxHeight: show === value.name ? "60rem" : "35rem",
              transition: "height 0.7s ease, max-height 0.7s ease",
            }}
          >
            <Card.Img
              className="bg-size-card"
              style={{ backgroundImage: `url(${value.img})` }}
              variant="top"
            />
            <Card.Body className="bg-dark text-light">
              <Card.Title className="fw-bold fs-2">{value.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                onClick={
                  show === value.name
                    ? () => setShow("")
                    : () => setShow(value.name)
                }
              >
                Details
              </Button>
              <DetailTransport value={value.name} />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
