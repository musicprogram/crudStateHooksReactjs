import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Collapse, CardBody, Card} from 'reactstrap';
import './App.css';


const data = [
    { id: 1, personaje: "Naruto", anime: "Naruto" },
    { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
    { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

const datao = [
    { id: 1, personaje: "Naruto", anime: "Naruto" }
];


function App() {
  const [dataAnime, setDataAnime] = useState(data);
  const [Personaje, setPersonaje] = useState('');
  const [Anime, setAnime] = useState('');
  const [Id, setId] = useState('');

  const [modal, setModal] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const toggle = (elemento) =>{
      setModal(!modal);
      if(elemento){
          setId(elemento.id);
          setAnime(elemento.anime);
          setPersonaje(elemento.personaje);
          setIsEdit(true);
      }else{
          setId(dataAnime.length+1);
          setAnime("");
          setPersonaje("");
          setIsEdit(false);
      }
  }

  const updateDataObject = () =>{
    let cont = 0;
    let list = dataAnime;
    list.map((elemento)=>{
        if(Id === elemento.id){
            list[cont].personaje= Personaje
            list[cont].anime = Anime
        }
        cont++;
        setDataAnime(list);
    })
      setModal(false)
  }


  const deleteDataObject = (id) =>{
        let option = window.confirm("are you sure to delete this element? " + id);
        let cont = 0;
        let list =  [...dataAnime];
        list.map((element)=>{
            if(id === element.id){
                list.splice(cont, 1);
            }
            cont++;
        })
        setDataAnime(list);

  }

    const handleChangeAnime = (e) =>{
        setAnime(e.target.value)
    };

    const handleChangePersonaje = (e) =>{
        setPersonaje(e.target.value)
    };


  const insert = (e) =>{
      e.preventDefault();
      let valueNew;
      valueNew = dataAnime.length + 1;

      //id

       // datos formulario
      let data = {
          id: valueNew,
          personaje: Personaje,
          anime: Anime
      }

      let list = dataAnime;
      list.push(data);
      setDataAnime(list)
      setAnime("");
      setPersonaje("");
      toggle();
  };


  return (
    <Container>
        <div className="App mt-4">
            <Button
                color="success mb-2"
                onClick={()=>toggle(false)}>
                Insertar nuevo personaje + <span>{dataAnime.length}</span>
            </Button>
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Personaje</th>
                    <th>Anime</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {dataAnime.map((elemento)=>{
                    return(
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.personaje}</td>
                            <td>{elemento.anime}</td>
                            <td>
                                <Button color="primary mr-2" onClick={()=>toggle(elemento)}>Editar</Button>
                                <Button color="danger mr-2" onClick={()=>deleteDataObject(elemento.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>



        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader >Insertar Registro</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <label>
                        Id:
                    </label>
                    <input
                        className="form-control"
                        name="id"
                        type="text"
                        value={Id}
                        readOnly
                    />
                </FormGroup>

                <FormGroup>
                    <label>
                        Personaje:
                    </label>
                    <input
                        className="form-control"
                        name="personaje"
                        type="text"
                        onChange={handleChangePersonaje}
                        value={Personaje}
                    />
                </FormGroup>

                <FormGroup>
                    <label>
                        Anime:
                    </label>
                    <input
                        className="form-control"
                        name="anime"
                        type="text"
                        onChange={handleChangeAnime}
                        value={Anime}
                    />
                </FormGroup>

            </ModalBody>
            <ModalFooter>
                {
                    isEdit ? (
                        <Button color="primary" onClick={updateDataObject}>Editar</Button>
                        ):(
                        <Button color="primary" onClick={insert}>Insertar</Button>
                    )
                }


                <Button color="secondary"  onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>



    </Container>
  );
}

export default App;
