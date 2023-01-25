import {Button, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {useContext, useState} from "react";
import {UsersContext} from "../context/UsersContext";
import '../styles/deposit.css'
import {bankApi} from "../constants/axios";
import {useNavigate} from "react-router-dom";


const Transfer = () => {
    const navigate = useNavigate()
    const {users, getUsers} = useContext(UsersContext)

    const [selectedIdFrom, setSelectedIdFrom] = useState<number | null>(null)
    const [selectedIdTo, setSelectedIdTo] = useState<number | null>(null)
    const [emailFrom, setEmailFrom] = useState<string>('')
    const [emailTo, setEmailTo] = useState<string>('')
    const [selectedAmmount, setSelectedAmmount] = useState<number | null>(null)

    const handleMemberFromChange = (event: SelectChangeEvent) => {
        setEmailFrom(event.target.value)

        users.forEach((user: any) => {
            if(user.email === event.target.value)
                setSelectedIdFrom(user.id)
        })
    }

    const handleMemberToChange = (event: SelectChangeEvent) => {
        setEmailTo(event.target.value)

        users.forEach((user: any) => {
            if(user.email === event.target.value)
                setSelectedIdTo(user.id)
        })
    }

    const handleSubmit = async () => {
        try {
            const response = await bankApi.post('transferFunds', {idFrom: selectedIdFrom, idTo: selectedIdTo, ammount: selectedAmmount})

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
                <InputLabel id="deposit-member-label">Member from</InputLabel>
                <Select
                    labelId="deposit-member-label"
                    value={emailFrom}
                    label='Member'
                    onChange={handleMemberFromChange}
                >
                    {users && users.map((user: any) => {
                        return (
                            <MenuItem value={user.email}>
                                {user.email}
                            </MenuItem>
                        )
                    })}

                </Select>

                <InputLabel id="deposit-member-label">Member to</InputLabel>
                <Select
                    labelId="deposit-member-label"
                    value={emailTo}
                    label='Member'
                    onChange={handleMemberToChange}
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

export default Transfer