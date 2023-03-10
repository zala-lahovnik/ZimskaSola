import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {UsersContext} from "../context/UsersContext";
import {useContext} from "react";


const Users = () => {
    const {users} = useContext(UsersContext);

    return (
        <div style={{marginLeft: '150px', marginRight: '150px'}}>
            <Table style={{marginTop: '50px'}}>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Id</b></TableCell>
                        <TableCell><b>Ime</b></TableCell>
                        <TableCell><b>Priimek</b></TableCell>
                        <TableCell><b>Email</b></TableCell>
                        <TableCell><b>Imetje (&euro;)</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users.map((user:any) => {
                        return (
                            <TableRow>
                                <TableCell>
                                    {user.id}
                                </TableCell>
                                <TableCell>
                                    {user.ime}
                                </TableCell>
                                <TableCell>
                                    {user.priimek}
                                </TableCell>
                                <TableCell>
                                    {user.email}
                                </TableCell>
                                <TableCell>
                                    {user.imetje}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Users