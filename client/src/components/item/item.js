
class fridgeItem extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Add Food Item
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Fridge Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control as="select">
                    <option>Milk</option>
                    <option>Butter</option>
                    <option>Cream</option>
                    <option>Cheese</option>
                    <option>Sour Cream</option>
                    <option>Yogurt</option>
                    <option> Apple</option>
                    <option>Orange</option>
                    <option>Grapes</option>
                    <option>Banana</option>
                    <option>Melons</option>
                    <option>Bread</option>
                    <option>Ground Meat</option>
                    <option>Lunch Meat</option>
                    <option>Steaks</option>
                    <option>Roasts</option>
                    <option>Hot Dogs</option>
                    <option>Bacon</option>
                    <option>Sausage</option>
                    <option>Eggs</option>
                    <option>Poltry</option>
                    <option>Potatos</option>
                    <option>Carrots</option>
                    <option>Radish</option>
                    <option>Fish</option>
                    <option>Smoked fish</option>
                    <option>Shellfish</option>
                    <option>Herbs (fresh)</option>
                    <option>Asparagus</option>
                    <option>Corn</option>
                    <option>Cabbage</option>
                    <option>Celery</option>
                    <option>Lettuce</option>
                    <option>Peppers</option>
                    <option>Squash</option>
                    <option>Mushrooms</option>
                    <option>Tomatoes</option>
                    <option>Broccoli</option>
                    <option>Spinach</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Food Category</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>Dairy</option>
                    <option>Fruit</option>
                    <option>Grains</option>
                    <option>Meat</option>
                    <option>Root Veggies</option>
                    <option>Seafood</option>
                    <option>Veggies</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Expiration</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>2</option>
                    <option>3</option>
                    <option>7</option>
                    <option>10</option>
                    <option>14</option>
                    <option>21</option>
                    <option>30</option>
                    <option>35</option>
                    <option>60</option>
                    </Form.Control>
                </Form.Group>

            </Form>;
                
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  render(<fridgeItem />);

  export default fridgeItem;