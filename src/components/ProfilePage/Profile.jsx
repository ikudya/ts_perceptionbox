import React, { useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {
    CardWrapper,
    Container,
    episod,
    Episode,
    Episodes,
    Info,
    Location,
    Name,
    Status,
    Text,
    Title
} from "../Users/UserElement";

const BASE_URL='https://rickandmortyapi.com/api/character/';

const ProfilePage = () =>{
    const params = useParams();
    const [data, setData] = useState([]);
    const [loc, setLoc] = useState([]);
    const [epis, setEpis] = useState([]);

    useEffect(()=> {
        axios.get(BASE_URL+`${params.id}`)
            .then(({data})=> {
                console.log(data)
                setData(data)
                setEpis(data.episode)
                setLoc(data.location)
                console.log(data.location)
                }
            )
    },[])


    return(
        <CardWrapper>
            <Container>
                <Info>
                    <Name>{data.name} {data.status}</Name>
                    <Text>{data.species} {data.gender} </Text>
                    <Episodes>
                        <Title>Episode</Title>
                        {epis.map(epis => (
                            <Episode>
                                <Text>{epis}</Text>
                            </Episode>
                        ))}
                    </Episodes>
                    <Location>
                        <Title>Location</Title>
                        <Text>{loc.name}</Text>
                        <Text>{loc.url}</Text>
                    </Location>
                    <Text> {data.created}</Text>
                </Info>
            </Container>
        </CardWrapper>

    )}

export default ProfilePage;