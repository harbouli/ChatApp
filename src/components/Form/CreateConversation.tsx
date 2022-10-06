import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import Input from './Input';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import TextArea from './TextArea';

const CreateConversation = () =>
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
                onSubmit={ ( values ) =>
                {

                } }>
                { ( form ) =>
                    <Form className="w-[700px] bg-gray-dark rounded-xl z-10" >

                        <div className="p-6 border-b-[1px] border-b-[#fbfbfb52]">
                            <h1 className='text-2xl font-bold '>Create Conversion</h1>
                        </div>
                        <div className='px-6 my-5'>
                            <Input name="name" type="text" />
                            <div className='h-2' />
                            <TextArea rows="8" cols="50" name="description" />
                            <Button title='Submit' type="submit" onClick={ () => form.handleSubmit() } />
                        </div>
                    </Form >

                }
            </Formik>
        </div>

    )
}

export default CreateConversation