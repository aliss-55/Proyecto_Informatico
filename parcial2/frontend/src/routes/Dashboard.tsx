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
  fetch("http://localhost:3000/tasks", {
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
      this.setState({
        modalInsertar: true,
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

    actualizar = () => {
      return fetch(`http://localhost:3000/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log(response.json());
        })
        .catch((error) => {
          console.error("Error al actualizar la tarea:", error);
          throw error;
        });
    };
    
    insertar = (dato: any) => {
      return fetch(`http://localhost:3000/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dato),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error al Crear la tarea:", error);
          throw error;
        });
    };

    eliminar = (dato: any) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
      if (opcion == true) {
        return fetch(`http://localhost:3000/tasks/${dato.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .catch((error) => {
            console.error("Error al eliminar la tarea:", error);
            throw error;
          });
      };
    };
    editar = (dato: any) => {
      return fetch(`http://localhost:3000/tasks/${dato.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dato),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(),
          data();
        })
        .catch((error) => {
          console.error("Error al editar la tarea:", error);
          throw error;
        });
    };

    render() {
      
      return (
        <>
          <Container>
          <br />
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
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
                        Editar
                      </Button>{" "}
                      <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
  
          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
             <div><h3>Editar Registro</h3></div>
            </ModalHeader>

            <ModalBody>             
              <FormGroup>
                <label>
                  Tarea: 
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
                <input
                  className="form-control"
                  name="status"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.status}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {this.editar(this.state.form)
                  .then(() => data())
                  .then(() => this.setState({ modalActualizar: false }));
              }}
              >
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
  
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
             <div><h3>Insertar Tarea</h3></div>
            </ModalHeader>  
            <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>            
              <FormGroup>
                <label>
                  Title: 
                </label>
                <input
                  className="form-control"
                  name="Title"
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
                  name="Description"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Status: 
                </label>
                <input
                  className="form-control"
                  name="Status"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {this.insertar(this.state.form);this.actualizar;this.setState({ modalInsertar: false })}}
              >
                Insertar
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  }
  export default App;
  