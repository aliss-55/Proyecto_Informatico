import '../routes/Dashboard.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

var newData = new Array();
function data() {
  fetch("http://20.121.113.4:3000/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    newData=data;
  })
}

data();
  
  class App extends React.Component {
    state = {
      data:newData,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        title: "",
        description: "",
        status: "",
      },
    };
    
    actualizar() {
      fetch("http://20.121.113.4:3000/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.setState({
            data: data,
          });
        })
        .catch((error) => {
          throw error;
        });
    }

    mostrarModalActualizar = (dato: any) => {
      this.setState({
        form: dato,
        modalActualizar: true,
      });
    };
  
    cerrarModalActualizar = () => {
      this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
      const maxId = this.state.data.reduce((max, item) => (item.id > max ? item.id : max), 0);
      this.setState({
        modalInsertar: true,
        form: {
          ...this.state.form,
          id: maxId + 1,
        },
      });
    };

    cerrarModalInsertar = () => {
      this.setState({ modalInsertar: false });
    };

    handleChange = (e: { target: { name: any; value: any; }; }) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    };

    insertar = (dato: any) => {
      return fetch(`http://20.121.113.4:3000/tasks/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dato)
      })
        .then((response) => {
          console.log(dato);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          var opcion = window.alert("Data inserted successfully");
          opcion;
          this.actualizar();
        })
        .catch((error) => {
          throw error;
        });
    };

    eliminar = (dato: any) => {
      var opcion = window.confirm("Are you sure you want to delete the item " + dato.id);
      if (opcion == true) {
        return fetch(`http://20.121.113.4:3000/tasks/${dato.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            this.actualizar();
            return response.json();
          })
          .catch((error) => {
            throw error;
          });
      };
    };
    editar = (dato: any) => {
      var jsonedit = {
        "title": dato.title,
        "description": dato.description,
        "status": dato.status,
      }
      return fetch(`http://20.121.113.4:3000/tasks/${dato.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonedit),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          var hecho = window.alert("Task edited successfully");
          hecho;
          this.actualizar();        
        })
        .catch((error) => {
          throw error;
        });
    };

    render() {
      
      return (
        <>
          <Container>
          <br />
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Create</Button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.title}</td>
                    <td>{dato.description}</td>
                    <td>{dato.status}</td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => this.mostrarModalActualizar(dato)}
                      >
                        Edit
                      </Button>{" "}
                      <Button color="danger" onClick={() => {this.eliminar(dato);}}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
  
          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
             <div><h3>Edit Task</h3></div>
            </ModalHeader>

            <ModalBody>             
              <FormGroup>
                <label>
                  Task: 
                </label>
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.title}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Description: 
                </label>
                <input
                  className="form-control"
                  name="description"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.description}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Status: 
                </label>
                <select
                  className="form-select"
                  name="status"
                  onChange={this.handleChange}
                  value={this.state.form.status}
                >
                  <option value="Pendin">Pending</option>
                  <option value="In_Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {this.editar(this.state.form); this.setState({ modalActualizar: false })}}
              >
                Edit
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
  
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
             <div><h3>Insert Task</h3></div>
            </ModalHeader>  
            <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              <input
                className="form-control"
                name="id"
                type="text"
                value={this.state.form.id}
                onChange={this.handleChange}
                
              />
            </FormGroup>            
              <FormGroup>
                <label>
                  Title: 
                </label>
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Description: 
                </label>
                <input
                  className="form-control"
                  name="description"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Status: 
                </label>
                <select
                  className="form-select"
                  name="status"
                  onChange={this.handleChange}
                  value={this.state.form.status}
                >
                  <option value="null">Select</option>
                  <option value="Pendin">Pending</option>
                  <option value="In_Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {this.insertar(this.state.form);this.setState({ modalInsertar: false })}}
              >
                Insert
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  }
  export default App;
  