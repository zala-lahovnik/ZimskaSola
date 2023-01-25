import {Button, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {useContext, useState} from "react";
import {UsersContext} from "../context/UsersContext";
import '../styles/deposit.css'
import {bankApi} from "../constants/axios";
import {useNavigate} from "react-router-dom";


const Withdrawl = () => {
    const navigate = useNavigate()
    const {users, getUsers} = useContext(UsersContext)

    const [selectedId, setSelectedId] = useState<number | null>(null)
    const [selectedEmail, setSelectedEmail] = useState<string>('')
    const [selectedAmmount, setSelectedAmmount] = useState<number | null>(null)

    const handleMemberChange = (event: SelectChangeEvent) => {
        setSelectedEmail(event.target.value)

        users.forEach((user: any) => {
            if(user.email === event.target.value)
                setSelectedId(user.id)
        })
    }

    const handleSubmit = async () => {
        try {
            const response = await bankApi.post('withdrawFunds', {id: selectedId, ammount: selectedAmmount})

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
                <InputLabel id="deposit-member-label">Member</InputLabel>
                <Select
                    labelId="deposit-member-label"
                    value={selectedEmail}
                    label='Member'
                    onChange={handleMemberChange}
                >
                    {users && users.map((user: any) => {
                        return (
                            <MenuItem value={user.email}>
                                {user.email}
                            </MenuItem>
                        )
                    })}

                </Select>

                <div className='deposit-input-container'>
                    <TextField
                        type="number"
                        id="outlined-basic"
                        label="Ammount"
                        variant="outlined"
                        onChange={(e) => setSelectedAmmount(parseFloat(e.target.value))}
                        value={selectedAmmount}
                        style={{width: '100%'}}
                    />
                </div>

                <div className='deposit-input-container'>
                    <Button
                        onClick={handleSubmit}
                        variant="contained">
                        Withdraw
                    </Button>
                </div>
            </FormGroup>
        </div>
    )
}

export default Withdrawl