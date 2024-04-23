import React from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";

const ApplicationForm = () => {

    return (
        <FormfacadeEmbed

            formFacadeURL="https://formfacade.com/include/107154563367781919342/form/1FAIpQLSdz8-50A5epsJQGv8jj9pCfjB9oUc5-uqoa4AOpuX8C5aOSWQ/classic.js/?div=ff-compose"

            onSubmitForm={() => console.log('Form submitted')}

        />
    );
};

export default ApplicationForm;