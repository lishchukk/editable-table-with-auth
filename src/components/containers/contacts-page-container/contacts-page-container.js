import React from 'react';
import ContactsPage from "../../../pages/contacts-page/contacts-page";

import TableSearch from "../../table-search/table-search";
import AddRow from "../../add-row/add-row";
import EditRow from "../../edit-row/edit-row";
import Spinner from "../../spinner/spinner";


const ContactsPageContainer = ({
                                   isEditMode, isLoading, sort, onSort, sortField, elemToEdit, filteredData,
                                   onAddRow, onActiveToAdded, isAddActive, onSaveEditForm, onEdit, onSearchHandler,
                                   onDeleteItem
                               }) => {

    return (
        <div className='contacts-wrapper'>

            <h2>Your contacts</h2>

            <TableSearch onSearch={onSearchHandler}/>

            <AddRow onAddRow={onAddRow} onActiveToAdded={onActiveToAdded} isAddActive={isAddActive}/>

            {
                isEditMode
                    ? <EditRow isEditeMode={isEditMode} onSaveEditForm={onSaveEditForm}
                               elemToEdit={elemToEdit} isAddActive={isAddActive}
                               isEditMode={isEditMode}/>
                    : null
            }

            {
                isLoading
                    ? <Spinner/>
                    : <ContactsPage data={filteredData} sort={sort} sortField={sortField}
                                    onSort={onSort} onDelete={onDeleteItem} onEdit={onEdit}
                                    isEditMode={isEditMode}
                    />
            }

        </div>
    );
};

export default ContactsPageContainer;