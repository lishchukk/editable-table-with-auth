import React, {Component} from 'react';
import './edit-row.scss'
import InputsContainer from "../containers/inputs-container/inputs-container";


class EditRow extends Component {



    state = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    };

    onChangeInputValue = (event) => {

        this.setState({

            [event.target.name]: event.target.value
        });

    };

    onEditElemToState = elemToEdit => {
        this.setState({
            id: elemToEdit.id,
            firstName: elemToEdit.firstName,
            lastName: elemToEdit.lastName,
            email: elemToEdit.email,
            phone: elemToEdit.phone
        }, () => 'elem to edit set in state');
    };

    componentDidMount() {
        this.onEditElemToState(this.props.elemToEdit)
    }


    render() {

        const { onSaveEditForm, elemToEdit, isEditMode, isAddActive} = this.props;

        return (
            <form  className='edit-form'>
                <InputsContainer {...this.state} onChangeInputValue={this.onChangeInputValue}
                                 elemToEdit={elemToEdit} isAddActive={isAddActive}
                                 isEditMode={isEditMode}
                />
                <button className='btn btn-outline-secondary'
                        onClick={() => {
                            this.onEditElemToState(elemToEdit);
                            onSaveEditForm(this.state)
                        }
                        }
                >
                    Сохранить изменения
                </button>
            </form>
        )
    }
}


export default EditRow;