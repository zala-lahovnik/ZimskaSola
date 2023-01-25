import {Button, FormGroup, TextField} from "@mui/material";
import {useContext, useState} from "react";
import {UsersContext} from "../context/UsersContext";
import '../styles/deposit.css'
import {bankApi} from "../constants/axios";
import {useNavigate} from "react-router-dom";


const AddMember = () => {
    const navigate = useNavigate()
    const {getUsers} = useContext(UsersContext)

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [currentAmmount, setCurrentAmmount] = useState<number>(0)

    const handleSubmit = async () => {
        try {
            const response = await bankApi.post('addMember', {id: 0, email: email, ime: name, priimek: surname, imetje: currentAmmount})

            getUsers();

            if(response)
                navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='deposit-container'>
            <FormGroup>
                <div className='deposit-input-container'>
                    <TextField
                        type="text"
                        id="outlined-basic"
                        label="Ime"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        style={{width: '100%'}}
                    />
                </div>
                <div className='deposit-input-container'>
                    <TextField
                        type="text"
                        id="outlined-basic"
                        label="Priimek"
                        variant="outlined"
                        onChange={(e) => setSurname(e.target.value)}
                        value={surname}
                        style={{width: '100%'}}
                    />
                </div>
                <div className='deposit-input-container'>
                    <TextField
                        type="text"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        style={{width: '100%'}}
                    />
                </div>

                <div className='deposit-input-container'>
                    <TextField
                        type="number"
                        id="outlined-basic"
                        label="Ammount"
                        variant="outlined"
                        onChange={(e) => setCurrentAmmount(parseFloat(e.target.value))}
                        value={currentAmmount}
                        style={{width: '100%'}}
                    />
                </div>

                <div className='deposit-input-container'>
                    <Button
                        onClick={handleSubmit}
                        variant="contained">
                        Add member
                    </Button>
                </div>
            </FormGroup>
        </div>
    )
}

export default AddMember