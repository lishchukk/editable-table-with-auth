import React, {Component} from "react";
import './app.css';
import NavBar from "../nav-bar/nav-bar";
import LoginPage from "../../pages/login-page/login-page";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import ContactsPageContainer from "../containers/contacts-page-container/contacts-page-container";
import _ from "lodash";

const dataUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;


class App extends Component {
    state = {
        data: [],
        elemToEdit: {},
        isLoggedIn: false,
        isAddActive: false,
        isLoading: true,
        isEditMode: false,
        sort: 'asc', // or 'desc' (ascending or descending)
        sortField: 'id', //default value
        search: '',
    };

    async componentDidMount() {
        const data = await fetch(dataUrl)
            .then(response => response.json());

        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort),// для корректного отображжения сортировки при перезагрузке страницы
        });

    }

    getFilteredData = () => {
        const {data, search} = this.state;

        if (!search) {
            return data
        }
        let result = data.filter(item => {
            return (
                item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
                item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
                item["email"].toLowerCase().includes(search.toLowerCase())
            );
        });
        if (!result.length) {
            result = this.state.data
        }
        return result
    };

    onAddRow = row => {
        const cloneData = this.state.data.concat();
        cloneData.unshift(row);
        this.setState({
            data: cloneData,
            isAddActive: false
        });
    };

    onActiveToAdded = () => {
        this.setState({isAddActive: true});
    };

    onDeleteItem = id => {
        this.setState(({data}) => {
            const idx = data.findIndex(element => element.id === id);

            const newData = [
                ...data.slice(0, idx),
                ...data.slice(idx + 1)
            ];

            return {data: newData}
        });
    };

    onSort = sortField => {
        //копируем data для иммутабелности
        const cloneData = this.state.data.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(cloneData, sortField, sort);// что сортировать, по какому полю, как

        this.setState({data, sort, sortField});

    };

    onEdit = id => {
        const elem = this.state.data.find(element => element.id === id);

        this.setState({
            isEditMode: true,
            elemToEdit: elem
        });
    };

    onSaveEditForm = editedPerson => {

        this.setState(({data}) => {
            const idx = data.findIndex(element => element.id === editedPerson.id);

            const newData = [
                ...data.slice(0, idx),
                ...data.slice(idx + 1)
            ];
            newData.unshift(editedPerson);

            return {
                isEditMode: false,
                data: newData,
            }
        });
    };

    onSearchHandler = search => {
        this.setState({search})
    };

    onLogIn = async (username, password) => {

        const adminInfo = await fetch('http://localhost:3000/users').then(response => response.json());

        for (let i = 0; i < adminInfo.length; i++) {

            if (username === adminInfo[0].username && password === adminInfo[0].password) {

                this.setState({isLoggedIn: true});

                return <Redirect to='/contacts-page'/>;

            } else {

                alert('invalid username or password')
            }


        }


    };

    onLogOut = () => {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {

        const filteredData = this.getFilteredData();

        return (

            <div className="App">
                <BrowserRouter>
                    <NavBar/>

                    <Switch>
                        <Route path='/' exact render={() => {
                            return (
                                <Redirect to='/login-page'/>
                            )
                        }}/>

                        <Route path='/login-page' render={() => {
                            return <LoginPage onLogIn={this.onLogIn} isLoggedIn={this.state.isLoggedIn}
                                              onLogOut={this.onLogOut}/>
                        }}/>
                        }} />

                        <Route path='/contacts-page' render={() => {

                            if (this.state.isLoggedIn) {

                                return <ContactsPageContainer
                                    {...this.state}
                                    filteredData={filteredData}
                                    onAddRow={this.onAddRow}
                                    onActiveToAdded={this.onActiveToAdded}
                                    onDeleteItem={this.onDeleteItem}
                                    onSort={this.onSort}
                                    onEdit={this.onEdit}
                                    onSaveEditForm={this.onSaveEditForm}
                                    onSearchHandler={this.onSearchHandler}
                                />

                            } else {

                                alert('Please, login to see you contacts');
                                return <Redirect to='/login-page'/>
                            }

                        }}/>

                    </Switch>

                </BrowserRouter>
            </div>

        );
    }
}

export default App;




