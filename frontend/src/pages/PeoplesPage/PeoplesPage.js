import React, { useEffect, useState } from "react";
import * as s from './styled-PeoplesPage';
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card-people/CardPeople';
import Pagination from '../../components/pagination/Pagination';
import useProtectedPage from './../../hooks/useProtectedPage';

export default function CartPage() {
  useProtectedPage();

  const [peoples, setPeoples] = useState(100);
  const [totalPeoples, setTotalPeoples] = useState(100);
  const [searchBy, setSearchBy] = useState('');
  const [ordenation, setOrdenation] = useState('username-ASC');
  const [ageMin, setAgeMin] = useState(0);
  const [ageMax, setAgeMax] = useState(100);
  const [actualPage, setActualPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [numPeoplePgn, setNumPeoplePgn] = useState(100);
  const [listPlot, setListPlot] = useState(100);

  const getPeoples = () => {
    axios.get(`https://randomuser.me/api/?results=${totalPeoples}`)
    .then((res)=>{
      setPeoples(res.data.results);
    })
    .catch((err)=>{
      const returnErr = err.response.status
        if (returnErr >= 400 && returnErr <= 500) {
          alert("Ocorreu um erro, verifique os dados inseridos e tente novamente")
        } else if (returnErr >= 500 && returnErr <= 600) {
          alert("Ocorreu um erro no servidor, tente novamente mais tarde")
        } else {
          alert("Ocorreu um erro, tente novamente mais tarde")
        }
    })
  }

  useEffect(() => {
    getPeoples()
  }, [totalPeoples])

  useEffect(() => {
    applyFilter()
  }, [peoples, searchBy, ordenation, ageMin, ageMax])

  const onSearchBy = (event) => {
    setSearchBy(event.target.value);
    setActualPage(1);
  }

  const updateOrdenation = (event) => {
    setOrdenation(event.target.value);
    setActualPage(1);
  }

  const onAgeMin = (event) => {
    setAgeMin(event.target.value);
    setActualPage(1);
  }

  const onAgeMax = (event) => {
    setAgeMax(event.target.value);
    setActualPage(1);
  }

  const onChangeTotalPeoples = (event) => {
    setTotalPeoples(Math.max(Number(event.target.value), 1))
    setPages(Math.ceil( Number(event.target.value) / numPeoplePgn ))
  }

  const changeActualPage = (page) => {
    setActualPage(page);
  }

  const updateNumPeoplePgn = (event) => {
    setNumPeoplePgn(Math.max(Number(event.target.value), 1));
    setPages(Math.ceil( Number(totalPeoples) / Number(event.target.value) ))
  }

  const applyFilter = () => {
    if (peoples.length > 0) {
      const listPeopleFilter = peoples.filter( people => {
        return (
          people.login.username.toLowerCase().includes(searchBy.toLowerCase()) ||
          people.name.first.toLowerCase().includes(searchBy.toLowerCase()) ||
          people.name.last.toLowerCase().includes(searchBy.toLowerCase()) ||
          people.email.toLowerCase().includes(searchBy.toLowerCase())
        )
      }).filter( people => {
        return people.registered.age >= ageMin && people.registered.age <= ageMax
      }).sort( (peopleNow, peopleNext) => {
        if (ordenation === "name-ASC") { 
          return (1) * (peopleNow.name.first.localeCompare(peopleNext.name.first)) 
        } else if (ordenation === "name-DESC") { 
          return (-1) * (peopleNow.name.first.localeCompare(peopleNext.name.first)) 
        } else if (ordenation === "username-ASC") { 
          return (1) * (peopleNow.login.username.localeCompare(peopleNext.login.username)) 
        } else if (ordenation === "username-DESC") { 
          return (-1) * (peopleNow.login.username.localeCompare(peopleNext.login.username)) 
        } else if (ordenation === "age-ASC") { 
          return (1) * (peopleNow.registered.age - peopleNext.registered.age) 
        } else { 
          return (-1) * (peopleNow.registered.age - peopleNext.registered.age) 
        }
      })
      setListPlot(listPeopleFilter)
      setPages(Math.ceil( listPeopleFilter.length / numPeoplePgn ))
    }
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header />
      </s.LineHeader>

      <s.Main>
        <s.MainLeft>

          <s.FilterAndPagination><h1>Paginação</h1></s.FilterAndPagination>

          <s.FieldsetInput>
            <s.Legend>Total pessoas</s.Legend>
            <s.InputNumber
              type="number"
              onChange={onChangeTotalPeoples}
              value={totalPeoples}
            />
          </s.FieldsetInput>

          <s.FieldsetInput>
            <s.Legend>N° por página</s.Legend>
            <s.InputNumber
              type="number"
              onChange={updateNumPeoplePgn}
              value={numPeoplePgn}
            />
          </s.FieldsetInput>

          <s.FilterAndPagination><h1>Filtros</h1></s.FilterAndPagination>

          <s.FieldsetInput>
            <s.Legend>Buscar por</s.Legend>
              <s.InputCamp
                type="text"
                onChange={onSearchBy}
                value={searchBy}
              />
          </s.FieldsetInput>

          <s.FieldsetInput>
            <s.Legend>Ordenar por</s.Legend>
              <s.OrderBy
                value={ordenation}
                onChange={updateOrdenation}
              >
                <option value="name-ASC">Nome (cresc)</option>
                <option value="name-DESC">Nome (decres)</option>
                <option value="username-ASC">Username (cresc)</option>
                <option value="username-DESC">Username (decres)</option>
                <option value="age-ASC">Idade (cresc)</option>
                <option value="age-DESC">Idade (decres)</option>
              </s.OrderBy>
          </s.FieldsetInput>

          <s.FieldsetInput>
            <s.Legend>Idade mínima</s.Legend>
            <s.InputNumber
              type="number"
              onChange={onAgeMin}
              value={ageMin}
            />
          </s.FieldsetInput>

          <s.FieldsetInput>
            <s.Legend>Idade máxima</s.Legend>
            <s.InputNumber
              type="number"
              onChange={onAgeMax}
              value={ageMax}
            />
          </s.FieldsetInput>

        </s.MainLeft>
        <s.MainRight>
          <s.Box>
            <s.ListProducts>
              {
                listPlot && listPlot.length > 0 ? 
                  listPlot.filter( (people, index) => {
                    return (index >= (actualPage-1)*Number(numPeoplePgn) && index < ((actualPage-1)*Number(numPeoplePgn)+Number(numPeoplePgn)) )
                  }).map((people, index) => {
                      return (
                        <Card key={index}
                          picture={people.picture.large}
                          nameTitle={people.name.title}
                          nameFirst={people.name.first}
                          nameLast={people.name.last}
                          email={people.email}
                          username={people.login.username}
                          age={people.registered.age}
                        />
                      )
                  })
                  :
                  <h1>carregando...</h1>
                }
            </s.ListProducts>
            <s.LinePagination>
              <Pagination
                actualPage={actualPage}
                changeActualPage={changeActualPage}
                pages={pages}
              />
            </s.LinePagination>
          </s.Box>
        </s.MainRight>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}