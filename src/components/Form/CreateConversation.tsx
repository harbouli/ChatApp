import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { FC } from 'react'
import Input from './Input';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import TextArea from './TextArea';
import { MdClose } from 'react-icons/md';

type Props = {
    toggleModel: () => void;
}
const CreateConversation: FC<Props> = ( { toggleModel } ) =>
{
    const validation = Yup.object( {

        name: Yup.string()
            .required( 'Required' ).min( 3, 'Please Enter More than 3 Characters' ),
        description: Yup.string()
            .required( 'Required' )
            .min( 8, 'Description Must Contain At Least 8 Characters,' )

    } )
    return (
        <div className="flex justify-center items-center h-screen absolute w-screen">
            <Formik initialValues={ {
                name: '',
                description: '',
            } }
                validationSchema={ validation }
                onSubmit={ async ( values ) =>
                {

                } }>
                { ( form ) =>
                    <Form className="w-[700px] bg-gray-dark rounded-xl z-10" >

                        <div className="p-6 border-b-[1px] border-b-[#fbfbfb52] flex justify-between items-center">
                            <h1 className='text-2xl font-bold '>Create Conversion</h1>
                            <MdClose size={ 25 } className='cursor-pointer' onClick={ toggleModel } />
                        </div>
                        <div className='px-6 my-5'>
                            <Input placeholder='Recipient' name="name" type="text" />
                            <div className='h-2' />
                            <TextArea placeholder="Message (Option)" rows="8" cols="50" name="description" />
                            <Button title='Submit' type="submit" onClick={ () => form.handleSubmit() } />
                        </div>
                    </Form >

                }
            </Formik>
        </div>

    )
}

export default CreateConversation