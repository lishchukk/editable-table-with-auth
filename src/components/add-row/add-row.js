import React, {Component, Fragment} from 'react';
import './add-row.scss'
import InputsContainer from "../containers/inputs-container/inputs-container";


class AddRow extends Component {

    state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    onChangeInputValue = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmitHandler = event => {
        event.preventDefault();
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        });
    };

    render() {

        const {onAddRow, onActiveToAdded, isAddActive} = this.props;
        const {id, firstName, lastName, email, phone} = this.state;
        const newRow = {id, firstName, lastName, email, phone};
        const enableButton = (!(id !== '' && firstName !== '' && lastName !== '' && email !== '' && phone !== ''));

        return (
            <div>
                {
                    !isAddActive
                        ? <button className='btn btn-outline-secondary add-button'
                                  onClick={() => onActiveToAdded()}>Добавить</button>
                        : <Fragment>
                        <form onSubmit={this.onSubmitHandler} className='add-row-form'>
                            <InputsContainer {...this.state} onChangeInputValue={this.onChangeInputValue}/>
                            <button className='btn btn-outline-secondary'
                                    onClick={() => onAddRow(newRow)} disabled={enableButton}
                            >
                                Добавить в таблицу
                            </button>
                        </form>
                        </Fragment>
                }
            </div>
        );
    }
}

export default AddRow;