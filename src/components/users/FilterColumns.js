import React from 'react';
import { inject, observer } from 'mobx-react';
import { SidebarHeader, FilterHeader, CheckContainer, CheckWrapper } from './userStyles';
import { Close } from 'styled-icons/material/Close';

@inject('uiStore')
@observer
class FilterColumns extends React.Component {
    createCheckbox = (option) => {
        const { uiStore } = this.props;

        return (
            <CheckWrapper key={option}>
                <input
                    type="checkbox"
                    name={option}
                    id={option}
                    checked={uiStore.checkboxes[option]}
                    onChange={this.handleCheckboxChange}
                />  
                <label htmlFor={option}></label>
                <span>{option[0].toUpperCase() + option.slice(1)}</span>
            </CheckWrapper>
        ); 
    }

    handleCheckboxChange = (event) => {
        const { uiStore } = this.props;
        const { name } = event.target;
        uiStore.setCheckbox(name);
    }

    createCheckboxes = () => {
        const { uiStore } = this.props;
        return uiStore.OPTIONS.map(this.createCheckbox);
    }

    render() {
        const { uiStore } = this.props;
    
        return (
            <React.Fragment>
                <SidebarHeader>
                    <FilterHeader>User Attributes</FilterHeader>
                    <Close 
                        size="30" 
                        onClick={uiStore.showSidebar}
                        style={{cursor: 'pointer'}} 
                        title="Close" 
                    />
                </SidebarHeader>
                <CheckContainer>
                    {this.createCheckboxes()}
                </CheckContainer>
            </React.Fragment>
        );
    }
};


export default FilterColumns;