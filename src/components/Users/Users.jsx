import React, {useEffect, useState} from "react";
import axios from "axios";
import {Autocomplete, Box, Container, Pagination, Stack, TextField} from "@mui/material";
import {Link} from "react-router-dom";

const BASE_URL='https://rickandmortyapi.com/api/character/?';

const Users = (props) => {
    const [post, setPost] = useState([]);
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty]=useState(0);
    useEffect(()=>{
        axios.get(BASE_URL+`name=${name}&page=${page}`)
            .then(({data})=> {
                setPost(data.results)
                setPageQty(data.info.pages)
            }
        )
    },[name,page])

    return(
     <Container maxWidth="md">
         <Stack spacing={2} >
             <Autocomplete
                 value={name}
                 onChange={(event, newValue) => {
                     setName(newValue);
                 }}
                 id="controllable-states-demo"
                 options={post.map((option) => option.name)}
                 renderInput={(params) =>
                     <TextField {...params} fullWidth label="Name" onChange={(event) => setName(event.target.value)} label="Name" />}
             />
                 <Pagination
                     showFirstButton showLastButton
                    count={pageQty}
                    page={page}
                    onChange={(_, num )=> setPage(num)}
                    sx={{marginY: 3, marginX:'auto'}}
                 />

             {
                 post.map(post=> (
                     <Link
                         to={{
                        pathname: `/id/${post.id}`,
                     }}>
                         <h1>{post.name + '  '}</h1>
                         <h2> {post.status} </h2>
                     </Link>

                 ))
             }
         </Stack>
     </Container>
  )
}

export default Users;